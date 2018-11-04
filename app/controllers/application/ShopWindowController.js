app.controller('ShopWindowController', function ($rootScope, $scope, $http, appSettings, $q) {
    $scope.getProducts = function () {
        $http.get(appSettings.uri + '/product').success(function (data) {});
    }()

});