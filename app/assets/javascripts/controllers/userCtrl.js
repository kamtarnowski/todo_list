angular.module('ToDoList')
.controller('UserCtrl', [
  'AppFactory',
  '$scope',
  'User',
  '$stateParams',
  '$state',
  '$window',
  function(AppFactory, $scope, User, $stateParams, $state, $window) {
    $scope.edit_user = function() {
      User.get_user($stateParams.id).success(function(response) {
        $scope.user = response;
        $scope.staticUsername = $scope.user.username;
      })
      .error(function() {
        alertify.error('Error has occured.')
      });
    };
    $scope.edit_button = true;
    $scope.edit = function() {
      var user = User.edit_user($scope.user.id).update({id: $scope.user.id, email: $scope.user.email, username: $scope.user.username},
        function() {
          if (AppFactory.get_url() != []) {
            $window.location.href = AppFactory.get_url();
          } else {
          $state.go('home');
          }
          alertify.success('User data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.find = function() {
      User.get_user($stateParams.id, 'tasks').success(function(response) {
        $scope.user = response[0];
        $scope.active_tasks = response[1];
        $scope.inactive_tasks = response[2];
      })
      .error(function() {
        alertify.error('Error has occured.');
      });
    };
    $scope.tab_active_tasks = function() {
      $('#active_tasks').addClass('active');
      $('#inactive_tasks').removeClass('active');
      $('#tab_inactive_tasks').fadeOut('medium', function() {
        $('#tab_active_tasks').fadeIn();
      });
    };
    $scope.tab_inactive_tasks = function() {
      $('#inactive_tasks').addClass('active');
      $('#active_tasks').removeClass('active');
      $('#tab_active_tasks').fadeOut('medium', function() {
        $('#tab_inactive_tasks').fadeIn();
      });
    };
  }
]);
