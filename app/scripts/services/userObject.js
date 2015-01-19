'use strict';
//there ate 2 types of service definition
//1.app.factory() - this is used for all the other operations
//2.app.service() - this is used to write AJAX calls
angular.module('angularClassApp').factory('$userModel',function(){
	var tempUser = {};

	tempUser.user = {
		fullName:'',
		email: '',
		phone: ''
	};

	tempUser.cars = {
		model: '',
		yera: ''

	};
	return tempUser;

});