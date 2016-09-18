(function($moa) {

    "use strict";

    /**
     * @controller ProductsController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ProductsController', ['$scope', '$rootScope', 'socket', 'gateway', 'http', 'currency', '$http' ,

    function productsController($scope, $rootScope, socket, gateway, http, currency,$http) {

        $scope.products = [];

        $http({
            method: 'GET',
            url: 'http://45.79.162.17:8888/products'
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });

        /**
         * @method gotoPage
         * @param pageNumber {Number}
         * @return {void}
         */
        $scope.gotoPage = function gotoPage(pageNumber) {
            socket.node.emit('snapshot/products/pageNumber', pageNumber);
        };

        /**
         * @method nextPage
         * @return {void}
         */
        $scope.nextPage = function nextPage() {
            $scope.gotoPage($scope.statistics.pages.current + 1);
        };

        /**
         * @method decreasePerPage
         * @return {void}
         */
        $scope.decreasePerPage = function decreasePerPage() {

            if ($scope.perPage !== $scope.perPageSteps) {
                socket.node.emit('snapshot/products/perPage', ($scope.perPage -= $scope.perPageSteps));
            }

        };

        /**
         * @method increasePerPage
         * @return {void}
         */
        $scope.increasePerPage = function increasePerPage() {

            if ($scope.perPage !== $scope.maximumPerPage) {
                socket.node.emit('snapshot/products/perPage', ($scope.perPage += $scope.perPageSteps));
            }

        };

        /**
         * @method previousPage
         * @return {void}
         */
        $scope.previousPage = function previousPage() {
            $scope.gotoPage($scope.statistics.pages.current - 1);
        };

        // When the "paging/next" or "page/previous" events are broadcast.
        $scope.$on('paging/previous', $scope.previousPage);
        $scope.$on('paging/next', $scope.nextPage);

        // When the "paging/increase" or "page/decrease" events are broadcast.
        $scope.$on('paging/decrease', $scope.decreasePerPage);
        $scope.$on('paging/increase', $scope.increasePerPage);

    }]);

})(window.moaApp);
