(() => {
  'use strict';

  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile-menu');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // -- Smooth scroll with sticky nav offset --
  allNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = nav ? nav.offsetHeight : 0;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      closeMenu();
    });
  });

  // -- Mobile nav toggle --
  function closeMenu() {
    mobileMenu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }

  toggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', e => {
    if (mobileMenu?.classList.contains('open') && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  // -- Sticky nav scroll state --
  function updateNav() {
    if (!nav) return;
    const hero = document.querySelector('#hero');
    const threshold = hero ? hero.offsetHeight : 100;
    nav.classList.toggle('scrolled', window.scrollY > threshold);
  }

  // -- Active link highlighting --
  function updateActiveLink() {
    const offset = (nav ? nav.offsetHeight : 0) + 20;
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section.id;
      }
    });
    allNavLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // -- Throttled scroll handler --
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNav();
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // -- Intersection Observer for scroll animations --
  const animated = document.querySelectorAll('.animate-on-scroll');
  if (animated.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animated.forEach(el => observer.observe(el));
  }

  // -- Init --
  updateNav();
  updateActiveLink();
})();
