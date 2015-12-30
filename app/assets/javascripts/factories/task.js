angular.module('ToDoList')
.factory('Task', [
  '$resource',
  '$http',
  function($resource, $http) {
    var o = {
      tasks: []
    };

    o.index = function() {
      return $http.get('/tasks.json', {});
    };

    o.find = function(id) {
      return $http.get('/task' + id + '.json', {});
    };

    return o;
  }
])
