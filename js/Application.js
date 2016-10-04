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
            }).when('/checkout/:cartId',{
                templateUrl : "views/checkout.html"
            }).when('/lookbook',{
                templateUrl : "views/lookbook.html"
            }).when('/about' , {
                templateUrl : "views/about.html"
            }).when('/service' , {
                templateUrl : "views/serviceDesk.html"
            });
    });



})(window, window.angular);