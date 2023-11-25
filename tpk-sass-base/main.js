import './components.js';

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  console.log(path);

  const menuLinks = document.querySelectorAll('#menu a');

  menuLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const sassHref = `/tpk-sass-base/${href}`;
    console.log(sassHref);

    if (
      path === sassHref ||
      (path.endsWith('/') && path + '/tpk-sass-base/index.html' === sassHref)
    ) {
      link.classList.add('active');
    }
  });
});
