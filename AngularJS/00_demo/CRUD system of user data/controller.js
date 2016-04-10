angular.module('myApp', [])
	.controller('userCtrl', function($scope) {
		$scope.firstName = '';
		$scope.lastName = '';
		$scope.password1 = '';
		$scope.password2 = '';
		$scope.users = [{
			id: 1,
			firstName: 'Hege',
			lastName: "Pege"
		}, {
			id: 2,
			firstName: 'Kim',
			lastName: "Pim"
		}, {
			id: 3,
			firstName: 'Sal',
			lastName: "Smith"
		}, {
			id: 4,
			firstName: 'Jack',
			lastName: "Jones"
		}, {
			id: 5,
			firstName: 'John',
			lastName: "Doe"
		}, {
			id: 6,
			firstName: 'Peter',
			lastName: "Pan"
		}];
		$scope.edit = true;
		$scope.error = false;
		$scope.incomplete = false;

		$scope.editUser = function(id) {
			if (id == 'new') {
				$scope.edit = true;
				$scope.incomplete = true;
				$scope.firstName = '';
				$scope.lastName = '';
			} else {
				$scope.edit = false;
				$scope.firstName = $scope.users[id - 1].firstName;
				$scope.lastName = $scope.users[id - 1].lastName;
			}
		};

		$scope.$watch('password1', function() {
			$scope.test();
		});
		$scope.$watch('password2', function() {
			$scope.test();
		});
		$scope.$watch('firstName', function() {
			$scope.test();
		});
		$scope.$watch('lastName', function() {
			$scope.test();
		});

		$scope.test = function() {
			if ($scope.password1 !== $scope.password2) {
				$scope.error = true;
			} else {
				$scope.error = false;
			}
			$scope.incomplete = false;
			if ($scope.edit && (!$scope.firstName.length ||
					!$scope.lastName.length ||
					!$scope.password1.length || !$scope.password2.length)) {
				$scope.incomplete = true;
			}
		};

	});