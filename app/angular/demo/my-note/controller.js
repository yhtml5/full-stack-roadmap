app
	.controller("myNoteCtrl", function($scope) {
		$scope.message = ""
		$scope.clear = function() {
			$scope.message = "";
		}
		$scope.save = function() {
			alert("Note Saved");
		}
		$scope.remainNum = function() {
			return 100 - $scope.message.length;
		}
	})