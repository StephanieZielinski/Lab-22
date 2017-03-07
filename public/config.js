var app = angular.module('myMod');

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/random', {
     controller:'myController',
     templateUrl: 'random.html'
  })
  .when('/noah', {
    controller:'myController',
    templateUrl: 'noah.html'
  })
  .when('/dane', {
    controller: 'myController',
    templateUrl: 'dane.html'
  })
  .when('/ian', {
    controller:'myController',
    templateUrl: 'ian.html'
  });

  $locationProvider.hashPrefix('');
});
