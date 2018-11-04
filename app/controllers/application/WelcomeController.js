app.controller('WelcomeController', function ($scope, $http, appSettings) {

    $scope.getProducts = function () {
        $http.get(appSettings.uri + '/product').success(function (data) {
            $scope.products = data;
        });
    }()
});