angular.module('ToDoList')
.factory('User', [
  '$http',
  '$resource',
  function($http, $resource) {
    var o = {
      users: []
    };

    o.index = function() {
      return $http.get('/users.json', {})
    };

    o.get_user = function(id, tasks = null) {
      return $http.get('/users/' + id + '.json', { params: { task: tasks }})
    };

    o.edit_user = function(id) {
      return $resource('/users/' + id + '.json', {}, {
        update: { method: 'PUT', params: { id: '@id' }}
      })
    };

    o.destroy = function(id) {
      return $http.delete('/users/' + id + '.json', {})
    };

    o.new = function(user_params) {
      return $http.post('/users.json', { user: user_params })
    };

    return o;
  }
]);
