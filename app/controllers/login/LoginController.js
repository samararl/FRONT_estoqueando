app.controller('LoginController', function($rootScope, $scope, $location, AuthService, $state, $window)
{
  $scope.accessData = {};
  $scope.login = function(){
    $scope.loading = true;
    $scope.success = false;
    AuthService.login($scope.accessData)
    .then(function (data) {
      if ($location.search().redirect) {
        $state.go('home');
      }
      $window.sessionStorage.setItem('user', $scope.accessData.email);
      $state.go('app.private.welcome');
    })
    .catch(function (err) {
      $scope.loading = false;
      $scope.success = false;
      $state.go('home');

    });
  }
 


});