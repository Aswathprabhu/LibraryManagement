'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'lm',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase:{
      apiKey: "AIzaSyAxZ32oXO2Gg2ylFx1cWI-dWA5K7HWwkpg",
    authDomain: "librarymanagement-28164.firebaseapp.com",
    databaseURL: "https://librarymanagement-28164.firebaseio.com",
    projectId: "librarymanagement-28164",
    storageBucket: "librarymanagement-28164.appspot.com",
    messagingSenderId: "249249337581"
    },
    contentSecurityPolicy: {
   // 'script-src': "'self' 'unsafe-eval' apis.google.com",
   // 'frame-src': "'self' https://*.firebaseapp.com",
   'connect-src': "'self' wss://*.firebaseio.com"
 },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },



    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
