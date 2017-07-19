var myapp = angular.module('myapp', ["ui.router"])

myapp.config(function($stateProvider) {
	$stateProvider
		.state('index', {
			url: "",
			views: {
				"viewA": {
					template: "index.viewA"
				},
				"viewB": {
					template: "index.viewB"
				}
			}
		})
		.state('route1', {
			url: "/route1",
			views: {
				"viewA": {
					templateUrl: "route1.html"
				},
				"viewB": {
					templateUrl: "route2.html"
				}
			}
		})
		.state('route1.list', {
			url: "/list",
			templateUrl: "route1.list.html",
			controller: function($scope) {
				$scope.items = ["A", "List", "Of", "Items"];
			}
		})
		.state('route2', {
			url: "/route2",
			views: {
				"viewA": {
					templateUrl: "route1.html"
				},
				"viewB": {
					templateUrl: "route2.html"
				}
			}
		})
		.state('route2.list', {
			url: "/list",
			templateUrl: "route2.list.html",
			controller: function($scope) {
				$scope.things = ["A", "Set", "Of", "Things"];
			}
		})
		.state('view1', {
			url: "/view1",
			templateUrl: "view1.html"
		})
		.state('view4', {
			url: "/view4",
			templateUrl: "view4.html"
		})
})