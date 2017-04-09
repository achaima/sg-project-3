function UserFactory ($http) {
  return {

    createUser: function (firebaseUserId) {
      return $http({
        method: 'POST',
        url: '/users',
        headers: {firebaseUserId: firebaseUserId}
      });
    }
  };
}


angular
  .module('EventApp')
  .factory('UserFactory', UserFactory);
