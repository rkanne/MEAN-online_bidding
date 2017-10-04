console.log("bidsController");

app.controller('bidsController', ['$scope','usersFactory','bidsFactory','$location', '$cookies','$routeParams', function($scope, usersFactory, bidsFactory, $location, $cookies,routeParams) {
$scope.new = {};
console.log($cookies.get('name'));
if($cookies.getAll() === undefined){
  console.log('++++undefined+++');
  $location.url('index');
}
var cookies = $cookies.getAll();
  user = function(){
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

    var get_bid = function(){
      bidsFactory.get_bid(function(data){
        console.log("=======inside get_bid=======", data.data);
        // $scope.show_bids = data.data;
        if (data.data.errors){
          $scope.errors = data.data.errors;
          console.log($scope.errors);
        }
        else
        {
           $scope.show_bids = data.data;     
          console.log("$scope.show_bids===", data.data);
          // $location.url('bids');
         }
      });
    }
      
  $scope.bid = function(id){
   console.log("|||====inside bid======||||", $scope.new);
                $scope.new._user = $cookies.get('id');
                $scope.new.user_name = $cookies.get('name');
                $scope.new.product_id = id;
                console.log($scope.new.bid,"---bid----");
                get_bid();
                
                var largest = 0;
                for (var i = 0; i< $scope.show_bids.length;i++) {
                  if($scope.show_bids[i].product_id == id){

                    if($scope.show_bids[i].bid > largest){
                        largest = $scope.show_bids[i].bid;
                    }
                  }
                }
                
                if(!$scope.new.bid){
                    $scope.message = "Must be entered a bid!!!";
                }else if($scope.new.bid[id] <= largest){
                    $scope.message = "Must be larger than current bid";
                }else{
                $scope.new.bid = $scope.new.bid[id];
                bidsFactory.bid($scope.new, function(data){
                console.log("====inside++++++ bid======", data);
                if (data.data.errors){
                    $scope.errors = data.data.errors;
                  }
                  else
                  {
                     $scope.new = {};
                     $location.url('bids');
                  }

                });
              
                  get_bid();
                }
              }


$scope.end = function(){
    console.log("inside end------");
     get_bid();
     var p1 = false;
     var p2 = false;
     var p3 = false;
     console.log($scope.show_bids.length);
     for (var i =0; i < $scope.show_bids.length; i++) {
       if($scope.show_bids[i].product_id == 1 && $scope.show_bids[i].user_name == $cookies.get('name')){
        p1 =true;
       }
       if($scope.show_bids[i].product_id == 2 && $scope.show_bids[i].user_name == $cookies.get('name')){
        p2 =true;
       }
        if($scope.show_bids[i].product_id == 3 && $scope.show_bids[i].user_name == $cookies.get('name')){
        p3 =true;
       }
     }
     // alert(p1, p2 , p3);
     if(p1 && p2 && p3){

        console.log("All have bids");
        $location.url('result');

     }else{
      alert("Cannot end the bid. One Product does not have any bid yet!!");
      $location.url('bids');
     }
   }


  $scope.logout = function(){
    console.log("inside logout");
    usersFactory.logout($scope.user, function(data){
      $cookies.remove('name');
      $location.url('index');
    });
  }







  user();
  get_bid();

}]);