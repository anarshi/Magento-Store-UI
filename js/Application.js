(function(window, angular) {

    "use strict";

    /**
     * @property window.moaApp
     * @type {Object}
     */


    window.moaApp = angular.module("moaApp", ["ui.router" , "ngSanitize","ngAnimate","ngTouch","angular-inview" , 
                                              'ngRoute', 'anim-in-out','ui.bootstrap','angular-preload-image' ]);
    window.moaApp.config(['$stateProvider', '$locationProvider' ,'$urlRouterProvider', function($stateProvider,$locationProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("welcome", {
                url: '/',
                templateUrl : "views/introPage.html"
            })
            .state('introTemp',{
                url:"/introTemp",
                templateUrl: "views/introTemp.html"
            })
            .state("home", {
                url: '/home/:currencyCode',
                templateUrl : "views/home_page.html"

            })
            .state("product", {
                url: '/product/:product_id/:currencyCode',
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
            })
            .state("thankyou" , {
                url:"/thankyou",
                templateUrl: "views/thankyou.html"
            });
    }]);



})(window, window.angular);