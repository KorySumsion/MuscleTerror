var app = angular.module('MuscleTerror');

app.service('authService', function(){

	var firebaseUrl = 'https://muscleterror.firebaseio.com/'

	var firebaseLogin = new Firebase(firebaseUrl);

	this.login = function(user, cb) {
		firebaseLogin.authWithPassword({
			email: user.email,
			password: user.password
		}, function(err, authData) {
			if (err) {
				switch (err.code) {
					case "INVALID_EMAIL":
					case "IVALID_PASSWORD":
					default:
				}
			} else if (authData) {
				console.log("Login Successful! user ID:" + authData.uid);
				cb(authData);
			}
		});
	}

	this.register = function(user,cb){
		firebaseLogin.createUser({
			email: user.email,
			password: user.password
		}, function(error) {
			if (error === null) {
				console.log("created with success");
				firebase.Login.authWithPassword({
					email: user.email,
					password: user.password
				}, function(err, authData){
					if (authData) {
						authData.name = user.name;
						authData.timeStamp = new Date().toISOString();
						firebaseLogin.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
						cb(authData);
					} else {
						console.log('something is messes suckkka');
					}
				});
			} else {
				console.log('error with creation of the user:', error);
				return false;
			}
		});
	}
});