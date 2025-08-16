self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('arakhne-cache-v1').then(c=> c.addAll([
    './arakhne_log_pwa.html',
    './arakhne_manifest.json'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(resp=> resp || fetch(e.request)));
});