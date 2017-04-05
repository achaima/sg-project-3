function AuthController($state, $http, AuthFactory) {
  var controller = this;

  function resetCredentials() {
    controller.email = null;
    controller.password = null;
  }

  controller.createUser = () => {
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
    (firebaseUser) => {
      console.log('firebaseUser', firebaseUser);
      resetCredentials();
      $state.go('events');
    },
  (error) => {
    controller.error = error;
    console.warn('Could not create user with given email and password', error);
    resetCredentials();
  }
  );
  };

  controller.signIn = () => {
    controller.error = null;
    AuthFactory.$signInWithEmailAndPassword(controller.email, controller.password).then(
      () => {
        resetCredentials();
        $state.go('events');
      }
    );
  };

  controller.signOut = () => {
    AuthFactory.$signOut();
    $state.go('events');
  };

  function init() {
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged((user) => {
      console.log('auth state changed: user:', user);
      controller.user = user;
    });
  }
  init();
}


angular
  .module('EventApp')
  .controller('AuthController', ['$state', '$http', 'AuthFactory', AuthController]);
