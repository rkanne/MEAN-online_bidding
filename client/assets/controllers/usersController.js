console.log("usersController");
app.controller('usersController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {

$scope.register = function(){
    usersFactory.register($scope.user, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $cookies.put('id', data.data._id);
        $cookies.put('name', data.data.name);
        $location.url('result');
      }
    })
  }
     
}]);