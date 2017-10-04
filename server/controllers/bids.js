var mongoose = require('mongoose'),
    Bid = mongoose.model('Bid');

function bidsController() {
    var _this = this;
    this.logout = function(req, res) {
        res.json({
            future: 'logout'
        });
    }

    this.bid = function(req, res) {

        console.log("bid--------",req.body)
        var bid = new Bid(req.body);
        bid.save(function(err, bid) {
            if (err){
              res.json(err);
            }
            else{
            res.json(bid);
          }
        });
     }
    this.end = function(req,res){
      res.json({
            future: 'end bid'
    })
  };
     
    this.get_bid = function(req, res){
      console.log("-----get_bid------",req.body);
      Bid.find({}, function(err, bid) {
      if(err){
        console.log("something went wrong");
        console.log(err);
      } else {
        console.log('result:', bid);
        res.json(bid);

      }
    })
  };
  this.result = function(req,res){
    Bid.find({})
    // .sort({'product_id':1, 'bid':-1})  // give me the max
    .exec(function (err, bids) {
      console.log(bids)
      var arr = []
      for (var i = 0; i < bids.length; i++) {
        // console.log(arr)
        // console.log("===========================================================")
        if(bids[i].product_id == 1){
          if(arr.length == 0){
            arr.push(bids[i])
          }else{
            for (var j = 0; j < arr.length; j++) {
              if(arr[j].product_id == 1 && arr[j].bid < bids[i].bid){
                arr[j]= bids[i];
              }
            }
          }
        }
        if(bids[i].product_id == 2){
          if(arr.length == 1){
            arr.push(bids[i])
          }else{
            for (var j = 1; j < arr.length; j++) {
              if(arr[j].product_id == 2 && arr[j].bid < bids[i].bid){
                arr[j]= bids[i];
              }
            }
          }
        }
        if(bids[i].product_id == 3){
          if(arr.length == 2){
            arr.push(bids[i])
          }else{
            for (var j = 0; j < arr.length; j++) {
              if(arr[j].product_id == 3 && arr[j].bid < bids[i].bid){
                arr[j]= bids[i];
              }
            }
          }
        }
      }
      console.log("=====ARR====", arr);
      // Bid.find({}, function(err, bid) {
      if(err){
        console.log("something went wrong");
      } else {
        // console.log('===result:', bids);
        res.json(arr);

      }
    })
  };
}

module.exports = new bidsController();