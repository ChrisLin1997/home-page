const APP_ASSETS_CACHE_NAME = `app-assets-cache-v0.0.1`

self.addEventListener('install', event => {
  console.log('[Service Worker] - install event')
})

self.addEventListener('fetch', function(event) {
  const isNewApi = /^https:\/\/gnews.io\/api.*/.test(event.request.url)
  const day = new Date().getDay()

  event.respondWith(
    caches.match(event.request.url + day).then(function(response) {
      if (response) return response
      else {
        if (isNewApi) {
          fetch(event.request)
            .then(res => {
              caches.open('api').then(cache => {
                cache.put(event.request.url + day, res.clone())
                cache.delete(event.request.url + (day === 0 ? 6 : day - 1))
              })
              return res
          })
        } else return fetch(event.request)
      }
    })
  )
})
