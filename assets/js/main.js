// Zoe Baumrind — portfolio behaviour (no frameworks, no build step)

(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Highlight the current page in the nav
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var target = a.getAttribute('href').split('/').pop();
    if (target === here) a.setAttribute('aria-current', 'page');
  });

  // Work page filters
  var filterButtons = document.querySelectorAll('.filter-btn');
  var cases = document.querySelectorAll('.case');
  if (filterButtons.length && cases.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-filter');
        filterButtons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
        cases.forEach(function (c) {
          var tags = (c.getAttribute('data-tags') || '').split(' ');
          var show = key === 'all' || tags.indexOf(key) !== -1;
          c.classList.toggle('hidden', !show);
        });
      });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
