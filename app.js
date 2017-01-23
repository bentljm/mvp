angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/homepage', {
        templateUrl: 'partial/homepage.html',
        controller: 'HomepageCtrl'
      })
      .when('/timer', {
        templateUrl: 'partial/timer.html',
        controller: 'TimerCtrl'
      })
      otherwise({
        redirectTo: '/homepage'
      });
  })


.factory('counter', function() {

})

.controller('HomepageCtrl', function($scope) {

})

.controller('TimerCtrl', function($scope) {

})