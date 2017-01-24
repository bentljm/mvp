var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var express = require('express');
var path = require('path');
var app = express();
var Timer = require('./timerModel.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = 4000;

app.use(express.static(path.join(__dirname, 'client')));

var server = app.listen(port);
console.log('Listening on port ' + port);

//handle POST request
app.post('/api/data', function(req, res){
    console.log("STOPWATCH", req.body.timer)
    var newTimer = new Timer({
        timer: req.body.timer
    });
    console.log(newTimer.timer)
    newTimer.save(function(err) {
      if (err)
        throw err;
      else
        console.log('save timer successfully...');
    });
  });

//handle a GET req
app.get('/api/data', function (req, res) {
  Timer.find().then(function(timers) { 
  res.send(timers); 
  })
});


module.exports = app;


