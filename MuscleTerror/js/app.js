var app = angular.module("MuscleTerror", ['ngRoute', 'firebase']);

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'js/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/bmi', {
			templateUrl: 'js/bmi/bmi.html',
			controller: 'bmiCtrl'
		})
		.when('/bodyFat', {
			templateUrl: 'js/bodyFat/bodyFat.html',
			controller: 'bodyFatCtrl'
		})
		.when('/nutrition', {
			templateUrl: 'js/nutrition/nutrition.html',
			controller: 'nutritionCtrl'
		})
		.when('/login', {
			templateUrl: 'js/login/login.html',
			controller: 'loginCtrl',
			resolve: {
			}
		})
		.otherwise({
			redirectTo: "/"
		})
})