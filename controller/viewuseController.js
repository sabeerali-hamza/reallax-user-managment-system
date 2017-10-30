        mainApp.controller('ViewUserController', function($scope, UserService) {
            $scope.users = UserService.list();

            $scope.saveUser = function() {
                UserService.save($scope.newuser);
                $scope.newuser = {};
            }


            $scope.delete = function(id) {
                UserService.delete(id);
                if ($scope.newuser.id == id) $scope.newuser = {};
            }


            $scope.edit = function(id) {
                $scope.newuser = angular.copy(UserService.get(id));
            }

        });