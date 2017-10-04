var path = require('path');
var users = require('./../controllers/users.js');
var bids = require('./../controllers/bids.js');

console.log('routes');

module.exports = function(app) {
	app.get('/', users.index);
  	app.get('/bids', users.user);
	app.post('/register', users.register);
	app.post('/logout', users.logout);
	app.post('/bid', bids.bid);
	app.get('/get_bid', bids.get_bid);
	app.post('/end', bids.end);
  	app.get('/result', bids.result);


}
