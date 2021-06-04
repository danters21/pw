self.addEventListener('push', ()=> {
    self.ServiceWorkerRegistration.sendNotification('test message', {});
});

// git remote add origin git_url_here