function UserController(UserFactory) {
  var controller = this;



controller.getUser()
  function init() {
    console.log('UserController:', controller);
  }

  init();
}

UserController.$inject = ['UserFactory'];

angular
  .module('EventApp')
  .controller('UserController', UserController);
