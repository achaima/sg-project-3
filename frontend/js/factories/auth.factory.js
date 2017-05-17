/* global firebase */
function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAalTGYUoHGQEvCoG5sXigZKvc_fGI8HIc',
    authDomain: 'sg-project-3.firebaseapp.com',
    databaseURL: 'https://sg-project-3.firebaseio.com',
    projectId: 'sg-project-3',
    storageBucket: 'sg-project-3.appspot.com',
    messagingSenderId: '875972431943'
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
