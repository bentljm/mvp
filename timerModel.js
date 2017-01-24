var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//connect to database
mongoose.connect('mongodb://heroku_xzm8q35w:7ir8ohvs1s1ev09rtl3nh80ki5@ds023694.mlab.com:23694/heroku_xzm8q35w');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to database')
});

//create new timer schema
var timerSchema = new Schema({
  timer: Number
});

//define a mongoose Model
module.exports = mongoose.model('Timer', timerSchema);

