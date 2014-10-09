var app = angular.module("MuscleTerror");

app.controller('homeCtrl', function($scope, $location){

	$scope.bmiPage = function() {
 		$location.url('/bmi');
 	}

 	$scope.bfpPage = function() {
 		$location.url('/bodyFat');
 	}

})