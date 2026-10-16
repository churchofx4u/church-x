const CACHE = "church-x-v21";
const FILES = [
  "./index.html",
  "./licensing.html",
  "./for-churches.html",
  "./landing.js",
  "./shots/run-sheet.webp",
  "./shots/run-sheet.png",
  "./shots/lyrics.webp",
  "./shots/lyrics.png",
  "./shots/hymn-picker.webp",
  "./shots/hymn-picker.png",
  "./shots/title-slide.webp",
  "./shots/title-slide.png",
  "./privacy.html",
  "./terms.html",
  "./styles.css",
  "./config.js",
  "./app.js",
  "./onboarding.js",
  "./vendor/qrcode.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-maskable.svg",
  "./logo.svg",
  "./logo-light.svg",
  "./favicon-32.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./share.jpg",
  "./themes/midnight.jpg",
  "./themes/parchment.jpg",
  "./themes/harvest.jpg",
  "./themes/river.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => {
      const url = new URL(event.request.url);
      if (url.pathname.endsWith("index.html") || url.search.includes("screen=house")) return caches.match("./index.html");
      return caches.match(event.request);
    })
  );
});
