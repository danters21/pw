self.addEventListener('push', function(e) {
    var options = {
        body: 'Data from push: ' + e.data.text(),
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
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

// git remote add origin git_url_here