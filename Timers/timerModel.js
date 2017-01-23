var mongoose = require('mongoose');

var TimerSchema = new mongoose.Schema({
  name: {type: String},
  time: {type: Number}
})

var Timer = mongoose.model('Timer', TimerSchema);

model.exports = Timer;
