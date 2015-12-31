angular.module('ToDoList')
.controller('TasksCtrl', [
  '$scope',
  'Task',
  '$stateParams',
  function($scope, Task, $stateParams) {
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
      }).error(function() {
        alertify.error("Error has occured.");
      });
    };
    // $scope.edit = function() {
    //
    // };
  }
]);
