(function($moa) {

    "use strict";

    /**
     * @controller ProductsController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ProductsController', ['$scope', '$rootScope', '$http' ,   '$stateParams' ,

    function productsController($scope, $rootScope,$http,  $stateParams) {

        $scope.products = [];

        $http({
            method: 'POST',
            url: 'http://45.79.162.17:8888/products',
            data: {
                currencyCode: $stateParams.currencyCode
            }
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.showSubText = function(id){
            var containerEl = document.getElementById(id + '');
            var showEl = containerEl.getElementsByClassName("hover")[0];
            TweenLite.to(showEl, 0, {css:{opacity:1}});
            TweenLite.to(showEl, 0, {css:{margin:0}});       
        }

        $scope.hideSubText = function(id){
            var containerEl = document.getElementById(id + '');
            var showEl = containerEl.getElementsByClassName("hover")[0];
            TweenLite.to(showEl, 1, {css:{opacity:0}});
            TweenLite.to(showEl, 0, {css:{margin:'10px 0 0'}});
        }

        

    }]);

})(window.moaApp);
