
var scope = ['$scope', function($scope) {
    $scope.test = '异步加载测试';
    if(!$scope.$$phase) {
        $scope.$apply();
    }
}];

return scope;
