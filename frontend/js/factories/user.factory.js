function UserFactory ($http) {
  return {

    createUser: function (firebaseUserId) {
      return $http({
        method: 'POST',
        url: '/users',
        headers: {firebaseUserId: firebaseUserId}
      });
    },
    getUser: function (firebaseUserId) {
      return $http({
        method: 'GET',
        url: `/users/${firebaseUserId}`
      });
    },
    getSavedEvents: function(userId) {
      return $http({
        method: 'GET',
        url: `/users/${userId}/saved-events`
      });
    },
    saveEvent: function (firebaseUserId, savedEvents) {
      return $http({
        method: 'PATCH',
        url: `/users/${firebaseUserId}`,
        data: savedEvents
      });
    },
    removeEvent: function (firebaseUserId, savedEvents) {
      console.log(savedEvents);
      return $http({
        method: 'PUT',
        url: `/users/${firebaseUserId}`,
        data: savedEvents
      });
    }
  };
}

angular
  .module('EventApp')
  .factory('UserFactory', UserFactory);
