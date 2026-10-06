// Service worker ringkas untuk PWA installability.
// Sengaja TIDAK cache apa-apa, supaya anda sentiasa dapat versi terkini
// setiap kali fail index.html dikemaskini di GitHub.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('Tiada sambungan internet.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    })
  );
});
