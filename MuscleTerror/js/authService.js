var app = angular.module('MuscleTerror');

app.service('authService', function($cookieStore){

	var firebaseUrl = 'https://muscleterror.firebaseio.com/'

	var firebaseLogin = new Firebase(firebaseUrl);

	var activeUser = localStorage.getItem('user') || '';


	var setUser = function(authData){
		localStorage.setItem('user', JSON.stringify(authData));
	}

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
				setUser(authData);
				activeUser = localStorage.getItem('user') || '';
				cb(authData);
			}
		});
	}

	this.getUser = function(){
		if(activeUser){
			return JSON.parse(activeUser);
		}
	}

	this.logout = function(){
		activeUser = '';
		localStorage.setItem('user', '');
	}

	this.register = function(user, cb){
		firebaseLogin.createUser({
			email: user.email,
			password: user.password
		}, function(error) {
			if (error === null) {
				console.log("User created successfully");
				firebaseLogin.authWithPassword({
						email    : user.email,
						password : user.password
					}, function(err, authData) {
				  if (authData) {
				  	authData.name = user.name;
				  	authData.timestamp = new Date().toISOString();
				    firebaseLogin.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
				    cb(authData);
				  } else {
				  	console.log('something went wrong');
				  }
				});
			} else {
				console.log("Error creating user:", error);
				return false;
			}
		});
	}
});