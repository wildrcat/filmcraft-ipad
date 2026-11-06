// Keeps FilmCraft on the iPad so it opens fast and works offline.
// Bump VERSION when the app files change so the new build replaces the old one.
const VERSION = "filmcraft-0.17.1-ipad-1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "filmcraft_web.js",
  "filmcraft_web_bg.wasm.gz",
  "audio-worklet.js",
  "snippets/eframe-d31a8450ea12dfc1/inline0.js",
  "favicon.png",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // The page itself: try the network first so updates arrive, fall back to the saved copy offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put("index.html", copy));
        return res;
      }).catch(() => caches.match("index.html"))
    );
    return;
  }
  // Everything else: saved copy first (the app binary is big), network if missing.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
