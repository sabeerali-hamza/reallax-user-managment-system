       var mainApp = angular.module("mainApp", ['ngRoute', '720kb.datepicker', 'LocalStorageModule', 'tableSort']);
       mainApp.config(['$routeProvider', function($routeProvider) {

           $routeProvider.

           when('/addUser', {
               templateUrl: 'html/addUser.htm',
               controller: 'AddUserController'
           }).

           when('/viewUser', {
               templateUrl: 'html/viewUser.htm',
               controller: 'ViewUserController'
           }).

           otherwise({
               redirectTo: '/addUser'
           });


       }]);