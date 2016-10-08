(function($moa) {

    "use strict";

    
    $moa.factory('openCartService', ['$rootScope'  , '$http' , '$timeout', function basketService($rootScope, $http , $timeout) {

    	//new idea

       this.openCart = function(){
            if($scope.isCartOpen === false){
                
                if($location.path() === "/about" || $location.path() === "/service"){
                    $scope.contentClass = "move-left-content-no-fixed";
                    if($location.path() === "/service"){
                        var myDiv = document.getElementById('step1');
                        myDiv.scrollTop = 0;
                    }else {
                         var myDiv = document.getElementById('body');
                          myDiv.scrollTop = 0;
                       
                    }
                }else {
                   $scope.contentClass = "move-left-content"; 
                }
                //$scope.cartId = localStorage.cartId;
                $scope.isCartOpen = true;
             
                $scope.cartOpenClass = "move-cart-left ";
                 $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
                  $scope.closeFooter = "close-footer";

                  document.ontouchmove = function (e) {
                    e.preventDefault();
                 }

            } else {
                //Empty
            }
        };
    }]);

})(window.moaApp);