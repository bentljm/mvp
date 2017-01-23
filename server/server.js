var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/timers');

app.listen(8000);

module.exports = app;