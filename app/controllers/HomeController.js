app.controller('HomeController', function($rootScope, $scope, $location, $http)
{
  $rootScope.uri = "https://apiestoqueando.herokuapp.com";
  $scope.consultantData = {};
  $scope.loading = false;
  $scope.success = false;


   $scope.addConsultant = function() {
    $scope.loading = true;

    $http.post( $rootScope.uri+ '/consultant/add',{'consultantData': $scope.consultantData }, 
    {
        headers: {'Content-Type': 'application/json'} 
    })
    .success(function (data, status, headers, config) {
        $scope.loading = false;
        $scope.success = true;

    })
    .error(function (data, status, header, config) {
        $scope.loading = false;
        $scope.success = false;


    });

    }

});