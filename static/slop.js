(() => {
  'use strict';

  // -- Animated counter for fun facts --
  const counters = document.querySelectorAll('.fun-fact__number[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1500;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });
    counters.forEach(el => observer.observe(el));
  }

  // -- Random visitor count --
  const visitorEl = document.getElementById('visitor-count');
  if (visitorEl) {
    const base = 48291;
    const random = Math.floor(Math.random() * 200);
    visitorEl.textContent = (base + random).toLocaleString('en-US', {
      minimumIntegerDigits: 6,
      useGrouping: true
    }).replace(/,/g, ',');
  }

  // -- Skill tags wobble on hover --
  document.querySelectorAll('.skill-tag--c').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = `rotate(${(Math.random() - 0.5) * 6}deg)`;
    });
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = '';
    });
  });

  // -- Konami code easter egg --
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;
  document.addEventListener('keydown', e => {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        document.body.style.fontFamily = '"Comic Neue", "Comic Sans MS", cursive';
        document.body.style.transition = 'font-family 0.5s';
        const banner = document.createElement('div');
        banner.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#ff6b6b,#feca57,#48dbfb,#ff9ff3);color:#fff;font-size:2rem;font-weight:900;padding:40px 60px;border-radius:24px;z-index:999999;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,0.4);font-family:"Comic Neue",cursive;';
        banner.innerHTML = '&#127911; SLOP MODE ACTIVATED &#127911;<br><span style="font-size:1rem;opacity:0.9">Everything is Comic Sans now. You\'re welcome.</span>';
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 4000);
      }
    } else {
      konamiIndex = 0;
    }
  });

  // -- Theme switcher --
  const themeBtns = document.querySelectorAll('.theme-switcher__btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      themeBtns.forEach(b => {
        b.classList.remove('active', 'active--dark', 'active--rainbow');
      });
      btn.classList.add('active');
      if (theme === 'dark') btn.classList.add('active--dark');
      if (theme === 'rainbow') btn.classList.add('active--rainbow');
    });
  });

  // -- Console branding --
  console.log(
    '%c lol.davebeazer.dev ',
    'background: linear-gradient(135deg, #C285D3, #642975); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;'
  );
  console.log(
    '%cHappy April Fools! This is the slop edition of my portfolio. The real one is at davebeazer.dev',
    'color: #8F91A8; font-size: 12px;'
  );
})();
