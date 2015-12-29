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

    o.get_user = function(id) {
      return $http.get('/users/' + id + '.json', {})
    };

    o.edit_user = function(id) {
      return $resource('/users/' + id + '.json', {}, {
        update: { method: 'PUT', params: { id: '@id' }}
      })
    };

    o.destroy = function(id) {
      return $http.delete('/users/' + id + '.json', {})
    }
    
    return o;
  }
]);
