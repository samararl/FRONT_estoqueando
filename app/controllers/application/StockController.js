app.controller('StockController', function ($rootScope, $scope, $http, appSettings, $q, $filter) {;
    $scope.modalShowResponse = false;
    $scope.loading = false;

    $scope.getProducts = function () {
        $http.get(appSettings.uri + '/product/products').success(function (data) {
            $scope.products = data;
        });
    }()
    $scope.addProduct = function (product) {
        if (product.add == true) {
            product.add = false;
            delete product.item;
        } else {
            product.add = true;
            product.item = {
                cod: product.codigo,
                quantity: 1,
                price: product.preco
            }
        }
    }
    $scope.saveAddedProducts = function () {
        $scope.loading = true;
        $scope.success = false;
        $scope.productsAdded = {};
        $scope.productsAdded.items = [];
        $scope.productsAdded.person = 1;
        var addedProducts = $filter('filter')($scope.products, {
            add: true
        })
        addedProducts.forEach(function (value) {
            $scope.productsAdded.items.push(value.item)
        })

        $http.post(appSettings.uri + '/product/addStock', {
                'stockData': $scope.productsAdded
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function (data, status, headers, config) {
                $scope.loading = false;
                $scope.success = true;

                $scope.modalShowResponse = true;

            })
            .error(function (data, status, header, config) {
                $scope.loading = false;
                $scope.success = false;
                $scope.modalShowResponse = true;
            });

    }
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    };

});