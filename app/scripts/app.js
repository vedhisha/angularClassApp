'use strict';

/**
 * @ngdoc overview
 * @name angularClassApp
 * @description
 * # angularClassApp
 *
 * Main module of the application.
 */
angular.module('angularClassApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mainview', {
        templateUrl: 'views/mainview.html',
        controller: 'mainviewCtrl'
      })
      .when('/New', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/appform', {
        templateUrl: 'views/appform.html',
        controller: 'appformCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
