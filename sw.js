const CACHE_NAME = 'topogirassol-v1';
const CDN = 'https://' + 'unpkg' + '.com/';
const ARCHIVOS_OFFLINE = [
  './',
  './index.html',
  './manifest.json',
  './mapageneral2.mbtiles',
  './curvas4.mbtiles',
  './cables.mbtiles',
  CDN + 'leaflet@1.9.4/dist/leaflet.css',
  CDN + 'leaflet@1.9.4/dist/leaflet.js',
  CDN + 'sql.js@1.8.0/dist/sql-wasm.js',
  CDN + 'sql.js@1.8.0/dist/sql-wasm.wasm',
  CDN + 'leaflet.tilelayer.mbtiles@1.0.2/Leaflet.TileLayer.MBTiles.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS_OFFLINE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
});
