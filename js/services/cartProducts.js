(function($moa) {

    "use strict";

    
    $moa.factory('cartProducts', ['$rootScope'  , '$http' , '$timeout', function basketService($rootScope, $http , $timeout) {

       return {
            productsInCart: [],
            cartCount: 0,
            cartTotalPrice: 0.00,
            cartQty: 0,
            currencySymbol: ""
       };
    }]);

})(window.moaApp);