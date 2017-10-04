console.log('Users Factory!!');
app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  function usersFactory(){
      var _this = this;
      this.index = function(data,callback){
        $http.get('/',data).then(callback);
      } 
      this.user = function(data, callback){
        $http.get('/bids',data).then(callback);
      }
      this.register = function(data,callback){
        $http.post('/register',data).then(callback);
      } 
      this.logout = function(data, callback,errback){
        $http.post('/logout', data).then(callback, errback);
      } 
 
    };

  
  return new usersFactory;
}]);
