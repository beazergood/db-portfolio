# davebeazer.dev

Personal portfolio site — [davebeazer.dev](https://www.davebeazer.dev/)

## Static Site (`/static/`)

A lightweight, no-framework portfolio built with plain HTML, CSS, and vanilla JS. No build step, no dependencies.

- Semantic HTML5 with accessibility features (skip links, ARIA labels, keyboard nav)
- Hand-written CSS with custom properties, mobile-first responsive design
- Reduced motion support, print stylesheet
- ~85 lines of vanilla JS for smooth scroll, mobile nav, and scroll-triggered animations

### Local Development

```bash
cd static
python3 -m http.server 8080
# Open http://localhost:8080
```

## Legacy Site

The original site was built with Next.js 11, React 17, styled-components, Tailwind, and Storybook, backed by a Strapi 3 CMS on Heroku. These files remain in `/src/` and `/dwjb-api/` for reference during migration.
