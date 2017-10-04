console.log('Bids Factory!!');
app.factory('bidsFactory', ['$http', function($http) {
  // constructor for our factory
  var show_bids = [];
  var show_bid = {};

  function bidsFactory(){
      var _this = this;
   this.bid = function(data, callback){
        console.log("{{{{-----data---}}}}", data)
        $http.post('/bid', data).then(function(returned_data){
        callback(returned_data);
      });
    };
    this.get_bid = function(callback){
        $http.get('/get_bid').then(function(returned_data){
        console.log("-----bids-----Factory-------return-----",returned_data);
        callback(returned_data);
      });
    };
      this.end = function(callback){
        $http.post('/result').then(function(returned_data){
        console.log("return===",returned_data);
        callback(returned_data);
      });
    };
 
  };
  
  return new bidsFactory;
}]);

