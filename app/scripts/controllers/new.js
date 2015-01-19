'use strict';

/**
 * @ngdoc function
 * @name angularClassApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularClassApp
 */
angular.module('angularClassApp')
  .controller('NewCtrl',['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.x = 'vidheesha';
    $scope.y = 'saikrishna';

   $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'saikrishna - 1',
      content: 'dot net - 1'
    },
    {
      title: 'vidheesha - 2',
      content: 'UI - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
   console.log($scope.y);
  }]);
