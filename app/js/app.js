'use strict';


// Declare app level module which depends on filters, and services
var mrmedia = angular.module('myApp', ['ngRoute'])
//For angularjs 1.6.0 routes not working in the angular-seed,
// Due to aa077e8, the default hash-prefix used for $location hash-bang URLs has changed from the empty string ('') to the bang ('!').
// If you actually want to have no hash-prefix, then you can restore the previous behavior by adding a configuration block to your application:
    .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
    }])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/logIn.html', controller: 'LoginCtrl'});
    $routeProvider.when('/signup', {templateUrl: 'partials/SignUp.html', controller: 'SignupCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
