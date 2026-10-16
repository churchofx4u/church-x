# Custom domain + old trial site — plan

**Decision (2026-10-16): no custom domain for now; stay on https://churchofx4u.github.io/church-x/.** The plan below is kept for later.

Status: parked. Nothing has been changed in DNS, GitHub settings or the old site.

## Today
- App: https://churchofx4u.github.io/church-x/ (GitHub Pages from `main`, no custom domain set; checked via `gh api repos/churchofx4u/church-x/pages`).
- Other repo: `churchofx4u/funeral-sheet` (no Pages site).
- Hard-coded URLs to change when we move: `og:url`/`og:image` in index.html and for-churches.html, the share post in for-churches.html and app.js, `publicUrl` default and Help copy in app.js, README.

## Steps
1. **Pick and buy a domain** (e.g. `worshipwithme.app`), Church X decides. Use a registrar with DNSSEC (Cloudflare, Porkbun, Namecheap).
2. **Verify the domain in GitHub** (account Settings → Pages → Verified domains, TXT record) to prevent takeover.
3. **DNS**
   - Apex: `A` records to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, plus `AAAA` 2606:50c0:8000::153, 8001::153, 8002::153, 8003::153.
   - `www`: `CNAME` → `churchofx4u.github.io`.
   - If using Cloudflare, set the records to DNS only (grey cloud) until the certificate is issued.
4. **Repo**: add a `CNAME` file with the domain (or set it in Settings → Pages; GitHub commits the file). Via PR, like every change.
5. **HTTPS**: wait for the certificate (minutes to a day), then tick "Enforce HTTPS".
6. **Update URLs** listed above in one PR; bump the sw.js cache.

## Service worker and cache implications
- The path changes from `/church-x/` to `/`. The app uses relative paths (`./sw.js`, `./index.html`), so it works at the new root unchanged.
- A service worker is tied to its origin. The new domain starts with a fresh cache (users need one online visit). **localStorage is also per-origin, so a church's saved Sundays do not move.** Mitigation: before switching, ship the "Back up your Sunday" reminder (PR #5) and a one-time banner on the old origin: "We moved. Export Sunday, then Import at <new domain>."
- GitHub Pages redirects `churchofx4u.github.io/church-x/*` to the custom domain once it's set. The old service worker may keep serving the cached app at the old origin. Keep `sw.js` network-first (it already is) so the redirect is picked up, and bump `CACHE` in the moving release.
- Keep the old origin's data reachable: the redirect means users can't open the old origin to export. Consider delaying the CNAME by a week after the move banner ships, or keep an `/export.html` on the old path (not possible once redirected; decide on the order).

## Old trial site
- Found in README.md: "The older trial at ever-garden-light-cloud.grok.me is not this app." It is live (HTTP 200 on 2026-10-16), titled "Worship With Me", and built differently (bundled `/assets/*.css`). It is not in any churchofx4u GitHub repo (only `church-x` and `funeral-sheet` exist), so it isn't controlled from this repo.
- Options (not done, needs Church X):
  1. **Redirect** (preferred): in the place it was built/hosted (a grok.me app), replace the page with a short "Worship With Me has moved" page plus a meta refresh/JS redirect to the new URL. Keep it for ~3 months.
  2. **Remove/unpublish** it from the same dashboard after the redirect period.
- Nothing was deleted.

## Open questions
- Which domain, and who owns the registrar account?
- Who has access to the grok.me trial, and can it serve a redirect?
- Do the move before or after the cloud sync launch? (Sync would carry data across origins.)
