# Crypto Scam Checker: website

A small static site (landing page and privacy policy) for GitHub Pages. The Chrome Web Store needs a public privacy policy URL; this provides it.

## Before publishing

1. The addresses are set for `https://cryptorenegades.github.io/crypto-scam-checker/` (the free `cryptorenegades` GitHub organization). If the site moves, update `index.html`, `privacy.html`, `sitemap.xml` and `robots.txt`.
2. Edit `config.js`: paste the store listing link into `CHROME_STORE_URL` once the extension is approved. Until then the buttons say "Coming soon".

## Publish on GitHub Pages

1. In the `cryptorenegades` organization, create a new public repository named `crypto-scam-checker`.
2. Upload the contents of this `site` folder to the root of the repository (keep the empty `.nojekyll` file).
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://cryptorenegades.github.io/crypto-scam-checker/`. The privacy policy is at `.../privacy.html`; use that address in the store listing.
5. Optional: add a custom domain under Settings, Pages, and update the addresses from step 2.

## Files

* `index.html`: landing page (what it checks, screenshots, privacy summary, FAQ)
* `privacy.html`: privacy policy in plain English
* `styles.css`: shared styles, light and dark mode
* `config.js`: the install link and attribution settings
* ``: screenshots, icons and the Open Graph image (1200x630)
* `sitemap.xml`, `robots.txt`: search engine files (update the base address)
