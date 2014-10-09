var app = angular.module("MuscleTerror");

app.controller('bodyFatCtrl', function($scope) {

	$scope.calcBfp = function(x, y, male, female) {
		$scope.male20 = false;
		$scope.male40 = false;
		$scope.male60 = false;
		$scope.fem20 = false;
		$scope.fem40 = false;
		$scope.fem60 = false;
		var bmi = Number(x);
        var age = Number(y);

        if (male) {
            var maleBfp = (1.2 * bmi) + (0.23 * age) - (12.8) - 8.4;
            $scope.bfp = Math.round(maleBfp * 10) / 10;
            $scope.bfpStat = Math.round(maleBfp * 10) / 10 + '%';

            if (age <= 40) {
            	$scope.male20 = true;

            	if ($scope.bfp <= 8) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 8 && $scope.bfp <= 19) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 20 && $scope.bfp < 25) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 25) {
					$scope.obese = true;
				}
            }
            if (age > 40 && age <= 60) {
            	$scope.male40 = true;

            	if ($scope.bfp <= 11) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 11 && $scope.bfp <= 22) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 23 && $scope.bfp < 27) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 27) {
					$scope.obese = true;
				}

            }
            if (age > 60) {
            	$scope.male60 = true;

            	if ($scope.bfp <= 13) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 13 && $scope.bfp <= 25) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 26 && $scope.bfp < 30) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 30) {
					$scope.obese = true;
				}

            }
            $scope.male = '';
        }
        if (female) {
            var femaleBfp = (1.2 * bmi) + (0.23 * age) - 8.4;
            $scope.bfp = Math.round(femaleBfp * 10) / 10;
            $scope.bfpStat = Math.round(femaleBfp * 10) / 10 + '%';

            if (age <= 40) {
            	$scope.fem20 = true;

            	if ($scope.bfp <= 21) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 21 && $scope.bfp <= 23) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 34 && $scope.bfp < 39) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 39) {
					$scope.obese = true;
				}

            }
            if (age > 40 && age <= 60) {
            	$scope.fem40 = true;

            	if ($scope.bfp <= 23) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 23 && $scope.bfp <= 35) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 36 && $scope.bfp < 40) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 40) {
					$scope.obese = true;
				}

            }
            if (age > 60) {
            	$scope.fem60 = true;

            	if ($scope.bfp <= 24) {
					$scope.underweight = true;
				}
				if ($scope.bfp > 24 && $scope.bfp <= 36) {
					$scope.normal = true;
				}
				if ($scope.bfp >= 37 && $scope.bfp < 42) {
					$scope.overweight = true;
				}
				if ($scope.bfp >= 42) {
					$scope.obese = true;
				}

            }
         	$scope.female = '';
        }
        $scope.bmiBfp = '';
        $scope.ageBfp = '';


	}

})