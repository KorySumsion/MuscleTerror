var app = angular.module('MuscleTerror');

app.controller("bmiCtrl", function($scope){

	$scope.calcBmi = function(wt, ft, inch) {
		$scope.underweight = false;
		$scope.normal = false;
		$scope.overweight = false;
		$scope.obese = false;
debugger;
		var ht = (Number(ft) * 12) + Number(inch);
		var bigNum = (wt / (ht * ht)) * 703;
		$scope.bmi = Math.round(bigNum * 10) / 10;
		if ($scope.bmi <= 18.5) {
			$scope.underweight = true;
		}
		if ($scope.bmi > 18.5 && $scope.bmi <= 24.9) {
			$scope.normal = true;
		}
		if ($scope.bmi >= 25 && $scope.bmi < 30) {
			$scope.overweight = true;
		}
		if ($scope.bmi >= 30) {
			$scope.obese = true;
		}

	}

})