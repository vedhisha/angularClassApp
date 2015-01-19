'use strict';

/**
 * @ngdoc function
 * @name angularClassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClassApp
 */
angular.module('angularClassApp')
  .controller('appformCtrl', ['$scope','$rootScope','$userModel',function ($scope,$rootScope,$userModel) {

  /*$scope.fullName = 'vidheesha';
  $scope.email = 'vidheesha@gmail.com';
  $scope.phone = 7174946833;

  $scope.submitForm = function(){
 	console.log('fullName:' + $scope.fullName);
 	console.log('email:' + $scope.email);
 	console.log('phone:' + $scope.phone);
 	};
*/
//this is same as the top javascript but simplied
//initialize the model (ng-model) 
$scope.user = $userModel.user;//creating a variable in $scope by the name user and its getting its value from the service model userObject
 
 $scope.submitForm = function(someUser){
 	//making AJAX calls like......... $http.get('url',query: {someUser});
 $scope.user.total=(parseFloat(someUser.fullName) + parseFloat(someUser.email));
 //console.log($scope.user);----this is for services

 
 //console.log('total of first two field:'+ $scope.user.total);
 	//console.log($scope.user);
 	//console.log('total of first two field:'+ ($scope.user.fullName + $scope.user.email));
 	//console.log('total of first two field:'+ (parseFloat($scope.user.fullName) + parseFloat($scope.user.email)));
  };
  }]);