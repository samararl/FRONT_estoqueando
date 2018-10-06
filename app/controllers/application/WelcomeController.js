app.controller('WelcomeController', function($rootScope, $scope, $http, appSettings, $q, $window )
{
    console.log($window.sessionStorage.getItem("user"))
    if($window.sessionStorage.getItem("user")){
        $rootScope.user = $window.sessionStorage.getItem("user");
    }
    $scope.getProducts = function() {        
        $http.get(appSettings.uri + '/product').success(function(data){
            $scope.products = data;
        });              
    }()
});