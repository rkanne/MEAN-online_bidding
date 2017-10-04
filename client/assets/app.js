var app = angular.module('app', ['ngRoute','ngCookies']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
	 	.when('/',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/bids',{
            templateUrl: 'partials/bids.html'
        })
        .when('/get_bid',{
            templateUrl: 'partials/bids.html'
        })
        .when('/register',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
         .when('/logout',{
            templateUrl: 'partials/index.html'
        })
         
          .when('/end',{
            templateUrl: 'partials/result.html'
        })
          .when('/result',{
            templateUrl: 'partials/result.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });