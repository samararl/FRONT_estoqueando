app.controller('HomeController', function($rootScope, $scope, $location, $http)
{
  $rootScope.uri = "https://apiestoqueando.herokuapp.com";
  $scope.consultantData = {};
  
   $scope.addConsultant = function() {
       console.log('entra aqui')

       
    $http.post( $rootScope.uri+ '/consultant/add', {'consultantData': $scope.consultantData }, 
    {
        headers: {'Content-Type': 'application/json'} 
    })
    .success(function (data, status, headers, config) {
    })
    .error(function (data, status, header, config) {
    });

    }
});