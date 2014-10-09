var app = angular.module("MuscleTerror");

app.controller('nutritionCtrl', function($scope) {

$scope.calculateFitLvl = function(){
	$scope.test = parseInt($scope.fitnessLevel) * 2;
}
	

})