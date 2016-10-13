(function(window, angular) {

    "use strict";

    /**
     * @property window.moaApp
     * @type {Object}
     */


    window.moaApp = angular.module("moaApp", ["ui.router" , "ngSanitize","ngAnimate","ngTouch","angular-inview" , 'ngRoute', 'anim-in-out']);
    window.moaApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url: '/',
                templateUrl : "views/home-page.html"
            })
            .state("product", {
                url: '/product/:product_id',
                templateUrl : "views/product.html"
            })
            .state('checkout',{
                url: '/checkout/:cartId',
                templateUrl : "views/checkout.html"
            })
            .state('lookbook',{
                url: '/lookbook',
                templateUrl : "views/lookbook.html"
            })
            .state('about' , {
                url: '/about',
                templateUrl : "views/about.html"
            })
            .state('service' , {
                url:'/service',
                templateUrl : "views/serviceDesk.html"
            });
    }]);



})(window, window.angular);