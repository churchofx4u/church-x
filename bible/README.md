# Offline Bible text

Bundled for Worship With Me so scripture slides work with no network and no API keys.

| Folder | Translation | License |
|--------|-------------|---------|
| `web/` | World English Bible (WEB) | Public domain (Rainbow Missions / eBible.org) |

Source packing: [midvash/bible-data](https://github.com/midvash/bible-data) (public-domain WEB). Text is unchanged; filenames are compacted for lazy-load.

**Not included:** NIV, ESV, NKJV, or any other licensed translation. Do not add those here.

`index.json` is listed in `sw.js` for install-time cache. Individual book files are fetched on demand and cached by the service worker on first use.
