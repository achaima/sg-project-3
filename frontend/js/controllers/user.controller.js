function UserController($stateParams, UserFactory) {
  var controller = this;



  controller.getUser = () => {
    var firebaseUserId = $stateParams.firebaseUserId;
    console.log('UserController:', controller);
    UserFactory.getUser(firebaseUserId).then(
      (success) => {
        controller.userProfile = success.data;
        console.log('GET USER: success:data', success.data);
      },
      (error) => {
        console.warn('Error getting user:', error);
      });
  };

  controller.saveEvent = () => {
  va
  }



  function init() {
    controller.savedEvents = [];
  }
  init();
}

UserController.$inject = ['$stateParams', 'UserFactory'];

angular
  .module('EventApp')
  .controller('UserController', UserController);
