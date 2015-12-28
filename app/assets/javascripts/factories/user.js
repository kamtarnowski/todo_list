angular.module('ToDoList')
.factory('User', [
  '$http',
  '$resource',
  function($http, $resource) {
    var o = {
      users: []
    };

    o.get_user = function(id) {
      return $http.get('/users/' + id + '.json', {})
    };

    o.edit_user = function(id) {
      return $resource('/users/' + id + '.json', {}, {
        update: { method: 'PUT', params: { id: '@id' }}
      })

      // if (attributes[3] == attributes[2]) {
      //   console.log(attributes);
      //   console.log(id);
      //   var Update = $resource('/users/:id', { id: '@id' });
      //   var user = Update.put({id: id}, function() {
      //
      //     user.email = attributes[0];
      //     user.username = attributes[1];
      //     user.password = attributes[2];
      //     user.password_confirmation = attributes[2];
      //     user.$save();
      //   });
      //   // return $http.put('/users/' + user.id + ".json");
      //   // console.log(user);
      // } else {
      //
      //   return false;
      // };
    };
    return o;
  }
]);
