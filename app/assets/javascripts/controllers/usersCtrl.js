angular.module('ToDoList')
.controller('UsersCtrl', [
  '$scope',
  'User',
  'AppFactory',
  '$state',
  function($scope, User, AppFactory, $state) {
    AppFactory.save();
    User.index().success(function(response) {
      $scope.users = response;
    })
    .error(function() {
      alertify.error("Error has occured.")
    });

    $scope.edit = function(id, email, username) {
      var user = User.edit_user(id).update({id: id, email: email, username: username},
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
  }
]);
