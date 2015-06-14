var myApp = angular.module('myApp', [
  'ngRoute',
  'appControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/antananarivo', {
    templateUrl: 'partials/antananarivo.html',
    controller: 'AntananarivoController'
  }).
  when('/fianarantsoa', {
    templateUrl: 'partials/fianarantsoa.html',
    controller: 'FianarantsoaController'
  }).
  otherwise({
    redirectTo: '/antananarivo'
  });
}]);
