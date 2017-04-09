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
    }

  };
}


angular
  .module('EventApp')
  .factory('UserFactory', UserFactory);
