var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var express = require('express');
var path = require('path');
var app = express();
var Timer = require('./timerModel.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

port = process.env.PORT || 4000;

var server = app.listen(port);
console.log('Listening on port ' + port);

//handle POST request
app.post('/api/data', function(req, res){
  var newTimer = new Timer({
      timer: req.body.timer
  });
  newTimer.save(function(err) {
    if (err)
      throw err;
    else
      console.log('save timer successfully...');
  });
});

//handle a GET request
app.get('/api/data', function (req, res) {
  Timer.find().then(function(timers) { 
  res.send(timers); 
  })
});

module.exports = app;


