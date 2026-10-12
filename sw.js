/* Slip service worker: prefer network so Home Screen gets updates. */
const VERSION = "2026.10.12.8";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(`slip-${VERSION}`).then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        `./styles.css?v=${VERSION}`,
        `./app.js?v=${VERSION}`,
        `./version.js?v=${VERSION}`,
        "./manifest.json",
      ]).catch(() => undefined),
    ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("slip-") && key !== `slip-${VERSION}`)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      try {
        const fresh = await fetch(request, { cache: "no-store" });
        const cache = await caches.open(`slip-${VERSION}`);
        cache.put(request, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          return caches.match("./index.html");
        }
        throw new Error("Offline and not cached");
      }
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
