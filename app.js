angular.module('app', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/timer', {
        templateUrl: 'partials/timer.html',
        controller: 'TimerCtrl'
      })
      .otherwise({
        redirectTo: '/homepage'
      });
  })

  .controller('TimerCtrl', function($scope) {
    $scope.time = 0;

    //redirect to countdown page

  })

// function getTimeRemaining(endtime){
//       var t = Date.parse(endtime) - Date.parse(new Date());
//       var seconds = Math.floor( (t/1000) % 60 );
//       var minutes = Math.floor( (t/1000/60) % 60 );
//       var hours = Math.floor( (t/(1000*60*60)) % 24 );
//       var days = Math.floor( t/(1000*60*60*24) );
//       return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//       };
//     }