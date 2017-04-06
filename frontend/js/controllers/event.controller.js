function EventController(EventFactory) {
  var controller = this;

  controller.findEvents = () => {
    EventFactory.find(controller.searchLocation).then(
      (success) => {
        controller.eventResults = success.data;
        console.log('Got events:', controller.eventResults);
      },
      (error) => {
        console.warn('Could not get events', error);
      }
    );
  };

  controller.saveEvent = (event) => {
    controller.savedEvents.push(event);
  };

  controller.removeEvent = (index) => {
    controller.savedEvents.splice(index, 1);
  };

  function init() {
    console.log('EventController:', controller);
    controller.searchLocation = '';
    // controller.savedEvent = {};
    controller.savedEvents = [];
  }

  init();
}

EventController.$inject = ['EventFactory'];

angular
  .module('EventApp')
  .controller('EventController', EventController);
