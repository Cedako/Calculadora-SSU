;
const CACHE_NAME='v1_cache_calculadora',
urlsToCache=[
    './',
    './style.css',
    './calculadora.js',
    './img/SSU.png'
]
//instalar
self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWaiting())
        })
        .catch(err=>console.log('Falló el registro de la cache',err))
    )
})
//usa la cache cuando no hay conexion.
self.addEventListener('activate', e=>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{
            cacheNames.map(cacheName=>{
                if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(()=>self.clients.claim())
    )
})

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res){
                return res
            }
            
            return fetch(e.request);
        })
    )
})