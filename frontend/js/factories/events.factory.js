function EventFactory ($http) {
  return {
    find: function(location) {
      return $http({
        method: 'GET',
        url: `/api/events/find/?location=${location}`
      });
    }
  };
}

angular
  .module('EventApp')
  .factory('EventFactory', EventFactory);
