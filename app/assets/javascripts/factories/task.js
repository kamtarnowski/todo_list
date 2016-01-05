angular.module('ToDoList')
.factory('Task', [
  '$resource',
  '$http',
  function($resource, $http) {
    var o = [];

    o.index = function() {
      return $http.get('/tasks.json', {})
    };

    o.find = function(id) {
      return $http.get('/tasks/' + id + '/edit.json', {})
    };

    o.edit = function(id) {
      return $resource('/tasks/' + id + '.json', {}, {
        update: { method: 'PUT', params: { id: '@id'}}
      });
    };

    o.destroy = function(id) {
      return $http.delete('/tasks/' + id + '.json', {})
    };

    o.new = function(task_params) {
      return $http.post('/tasks.json', { task: task_params })
    };

    return o;
  }
]);
