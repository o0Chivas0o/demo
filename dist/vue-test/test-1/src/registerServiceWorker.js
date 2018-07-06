"use strict";

var _registerServiceWorker = require("register-service-worker");

if (process.env.NODE_ENV === "production") {
  (0, _registerServiceWorker.register)(process.env.BASE_URL + "service-worker.js", {
    ready: function ready() {
      console.log("App is being served from cache by a service worker.\n" + "For more details, visit https://goo.gl/AFskqB");
    },
    cached: function cached() {
      console.log("Content has been cached for offline use.");
    },
    updated: function updated() {
      console.log("New content is available; please refresh.");
    },
    offline: function offline() {
      console.log("No internet connection found. App is running in offline mode.");
    },
    error: function error(_error) {
      console.error("Error during service worker registration:", _error);
    }
  });
} /* eslint-disable no-console */
//# sourceMappingURL=registerServiceWorker.js.map