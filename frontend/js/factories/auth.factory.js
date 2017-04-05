/* global firebase */
function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBwANwQKGpI6Z4aHwKSejCaxg8CqRUniUc',
    authDomain: 'sg-project-3-asma.firebaseapp.com',
    databaseURL: 'https://sg-project-3-asma.firebaseio.com',
    projectId: 'sg-project-3-asma',
    storageBucket: 'sg-project-3-asma.appspot.com',
    messagingSenderId: '1036254142293'
  };
  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}

AuthFactory.$inject = ['$firebaseAuth', '$http'];

angular
  .module('EventApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
