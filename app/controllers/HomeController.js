app.controller('HomeController', function($rootScope, $scope, $location)
{
   $rootScope.activetab = $location.path();
   $scope.name = 'HOME Estoqueando scope';
   $scope.testeFunction = function() {
       console.log('entra aqui');
   }
});