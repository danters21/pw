self.addEventListener('push', function(e) {
    var rawData = e.data.text();
    rawData = rawData.trim();
    //insert missing quotes coming from python
    rawData = rawData.replace('subject:', '"subject":');
    rawData = rawData.replace('message:', '"message":');
    rawData = rawData.replace('url:', '"url":');

    console.log("received data", rawData);
    var payload = JSON.parse(rawData);
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