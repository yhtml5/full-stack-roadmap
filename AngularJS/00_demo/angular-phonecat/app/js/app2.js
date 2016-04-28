'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
	'ui.router',
	'phonecatAnimations',

	'phonecatControllers',
	'phonecatFilters',
	'phonecatServices'
]);
phonecatApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/route1")

	$stateProvider
		.state('route1', {
			url: "/route1",
			templateUrl: "route1.html"
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
			templateUrl: "route2.html"
		})
		.state('route2.list', {
			url: "/list",
			templateUrl: "route2.list.html",
			controller: function($scope) {
				$scope.things = ["A", "Set", "Of", "Things"];
			}
		})
})