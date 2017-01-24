angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/timer', {
      templateUrl: 'partials/timer.html',
      controller: 'TimerCtrl'
    })
   .when('/oldTimers', {
      templateUrl: 'partials/oldTimers.html',
      controller: 'OldTimersCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})


.factory('Timer', function($http) {

  //define function to get all past timers
  var getTimers = function() {
    return $http({
      method: 'GET',
      url: '/api/data',
    })
    .then(function (resp) {
      console.log("GET", resp)
      return resp.data;
    });
  };

  //define function to save a timer
  var saveTimer = function(timer) {
    console.log("FROM SAVETIMER FUNCTION", timer)
    return $http({
      method: 'POST',
      url: '/api/data',
      data: {timer: timer}
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    saveTimer: saveTimer,
    getTimers: getTimers
  };

})


.controller('TimerCtrl', function($scope, Timer) {

  $scope.startTimer = function() {
    Timer.saveTimer($scope.time)

    var clock = document.getElementById('clockdiv');
    var timeinterval = setInterval(function() {
      clock.innerHTML = $scope.time + ' seconds left'
      $scope.time--;
      if($scope.time<0){
        clock.innerHTML = "TIME'S UP";
        clearInterval(timeinterval);
      }
    }, 1000);
  }

})

.controller('OldTimersCtrl', function($scope, Timer) {
  $scope.allTimer = [];

  Timer.getTimers()
    .then(function(timers) {
      console.log("ALL TIMES FROM OLDTIMERSCTRL", timers)
      $scope.allTimer = timers;
      console.log("SCOPE", $scope.allTimer)
    })

})





