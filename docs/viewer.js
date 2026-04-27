/* ---------------------------------------------------------------------------
   db-portfolio · wiki viewer
   No build, no framework. Hash routing, fetch, marked.js render.
--------------------------------------------------------------------------- */

const MANIFEST = [
  {
    section: "Wiki",
    pages: [
      { title: "Catalogue", path: "wiki/index.md" },
      { title: "Architecture", path: "wiki/architecture.md" },
      { title: "Design System", path: "wiki/design-system.md" },
      { title: "Decisions", path: "wiki/decisions.md" },
      { title: "Ideas", path: "wiki/ideas.md" },
      { title: "Activity Log", path: "wiki/log.md" },
    ],
  },
  {
    section: "Project",
    pages: [
      { title: "Spec", path: "project/spec.md" },
      { title: "Roadmap", path: "project/roadmap.md" },
    ],
  },
  {
    section: "Features",
    pages: [
      { title: "April Fools 2026", path: "features/april-fools-2026/spec.md" },
      { title: "Redesign Retro", path: "features/redesign-retro/spec.md" },
    ],
  },
  {
    section: "Guides",
    pages: [
      { title: "Deployment", path: "guides/deployment.md" },
    ],
  },
  {
    section: "Meta",
    pages: [
      { title: "Working Log", path: "WORKLOG.md" },
    ],
  },
];

const DEFAULT_PATH = "wiki/index.md";

const $content = document.getElementById("content");
const $nav = document.getElementById("docs-nav");
const $sidebarToggle = document.querySelector(".docs-sidebar__toggle");

// ----------------------------------------------------------------------- //
// Sidebar                                                                  //
// ----------------------------------------------------------------------- //

function renderSidebar() {
  const html = MANIFEST.map(section => `
    <section class="docs-nav__section">
      <h3 class="docs-nav__heading">${section.section}</h3>
      <ul class="docs-nav__list">
        ${section.pages.map(p => `
          <li><a href="#${pathToHash(p.path)}" data-path="${p.path}">${p.title}</a></li>
        `).join("")}
      </ul>
    </section>
  `).join("");
  $nav.innerHTML = html;
}

function highlightActive(path) {
  $nav.querySelectorAll("a").forEach(a => {
    a.classList.toggle("is-active", a.dataset.path === path);
  });
}

if ($sidebarToggle) {
  $sidebarToggle.addEventListener("click", () => {
    const open = $nav.classList.toggle("is-open");
    $sidebarToggle.setAttribute("aria-expanded", String(open));
  });
}

// ----------------------------------------------------------------------- //
// Routing                                                                  //
// ----------------------------------------------------------------------- //

function pathToHash(path) {
  // wiki/architecture.md → wiki/architecture
  return path.replace(/\.md$/, "");
}

function hashToPath(hash) {
  // #wiki/architecture → wiki/architecture.md
  let h = (hash || "").replace(/^#/, "").trim();
  if (!h) return DEFAULT_PATH;
  if (!h.endsWith(".md") && !h.endsWith(".html")) h += ".md";
  return h;
}

function resolveRelative(href, currentPath) {
  // Resolve "./architecture.md" or "../project/spec.md" against current page path.
  const base = "https://x/" + currentPath;
  try {
    const url = new URL(href, base);
    if (url.origin !== "https://x") return null; // external link
    return url.pathname.replace(/^\//, "");
  } catch {
    return null;
  }
}

// ----------------------------------------------------------------------- //
// Fetch + render                                                           //
// ----------------------------------------------------------------------- //

function stripFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { body: md, meta: {} };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { body: md.slice(m[0].length), meta };
}

async function loadPage(path) {
  $content.innerHTML = `<p class="docs-loading">Loading ${path}…</p>`;
  highlightActive(path);

  let res;
  try {
    res = await fetch(path, { cache: "no-cache" });
  } catch (err) {
    return renderError(`Network error fetching ${path}: ${err.message}`);
  }
  if (!res.ok) {
    return renderError(`Could not load ${path} (HTTP ${res.status}).`);
  }

  const text = await res.text();

  if (path.endsWith(".html")) {
    // Embed HTML overviews via iframe so their styles don't bleed.
    $content.innerHTML = `
      <iframe src="${path}" style="width:100%;min-height:80vh;border:1px solid var(--color-border);border-radius:.5rem"></iframe>
    `;
    document.title = `db-portfolio · ${path}`;
    return;
  }

  const { body, meta } = stripFrontmatter(text);
  const html = marked.parse(body);
  $content.innerHTML = html;

  // Update document title
  document.title = meta.title
    ? `${meta.title} · db-portfolio`
    : `${path} · db-portfolio`;

  rewriteLinks(path);
  $content.scrollIntoView({ behavior: "instant", block: "start" });
}

function renderError(msg) {
  $content.innerHTML = `<div class="docs-error">⚠ ${msg}</div>`;
}

function rewriteLinks(currentPath) {
  $content.querySelectorAll("a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;
    if (href.startsWith("#")) return;     // in-page anchor — leave alone
    if (/^[a-z]+:/i.test(href)) {         // absolute URL
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
      return;
    }

    const resolved = resolveRelative(href, currentPath);
    if (!resolved) return;

    if (resolved.endsWith(".md")) {
      a.setAttribute("href", "#" + pathToHash(resolved));
      return;
    }
    // Other relative links (images, html files, root files) — leave them
    // as-is; the static server will serve them. For .html overviews users
    // can either open them directly or we can route them through the iframe
    // path by using the # hash form.
  });
}

// ----------------------------------------------------------------------- //
// Boot                                                                     //
// ----------------------------------------------------------------------- //

function handleHashChange() {
  const path = hashToPath(window.location.hash);
  loadPage(path);
  // Auto-close sidebar on mobile after navigation
  if (window.innerWidth <= 800 && $nav.classList.contains("is-open")) {
    $nav.classList.remove("is-open");
    $sidebarToggle?.setAttribute("aria-expanded", "false");
  }
}

window.addEventListener("hashchange", handleHashChange);

renderSidebar();
handleHashChange();
