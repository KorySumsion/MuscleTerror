var app = angular.module('MuscleTerror');

app.controller('loginCtrl', function ($scope, authService, $location) {
	
	$scope.login = function () {
		return authService.login($scope.details, function(user){
			user.uid = user.uid.replace('simplelogin:', '');
			$scope.$apply(function(){
				$location.path('/' + user.uid)
			});
		});
	};

	$scope.register = function () {
		return authService.register($scope.details, function(user){
			// user.uid = user.uid.replace('simplelogin:', '');
			// $scope.$apply(function(){
			// 	$location.path('/')
			// });

authService.login($scope.details, function(user){
			user.uid = user.uid.replace('simplelogin:', '');
			$scope.$apply(function(){
				$location.path('/' + user.uid)
			});

		});
});
	};
	
	$scope.status = 'Register';
	$scope.showReg = function(){
		if($scope.status === 'Register'){
			$scope.status = 'Login';	
		} else {
			$scope.status = 'Register';
		}
		$scope.reg = !$scope.reg;
	};


});