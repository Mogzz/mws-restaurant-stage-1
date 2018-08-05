self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/css/',
          '/img/',
          '/index.html',
          '/css/styles.css',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/dbhelper.js',
          '/data/restaurants.json'
        ]);
      })
      .catch(function(error){
          console.log(error);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });