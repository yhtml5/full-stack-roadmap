angular
  .module('app')
  .controller('aboutCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "About";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);