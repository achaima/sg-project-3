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


  controller.getSavedEvents = () => {
    UserFactory.getSavedEvents($stateParams.firebaseUserId).then(
      (success) => {
        controller.savedEvents = success.data.savedEvents;
        console.log('Got saved events', controller.savedEvents);
      },
      (error) => {
        console.warn('Could not get saved events', error);
      }
    );
  };

  controller.saveEvents = (event) => {
    controller.savedEvents.push(event);
    UserFactory.saveEvent($stateParams.firebaseUserId, controller.savedEvents).then(
      (success) => {
        console.log('Events Saved: success:', success);
        console.log('Events Saved: success:', controller.savedEvents);
      },
      (error) => {
        console.log('Unable to save event', error);
      }
    );
  };


  controller.removeEvents = (index) => {
    controller.savedEvents.splice(index, 1);
    UserFactory.removeEvent($stateParams.firebaseUserId, controller.savedEvents).then(
        (success) => {
          console.log('Events removed: success:', success);
          console.log('Events removed: success:', controller.savedEvents);
        },
        (error) => {
          console.log('Unable to remove event', error);
        }
      );
  };



  function init() {
    controller.savedEvents = [];
  }
  init();
}

UserController.$inject = ['$stateParams', 'UserFactory'];

angular
  .module('EventApp')
  .controller('UserController', UserController);
