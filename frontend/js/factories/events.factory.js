function EventFactory ($http) {
  return {
    find: function(location, date) {
      return $http({
        method: 'GET',
        url: `/api/events/find/?location=${location}&date=${date}`
      });
    }
  };
}

angular
  .module('EventApp')
  .factory('EventFactory', EventFactory);
