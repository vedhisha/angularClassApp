'use strict';

/**
 * @ngdoc function
 * @name angularClassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularClassApp
 */
angular.module('angularClassApp')
  .controller('MainCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
    $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
   console.log($rootScope.x); //taken $rootscope from new.js file as it is globally accesable for entire application 
  
    }]);
