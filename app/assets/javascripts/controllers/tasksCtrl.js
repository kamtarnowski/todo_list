angular.module('ToDoList')
.controller('TasksCtrl', [
  '$scope',
  'Task',
  '$stateParams',
  'User',
  '$state',
  function($scope, Task, $stateParams, User, $state) {
    $scope.tasks = function() {
      Task.index().success(function(response) {
        $scope.tasks = response;
      }).error(function() {
        alertify.error("Error has occured.")
      });
    };
    $scope.search_task = function() {
      Task.find($stateParams.id).success(function(response) {
        $scope.task = response;
        $scope.fixed_title = $scope.task.title;
      }).error(function() {
        alertify.error("Error has occured.");
      });
      User.index().success(function(response) {
        $scope.users = response;
      })
      .error(function() {
        $scope.users = [];
      });
    };
    $scope.edit = function() {
      Task.edit($scope.task.id).update({id: $scope.task.id,
                                                  title: $scope.task.title,
                                                  description: $scope.task.description,
                                                  completed: $scope.task.completed},
        function() {
          $state.go('tasks');
          alertify.success('Task data has been succesfully changed.');
        },
        function() {
          alertify.error('Wrong data input.');
        })
    };
    $scope.destroy = function(task, index) {
      if (confirm("Are you sure you want to delete this task?")){
      Task.destroy(task.id).success(function() {
        $scope.tasks.splice(index, 1);
        alertify.success('Task has been deleted.');
      })
      .error(function() {
        alertify.error('Task has not been deleted.')
      });
      }
    };
  }
]);
