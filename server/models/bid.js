console.log('bids model');
// require mongoose
var mongoose = require('mongoose');
// create the schema
var bidsSchema = new mongoose.Schema({
    product_id: {
      type: String,
      required: true
  },
   _user: {
      type: String,
      required: true
  },
 user_name: {
      type: String,
      required: true
  },   
  bid: {
      type: Number,
      required: true,
      default:0
  },
}, 
  {
      timestamps: true
  });

var Bid = mongoose.model('Bid', bidsSchema);