'use strict';

angular.module('blogApp', ['ngProgress'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/posts/:postTitle', {
        templateUrl: 'views/single.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
