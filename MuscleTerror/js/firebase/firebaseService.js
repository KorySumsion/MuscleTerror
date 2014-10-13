var app = angular.module('MuscleTerror');

app.service('firebaseService', function ($firebase) {
	var firebaseUrl = 'https://muscleterror.firebaseio.com/';

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};
})
