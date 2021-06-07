self.addEventListener('push', function(e) {
    var payload = JSON.parse(e.data.text());
    var options = {
        body: 'Data from push: ' + payload.message,
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
            url: payload.url
        },
        actions: [
            { action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'},
                { action: 'close', title: 'Close',
                icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(        
        self.registration.showNotification('Updated new vehicles', options)
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