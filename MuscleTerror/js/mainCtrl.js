var app = angular.module("MuscleTerror");

app.controller('mainCtrl', function($scope, authService, $location) {

	$scope.logout = function() {
		authService.logout();
		$location.path('/login');
	}

})
