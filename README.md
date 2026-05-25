# ASVAB Coach — Public Site

Source for **[asvab.khassinx.com](https://asvab.khassinx.com)** — the public web presence for [ASVAB Coach](https://apps.apple.com/us/app/asvab-coach/id6761384966).

## Pages

- **[Landing](https://asvab.khassinx.com/)** — `index.html` (custom HTML for marketing)
- **[Privacy Policy](https://asvab.khassinx.com/legal/privacy)** — `legal/privacy.md`
- **[Terms of Use](https://asvab.khassinx.com/legal/terms)** — `legal/terms.md`
- **[Legal hub](https://asvab.khassinx.com/legal/)** — `legal/index.md`

App development repo: [khassinx/ASVABCoach](https://github.com/khassinx/ASVABCoach) (private).

## Hosting

Served via **GitHub Pages** with custom domain `asvab.khassinx.com` (CNAME record in Cloudflare zone `khassinx.com`, proxy off for Let's Encrypt cert auto-issuance).

## Legacy URLs

Old paths still work — they 301-redirect to the new canonical URLs:

- `khassinx.github.io/ASVABCoach-legal/PRIVACY_POLICY` → `asvab.khassinx.com/legal/privacy`
- `khassinx.github.io/ASVABCoach-legal/TERMS_OF_USE` → `asvab.khassinx.com/legal/terms`
- Short aliases `/privacy` and `/terms` also redirect to `/legal/privacy` and `/legal/terms`

This means in-app links in ASVAB Coach v2.2 (LIVE on App Store) keep working through the redirect chain. v2.2.4 will update to the canonical URLs.

## Contact

- **Developer**: Abraham K. Alonso (KhassinX) · Tampa, FL · USA
- **Email**: hello@khassinx.com

## License

Legal documents (`legal/*.md`) are released under **CC0 1.0** (public domain dedication) — feel free to adapt for your own indie iOS apps. They reflect a privacy-first, no-account, no-tracking architecture that may not apply to apps with different data practices.

Custom landing page (`index.html`) and site assets are proprietary.

The ASVAB Coach app itself is **proprietary** and not covered by this CC0 dedication.
