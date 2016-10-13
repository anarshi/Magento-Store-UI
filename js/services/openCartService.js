(function($moa) {

    "use strict";

    
    $moa.service('openCartService', ['$http' , '$timeout', function openCartService($http , $timeout) {

       var isCartOpen = false

       this.setCartOpen = function(cartOpen){
          isCartOpen = cartOpen
       };

       this.getCartOpen = function(){
          return isCartOpen;
       };

    }]);

})(window.moaApp);