var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//connect to database
mongoose.connect('mongodb://localhost/data/db');

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

