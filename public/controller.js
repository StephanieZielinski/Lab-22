var app = angular.module('myMod');

app.controller('myController', function($scope, $http){

  $http({
    method: 'GET',
    url: '/randomStuff'
  }).then(function successCallback(response){
    $scope.randomStuff = response.data;
  });

  $http({
    method: 'GET',
    url: '/noah'
  }).then(function successCallback(response){
    $scope.childOne = response.data;
  });

  $http({
    method: 'GET',
    url: '/dane'
  }).then(function successCallback(response) {
    $scope.childTwo = response.data;
  });

  $http({
    method: 'GET',
    url: '/ian'
  }).then(function successCallback(response){
    $scope.childThree = response.data;
  });

});
