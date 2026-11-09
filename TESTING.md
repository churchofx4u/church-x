# Testing Worship With Me

These checks make sure the Sunday app still works after a change. They do **not** ship to the live site. The app itself stays free of npm packages; everything here is for developers only.

## What the tests cover

- **Present** — opens the booth view and projector window, and adds each hymn to the CCLI log once.
- **Rehearse** — practice mode never adds songs to the CCLI log.
- **Import Sunday** — “Add as new Sunday” and “Replace everything”, plus undo.
- **Restore backup** — confirm dialog, replace, and undo.
- **CCLI report** — current period table, CSV export, start a new period, export a past period.
- **Songs** — add a licensed song, paste lyrics with a preview, import SongSelect `.txt` and ChordPro `.cho` files, and put a song on Sunday.
- **First-run setup** — the welcome wizard (name, theme, sample Sunday).
- **Offline cache** — the service worker registers; with the network off the app still loads; `sw.js` lists every local file the pages use (including `song-import.js`); test files are not in that list.

There is also a small Node check at `test/song-import-test.js` for the paste / SongSelect / ChordPro parsers (no browser needed).

## Not covered yet (pending)

- **Song edit / search / delete** — the Songs screen does not have those controls yet. The matching tests are skipped.

## Run them on your computer

You need Node.js 18 or newer.

```bash
npm ci
npx playwright install --with-deps chromium firefox
npm test
```

That starts a tiny local web server, opens Chromium and Firefox, and runs every test. An HTML report lands in `playwright-report/` if you want to open it with `npm run report`.

To run only the song-import parser checks:

```bash
node test/song-import-test.js
```

## GitHub Actions

On every pull request and every push to `main`, GitHub runs the same suite. If it fails, the HTML report is uploaded as an artifact named `playwright-report`.

## Notes for people changing the app

- Keep `package.json` / `package-lock.json` / `tests/` / `test/` / `.github/workflows/tests.yml` out of the service worker cache list in `sw.js`.
- When you add a new HTML, CSS, JS, image, or theme file that the live app needs offline, add it to the `FILES` list in `sw.js` and bump the `CACHE` version (`church-x-vN`).
- Do not add runtime npm dependencies to the app. Dev-only packages for tests are fine.

## Browser notes

- Tests run in **Chromium** and **Firefox**.
- Offline reload is checked with a real offline navigation in Chromium. In Firefox, Playwright blocks navigations when offline (`NS_ERROR_OFFLINE`) even with a service worker, so that browser checks that Cache Storage still holds a working app shell instead.
- The Rehearse button currently shares `id="stage"` with the projector overlay. The Rehearse CCLI test still verifies that practice runs do not write to the log.

