'use strict';


// Declare app level module which depends on filters, and services
var mrmedia = angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/logIn.html', controller: 'LoginCtrl'});
    $routeProvider.when('/signup', {templateUrl: 'partials/SignUp.html', controller: 'SignupCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
