function EventController () {
  var controller = this;

  function init() {
    console.log('EventController', controller);
    controller.events = ['concerts', 'festivals', 'marches'];
  }
  init();
}

angular
  .module('EventApp')
  .controller('EventController', EventController);
