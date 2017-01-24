angular.module('app', ['ngRoute'])

//set up routes
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
   .when('/currentTime', {
      templateUrl: 'partials/currentTime.html',
      controller: 'CurrentTimeCtrl'
   })
   .when('/stopwatchTimer', {
      templateUrl: 'partials/stopwatchTimer.html',
      controller: 'StopWatchCtrl'
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
      return resp.data;
    });
  };

  //define function to save a timer
  var saveTimer = function(timer) {
    console.log('TIMER', timer)
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

//TimerCtrl
.controller('TimerCtrl', function($scope, Timer) {

  $scope.startTimer = function() {
    Timer.saveTimer($scope.time);
    var clock = document.getElementById('clockdiv');
    var timeinterval = setInterval(function() {
      clock.innerHTML = $scope.time + ' seconds left'
      $scope.time--;
      if($scope.time<0){
        clock.innerHTML = "TIME'S UP";
        clearInterval(timeinterval);
      }
    }, 1000);
  };
})

//OldTimersCtrl
.controller('OldTimersCtrl', function($scope, Timer) {

  $scope.oldTimers = [];

  Timer.getTimers()
    .then(function(timers) {
      $scope.oldTimers = timers;
    });
})

//CurrentTimeCtrl
.controller('CurrentTimeCtrl', function ($scope) {
  $scope.clock = Date();
  var currentClock = document.getElementById('currentTime').innerHTML;
  currentClock = $scope.clock;
})

//StopWatchCtrl
.controller('StopWatchCtrl', function ($scope, Timer) {
  var h3 = document.getElementsByTagName('h3')[0], milliseconds = 0, seconds = 0, minutes = 0, hours = 0, t;

  function add() {
    milliseconds++;
    if(milliseconds >= 60) {
      milliseconds = 0;
      seconds++;
    } if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h3.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);

    $scope.start();
  }

  //start button
  $scope.start = function() {
    t = setTimeout(add, 16);
  }

  //stop button
  $scope.stop = function() {
    clearTimeout(t);
    //Timer.saveTimer(h3.textContent);
  }

  //clear button
  $scope.clear = function() {
    h3.textContent = "00:00:00:00";
    milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  }



})


