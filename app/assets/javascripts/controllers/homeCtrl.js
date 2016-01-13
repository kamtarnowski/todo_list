angular.module('ToDoList')
.controller('HomeCtrl', [
  '$scope',
  'Task',
  'AppFactory',
  function($scope, Task, AppFactory) {
    $scope.active_tasks = function() {
      AppFactory.save();
      Task.active_list().success(function(response) {
        $scope.tasks = response;
        $('#active_tasks').addClass('active');
        $('#inactive_tasks').removeClass('active');
        $('#tab_inactive_tasks').fadeOut('medium', function() {
          $('#tab_active_tasks').fadeIn();
        });
      }).error(function() {
        $scope.tasks = [];
      });
    };
    $scope.inactive_tasks = function() {
      Task.inactive_list().success(function(response) {
        $scope.tasks = response;
        $('#inactive_tasks').addClass('active');
        $('#active_tasks').removeClass('active');
        $('#tab_active_tasks').fadeOut('medium', function() {
          $('#tab_inactive_tasks').fadeIn();
        });
      }).error(function() {
        $scope.tasks = [];
      });
    };
  }
]);
