var mongoose = require('mongoose')
var express = require('express');
var path = require('path');
var app = express();
var Timer = require('./timerModel.js')

var port = 4000;

app.use(express.static(path.join(__dirname, 'client')));

var server = app.listen(port);
console.log('Listening on port ' + port);

//handle POST request
app.post('/api/data', function(req, res){
    console.log("REQUEST", req.data)
    var newTimer = new Timer({
        timer: req.data
    });
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


