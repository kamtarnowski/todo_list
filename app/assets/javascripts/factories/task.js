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

    o.active_list = function() {
      return $http.get('/tasks.json', { params: { tasks: 'active' }})
    };

    o.inactive_list = function() {
      return $http.get('/tasks.json', { params: { tasks: 'inactive' }})
    };

    o.show = function(id) {
      return $http.get('/tasks/' + id + '.json', {})
    };

    o.active_stats = function(id) {
      return $http.get('/users/' + id + '/active_stats.json', {})
    };

    return o;
  }
]);
