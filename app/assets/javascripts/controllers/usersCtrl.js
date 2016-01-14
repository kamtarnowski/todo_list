angular.module('ToDoList')
.controller('UsersCtrl', [
  '$scope',
  'User',
  'AppFactory',
  '$state',
  'Auth',
  function($scope, User, AppFactory, $state, Auth) {
    Auth.currentUser().then(function() {
      $scope.visible = true;
    }, function(error) {
      $scope.visible = false;
      $state.go('home');
      alertify.error('You are not authorized.');
    });
    AppFactory.save();
    $scope.index = function() {
      User.index().success(function(response) {
        $scope.users = response;
      })
      .error(function() {
        alertify.error("Error has occured.")
      });
    }
    $scope.edit = function(id, email, username) {
      User.edit_user(id).update({id: id, email: email, username: username},
        function() {
          alertify.success('User data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.destroy = function(user, index) {
      if (confirm("Are you sure you want to delete this user?")){
      User.destroy(user.id).success(function() {
        $scope.users.splice(index, 1);
        alertify.success('User has been deleted.');
      })
      .error(function() {
        alertify.error('User has not been deleted.')
      });
      }
    };
    $scope.new = function() {
      User.new({ username: $scope.user.username,
                  email: $scope.user.email,
                  password: $scope.user.password,
                  password_confirmation: $scope.user.password_confirmation
      })
      .success(function() {
        $state.go('users');
        alertify.success('User has been created.');
      }).error(function() {
        alertify.error('User has not been created.');
      });
    };
  }
]);
