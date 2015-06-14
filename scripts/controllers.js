var appControllers = angular.module('appControllers', []);

appControllers.controller('AntananarivoController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/quartiers/antananarivo.json').success(function(data) {
		$scope.quartiersAntananarivo = data;
	});
}]);

appControllers.controller('FianarantsoaController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/quartiers/fianarantsoa.json').success(function(data) {
		$scope.quartiersFianarantsoa = data;
	});
}]);
