(function(window, angular) {

    "use strict";

    /**
     * @property window.moaApp
     * @type {Object}
     */


    window.moaApp = angular.module("moaApp", ["ngRoute","ngSanitize","ngAnimate","ngTouch"]);
    window.moaApp.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "views/home-page.html"
            })
            .when("/product/:product_id", {
                templateUrl : "views/product.html"
            });
    });



})(window, window.angular);