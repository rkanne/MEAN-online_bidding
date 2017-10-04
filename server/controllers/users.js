var mongoose = require('mongoose'),
    User = mongoose.model('User');

function usersController() {
    var _this = this;
    this.index = function(req, res) {
        res.json({
            future: 'index'
        });
    };
    this.logout = function(req, res) {
        res.json({
            future: 'logout'
        });

    }
     this.user = function(req, res) {
        res.json({
            future: 'user'
        });

    }

    this.register = function(req, res) {
        var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                _id: newuser._id,
                name: newuser.name
            });
          }
        });
    }
}

module.exports = new usersController();