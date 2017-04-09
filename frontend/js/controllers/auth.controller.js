function AuthController($state, $http, UserFactory, AuthFactory) {
  var controller = this;

  function resetCredentials() {
    controller.email = null;
    controller.password = null;
  }

  controller.createUser = () => {
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
    (firebaseUser) => {
      controller.firebaseUserId = firebaseUser.uid;
      console.log('firebaseUser', firebaseUser);
      resetCredentials();
      UserFactory.createUser(firebaseUser.uid).then(
        (success) => {
          controller.userProfile = success.data;
          console.log('USER:', success.data);
        },
        (error) => {
          console.warn('Error creating user from model', error);
        });
      $state.go('events', ({ firebaseUserId: firebaseUser.uid }));
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
  .controller('AuthController', ['$state', '$http', 'UserFactory', 'AuthFactory', AuthController]);
