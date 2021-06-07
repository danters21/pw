self.addEventListener('push', function(e) {
    var payload = JSON.parse(e.data.text());
    var options = {
        body: payload.message,
        icon: 'images/logo-tp.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
            url: payload.url
        },
        actions: [
            { action: 'explore', title: 'Show'}
        ]
    };
    e.waitUntil(        
        self.registration.showNotification(payload.subject, options)
    );
    console.log("force change");
  }
);

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  });
// git remote add origin git_url_here