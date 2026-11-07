// Edit these before publishing the site.
window.SITE_CONFIG = {
  // Paste the Chrome Web Store listing URL here once the extension is approved.
  CHROME_STORE_URL: '',
  // Attribution shown in the footer. Leave PUBLISHER_URL empty for plain text.
  PUBLISHER: 'Crypto Renegades',
  PUBLISHER_URL: 'https://www.cryptorenegades.co/?utm_source=scam_checker_site&utm_medium=referral',
};

(function () {
  var c = window.SITE_CONFIG;
  document.querySelectorAll('[data-install]').forEach(function (a) {
    if (c.CHROME_STORE_URL) {
      a.href = c.CHROME_STORE_URL;
      a.rel = 'noopener';
    } else {
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
      a.classList.add('soon');
      var label = a.querySelector('[data-install-label]');
      if (label) label.textContent = a.hasAttribute('data-short') ? 'Coming soon' : 'Coming soon to Chrome';
    }
  });
  document.querySelectorAll('[data-publisher]').forEach(function (el) {
    if (c.PUBLISHER_URL) {
      var a = document.createElement('a');
      a.href = c.PUBLISHER_URL;
      a.textContent = c.PUBLISHER;
      el.replaceChildren(a);
    } else {
      el.textContent = c.PUBLISHER;
    }
  });
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
