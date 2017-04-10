function EventController(EventFactory) {
  var controller = this;

  controller.findEvents = () => {
    EventFactory.find(controller.searchLocation, controller.searchDate).then(
      (success) => {
        controller.eventResults = success.data;
        console.log('Got events:', controller.eventResults);
      },
      (error) => {
        console.warn('Could not get events', error);
      }
    );
  };



  function init() {
    console.log('EventController:', controller);
    controller.searchLocation = '';
    controller.searchDate = '';
    controller.eventPictures = ['images/festival.jpeg', 'images/holi.jpg', 'images/lights.jpg', 'wireless.jpg'];
  }

  init();
}

EventController.$inject = ['EventFactory'];

angular
  .module('EventApp')
  .controller('EventController', EventController);
