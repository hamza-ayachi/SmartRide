// Promise syntax to register the service Worker if the browser supports it
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }