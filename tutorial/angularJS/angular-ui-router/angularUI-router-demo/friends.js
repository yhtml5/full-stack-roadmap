angular
  .module('app')
  .factory('Friends', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('/2iZpG87HNCsNxagG/friends.json').then(function(response) {
          return response.data;
        });
      }
    };
  }])