angular.module('ToDoList')
.factory('User', [
  '$http',
  '$stateParams',
  function($http, $stateParams) {
    var o = {
      users: []
    };

    o.get_user = function() {
      console.log($stateParams.id);
      o.users.push( {$http.get('users/' + $stateParams.id, {} }));


      // $http.get('/users/' + $stateParams.id).success(function(data){
      //   console.log(data);
      //   angular.copy(data, o.user);
      //
      // });
    };
    console.log(o.users);
    return o;

  }
]);

// angular.module('ToDoList')
// .factory('User', function($resource) {
//   return $resource("/users/:id", { id: "@id" }, {
//     show:    { method: 'GET' }
//   });
// });
