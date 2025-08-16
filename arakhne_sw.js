// disable service worker
self.addEventListener("install", e => {
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  clients.claim();
});
self.addEventListener("fetch", e => {
  return fetch(e.request);
});
