console.log('users model');
// require mongoose
var mongoose = require('mongoose');
// create the schema
var usersSchema = new mongoose.Schema({
    name: {
    	type: String,
      required: true
  },
}, 
  {
      timestamps: true
  });

var User = mongoose.model('User', usersSchema);