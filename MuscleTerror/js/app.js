var app = angular.module("MuscleTerror", ['ngRoute', 'firebase', 'ngCookies']);


app.run(function($rootScope, authService, $location, $firebase){
	$rootScope.$on('$routeChangeStart', function(evt, next, current){
		console.log(authService.getUser())
		if(authService.getUser()){
			var authUser = authService.getUser();
			var userId = authUser.uid.replace('simplelogin:', '')
			$rootScope.currentUser = $firebase(new Firebase('https://muscleterror.firebaseio.com/users/' + userId)).$asObject();
		} else {
			$location.path('/login');
		}
	})
})



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