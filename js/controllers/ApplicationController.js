(function($moa) {

    "use strict";

    $moa.controller('ApplicationController', ['$rootScope', '$scope'  ,'$location' , '$http' ,'$timeout', 'basket', 'cartProducts',

    function applicationController($rootScope, $scope , $location , $http , $timeout , basket ,cartProducts) {


        $scope.isiOS = false;

        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        $scope.isiOS = iOS;

        setTimeout(function(){
            if($scope.isiOS){
                var innerHeight =  window.innerHeight;
                var sidemenu = document.getElementById("sidemenu-ios");
                sidemenu.style.height = innerHeight + "px"; 
            }
        },500);
        

        function iOSversion() {

          if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            if (!!window.indexedDB) { return 'iOS 8 and up'; }
            if (!!window.SpeechSynthesisUtterance) { return 'iOS 7'; }
            if (!!window.webkitAudioContext) { return 'iOS 6'; }
            if (!!window.matchMedia) { return 'iOS 5'; }
            if (!!window.history && 'pushState' in window.history) { return 'iOS 4'; }
            return 'iOS 3 or earlier';
          }

          return 'Not an iOS device';
        }

        document.addEventListener('touchmove', function(event){
            event.stopPropagation();
        });

         $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
              if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
                document.ontouchmove = function (e) {
                  return true;
                  
                }
            
            } else if($scope.isCartOpen){
                $scope.contentClass = "";
                $scope.cartOpenClass = "asdasd";
                $scope.bodyOpenModalClass = "";
                $scope.isCartOpen = false;
                 $scope.closeFooter = "close-footer";
            }else {
                //Empty
            }

         });


        $scope.cartCount = 0;

        $scope.cartProducts = cartProducts;

        basket.cartData.async(localStorage.cartId).then(function(data){
            $scope.cartProducts.productsInCart = data.cartProducts;
            $scope.cartProducts.cartCount = data.cartCount;
            // for(var i = 0 ; i < dara.cartProducts)
            $scope.cartProducts.cartTotalPrice = data.totalPrice;
            $scope.cartProducts.cartQty = data.cartQty;
        });
        

        $scope.removeFromCart = function(el){
            basket.removeFromCart.async(localStorage.cartId,el.id).then(function(data){
                localStorage.cartId = data;

                basket.cartData.async(localStorage.cartId).then(function(data){
                    $scope.cartProducts.productsInCart = data.cartProducts;
                    $scope.cartProducts.cartCount = data.cartCount;
                    $scope.cartProducts.cartTotalPrice = data.totalPrice;
                    $scope.cartProducts.cartQty = data.cartQty;
                });

               
            });
            
            var index = $scope.cartProducts.productsInCart.indexOf(el);
            $scope.cartProducts.productsInCart.splice(index, 1);
            $scope.cartCount = $scope.cartProducts.productsInCart.length;
            $scope.totalPrice = 0;
            for(var i = 0 ; i < $scope.cartProducts.productsInCart.length ; i++){
                $scope.totalPrice += $scope.cartProducts.productsInCart[i].price;
            }

            
        };


        $scope.isCartOpen = false;
        $scope.cartOpenClass = "";

        //view filter elements
        var row1 =  angular.element( document.querySelector( '#div1' ) );

        //setting  default value for productGridType
        if(localStorage.getItem("productGridType") === null){
            $scope.productGridType = "col-md-6 col-xs-6";
            $scope.activeRow2 = "active";
        } else {
            $scope.productGridType = localStorage.getItem('productGridType');


        }


        /**
         * @property filtersOpen
         * @type {String}
         */
        $scope.filtersOpen = '';

        /**
         * @property modalOpen
         * @type {Boolean}
         * @default false
         */
        $scope.modalOpen = false;

        $scope.isModalOpen = false;

        $scope.openModal = function() {
            if ($scope.isModalOpen) {
                console.log("Opnened");
            } else {

                if($location.path() === "/about" || $location.path() === "/service"){
                    $scope.contentClass = "move-right-content-no-fixed";
                    if($location.path() === "/service"){
                        var myDiv = document.getElementById('step1');
                        myDiv.scrollTop = 0;
                    }else {
                         var myDiv = document.getElementById('body');
                          myDiv.scrollTop = 0;
                       
                    }
                }else {
                   $scope.contentClass = "move-right-content"; 
                }
                $scope.isModalOpen = true;
                
                $scope.modalClass = "open";
                $scope.openSidemenu = "open-sidemenu";
                $scope.sidebar_footer_class = "open-modal-footer";
                $scope.closeFooter = "close-footer";
                $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
                $scope.sidemenuFooterOpen = "sidemenu-footer-open";
                document.ontouchmove = function (e) {
                  e.preventDefault();
                }
            }
        };

        $scope.goHome = function(path){
            if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
            } else {
                console.log("Application Controller message \n 'modal is already open' \n SystemDev Message delete in production");
            }
            $location.path(path);
        };

        $scope.closeModal = function () {
            if($scope.isModalOpen){

                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
                $scope.openSidemenu = "";
                $scope.sidemenuFooterOpen = ""
                document.ontouchmove = function (e) {
                  return true;

                }
            
            } else if($scope.isCartOpen){
                $scope.contentClass = "";
                $scope.cartOpenClass = "asdasd";
                $scope.bodyOpenModalClass = "";
                 $scope.closeFooter = "";
                $scope.isCartOpen = false;
                document.ontouchmove = function (e) {
                  return true;

                }
            }else {
                //Empty
            }
        };

        $scope.oneRowGrid = function(){
            $scope.productGridType = 'col-md-12 col-xs-12';
            localStorage.setItem('productGridType',$scope.productGridType);
        };

        $scope.twoRowGrid = function(){
            $scope.productGridType = 'col-md-6 col-xs-6';
            localStorage.setItem('productGridType',$scope.productGridType);
        };

        $scope.threeRowGrid = function(){
            $scope.productGridType = 'col-md-4 col-xs-4';
            localStorage.setItem('productGridType',$scope.productGridType);
        };


        $scope.goToCart = function(){
            $location.path('/checkout/' + localStorage.cartId);
            $scope.closeModal();
        };

        $scope.openCart = function(){
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