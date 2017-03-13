'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/logIn.html', controller: 'LoginCtrl'});
    $routeProvider.when('/signup', {templateUrl: 'partials/SignUp.html', controller: 'SignupCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
