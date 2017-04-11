function UserController($stateParams, UserFactory) {
  var controller = this;

  controller.isDisabled = false;

  controller.disableButton = function() {
    controller.isDisabled = true;
  };

  
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

  controller.saveEvent = (event) => {
    UserFactory.saveEvent($stateParams.firebaseUserId, event).then(
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
    UserFactory.getSavedEvents($stateParams.firebaseUserId).then(
      (success) => {
        controller.savedEvents = success.data.savedEvents;
        controller.savedEvents.splice(index, 1);
        console.log('Got saved events', controller.savedEvents);

        UserFactory.removeEvent($stateParams.firebaseUserId, controller.savedEvents).then(
            (success) => {
              console.log('Events removed: success:', success);
              console.log('Events removed: success:', controller.savedEvents);
            },
            (error) => {
              console.log('Unable to remove event', error);
            }
          );
      },
      (error) => {
        console.warn('Could not get saved events', error);
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
