console.log('Result Factory!!');
app.factory('resultFactory', ['$http', function($http) {
  // constructor for our factory
  var show_results = [];
  var show_result = {};

  function resultFactory(){
      var _this = this;

    this.result = function(callback){
        $http.get('/result').then(function(returned_data){
        console.log("=====return---- result===",returned_data);
        callback(returned_data);
      });
    };
 
  };
  
  return new resultFactory;
}]);

