console.log("resultController");

app.controller('resultController', ['$scope','usersFactory','resultFactory','$location', '$cookies','$routeParams', function($scope, usersFactory, resultFactory, $location, $cookies,routeParams) {
console.log($cookies.get('name'));
if($cookies.getAll() === undefined){

  console.log('++++undefined+++');
  $location.url('index');

}
else{
var cookies = $cookies.getAll();

  var user = function(){
    console.log("bids=======");
      usersFactory.user($scope.user, function(data){

        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.users = data.data;
          $scope.currentUser = $cookies.get('name');
        }
      });
    }

    var result = function(){

      resultFactory.result(function(data){

        console.log("=======inside result=======", data.data);
        if (data.data.errors){
          $scope.errors = data.data.errors;
          console.log($scope.errors);
        }
        else
        {
          $scope.show_results = data.data; 
         }
      });
    }
      
}//end else
$scope.start_bid = function(){
    console.log("inside end------");
    $location.url('bids');
}

 $scope.logout = function(){
   console.log("inside logout");
                usersFactory.logout($scope.user, function(data){
                  $cookies.remove('name');
                  $location.url('index');
                });
              }

  user();
  result();

}]);