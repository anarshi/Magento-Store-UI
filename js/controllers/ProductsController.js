(function($moa) {

    "use strict";

    /**
     * @controller ProductsController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ProductsController', ['$scope', '$rootScope', '$http' ,

    function productsController($scope, $rootScope,$http) {

        $scope.products = [];

        $http({
            method: 'GET',
            url: 'http://45.79.162.17:8888/products'
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });


    }]);

})(window.moaApp);
