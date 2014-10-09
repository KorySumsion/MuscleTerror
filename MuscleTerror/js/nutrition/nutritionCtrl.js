var app = angular.module("MuscleTerror");

app.controller('nutritionCtrl', function($scope) {

	$scope.calorieCalc = function(x, y, z){
		
	    var fat = Number(x);
	    var weight = Number(y);
	    var activity = Number(z);

	    var fatMass = (fat / 100) * weight;

	    var LeanBodyMass = (weight - fatMass) * activity;
	    $scope.calorieIntake = Math.round(LeanBodyMass * 13.8);
	}
	

	$scope.calReduction = function(diet){
		$scope.reducedCalories = $scope.calorieIntake - Math.round(($scope.calorieIntake * Number(diet)));
	}
  
	

})