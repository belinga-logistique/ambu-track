// Ambu Track — service worker : ouverture hors ligne, cache des fonds de carte consultés.
// Les données (Supabase) ne passent jamais par le cache : elles sont gérées par l'application.
const VERSION = '1.5.3';
const CACHE_APP = 'ambu-app-' + VERSION;
const CACHE_LIB = 'ambu-lib-1';
const CACHE_TUILES = 'ambu-tuiles-1';
const CACHE_POLICES = 'ambu-polices-1';
const MAX_TUILES = 6000;
const APP = ['./', './index.html', './manifest.webmanifest', './icone.svg', './icone-192.png', './icone-512.png', './icone-maskable-512.png'];
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE_APP);
    await c.addAll(APP.map((u) => new Request(u, { cache: 'reload' })));
    const l = await caches.open(CACHE_LIB);
    for (const u of LIBS) { if (!(await l.match(u))) { try { await l.add(new Request(u, { mode: 'cors' })); } catch { /* réessayé plus tard */ } } }
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith('ambu-app-') && k !== CACHE_APP) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => { if (e.data === 'activer') self.skipWaiting(); });

async function limiterTuiles() {
  const c = await caches.open(CACHE_TUILES);
  const cles = await c.keys();
  for (let i = 0; i < cles.length - MAX_TUILES; i++) await c.delete(cles[i]);
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Fonds de carte : cache d'abord (consultation hors ligne des zones déjà vues)
  if (/tile\.openstreetmap\.org$/.test(url.hostname) || (url.hostname === 'server.arcgisonline.com' && url.pathname.includes('/tile/'))) {
    e.respondWith((async () => {
      const c = await caches.open(CACHE_TUILES);
      const hit = await c.match(req.url);
      if (hit) return hit;
      try {
        const r = await fetch(req);
        if (r.ok) { await c.put(req.url, r.clone()); limiterTuiles(); }
        return r;
      } catch { return new Response('', { status: 504 }); }
    })());
    return;
  }

  // Police des titres (Google Fonts) : cache d'abord, pour l'affichage hors ligne
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith((async () => {
      const c = await caches.open(CACHE_POLICES);
      const hit = await c.match(req.url);
      if (hit) return hit;
      try { const r = await fetch(req); if (r.ok) await c.put(req.url, r.clone()); return r; }
      catch { return new Response('', { status: 504 }); }
    })());
    return;
  }

  // Bibliothèques (carte, Excel) : cache d'abord
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith((async () => {
      const c = await caches.open(CACHE_LIB);
      const hit = await c.match(req.url);
      if (hit) return hit;
      const r = await fetch(req);
      if (r.ok) await c.put(req.url, r.clone());
      return r;
    })());
    return;
  }

  if (url.origin !== self.location.origin) return;   // Supabase, itinéraires : réseau direct

  // Application : réseau d'abord (mises à jour), cache si hors ligne
  e.respondWith((async () => {
    const c = await caches.open(CACHE_APP);
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 4000);
      const r = await fetch(req, { signal: ctl.signal, cache: 'no-cache' });
      clearTimeout(t);
      if (r.ok && (req.mode === 'navigate' || APP.some((a) => url.pathname.endsWith(a.replace('./', '/'))))) {
        await c.put(req.mode === 'navigate' ? './index.html' : req, r.clone());
      }
      return r;
    } catch {
      const hit = (await c.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? await c.match('./index.html') : null);
      return hit || new Response('Hors ligne', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  })());
});
