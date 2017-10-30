 mainApp.controller('AddUserController', function($scope, UserService, localStorageService) {
     // super power options values are below

     $scope.users = UserService.list();

     $scope.saveUser = function() {
         UserService.save($scope.newuser);
         $scope.newuser = {};
         alert('User Has Been Added');
         return $scope.successMassage = "User Added Successfully";

     }

     $scope.delete = function(id) {
         UserService.delete(id);
         if ($scope.newuser.id == id) $scope.newuser = {};
     }

     $scope.edit = function(id) {
         $scope.newuser = angular.copy(UserService.get(id));
     }
 });