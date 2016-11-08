(function($moa) {

    "use strict";

    $moa.controller('ApplicationController', ['$rootScope', '$scope'  ,  '$route','$location' 
                                                , '$http' ,'$timeout', '$window' 
                                                ,'basket', 'cartProducts','openCartService' , '$state',

    function applicationController($rootScope, $scope , $route  ,  $location , $http , $timeout
                                     , $window ,basket ,cartProducts,openCartService , $state) {

        window.onbeforeunload = function () {
            var url = window.location.href;
            if(window.location.href.split("/")[5] === "" || url.indexOf("welcome") !== -1 || url.indexOf("home") !== -1){
                window.location.reload();
                $state.go("welcome");
                 
              
            }
        };


        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        $scope.isLoaded = false;
        $scope.isiOS = false;
        $scope.stylesheets = [];
        $scope.isiOS = iOS;
        $scope.isSafari = isSafari;

        if($scope.isiOS || $scope.isSafari){
            var innerHeight =  window.innerHeight;
            $timeout(function(){
                var sidemenu = document.getElementById("sidemenu-ios");
                sidemenu.style.height = innerHeight + "px";
                $('#collection-footer').css({
                    'display':"none"
                });
                $('#collection-footer-ios').css({
                    'display':"block"
                });
            },500);
            
            $scope.stylesheets = [
              {href: 'css/iosStyle/default-ios.css', type:'text/css'}
            ];
        } else {

            $('#collection-footer').css({
                    'display':"block"
                });

                $('#collection-footer-ios').css({
                    'display':"none"    
                });

            $scope.stylesheets = [
              {href: 'css/default.css', type:'text/css'}
            ];                
        }

        $scope.isLoaded = true;

        $scope.$watch(
            function(){
                return openCartService.getCartOpen();
            },

            function(newValue , oldValue){
                if(newValue === true){
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

                    $scope.isCartOpen = true;
                    $scope.cartOpenClass = "move-cart-left ";
                    $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
                    $scope.closeFooter = "close-footer";
                } else {
                    $scope.contentClass = "";
                    $scope.cartOpenClass = "asdasd";
                    $scope.bodyOpenModalClass = "";
                    $scope.closeFooter = "";
                    $scope.isCartOpen = false;
                }
            }
        ,true);


        document.addEventListener('touchmove', function(event){
            event.stopPropagation();
        });

         $scope.$on('$locationChangeSuccess', function() {

                var url = window.location.href;
              if(window.location.href.split("/").length <= 6  && window.location.href.split("/")[5] === "" 
                                                || url.indexOf("welcome") !== -1){
                $(".menu").css({
                   visibility:"hidden"
                
                });
                $(".cartcount").css({
                    visibility: "hidden"
                });
                    
              } else {
                $(".menu").css({
                   visibility:"visible"
                });
                $(".cartcount").css({
                    visibility: "inherit"
                });
              }

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
                document.ontouchmove = function (e) {
                  return true;
                  
                }

            }else {
                //Empty
            }

         });

        $scope.cartCount = 0;

        $scope.cartProducts = cartProducts;

        basket.cartData.async(localStorage.cartId).then(function(data){
            $scope.cartProducts.productsInCart = data.cartProducts;
            $scope.cartProducts.cartCount = data.cartCount;
            $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
            $scope.cartProducts.cartQty = data.cartQty;
            $scope.cartProducts.currencySymbol = data.currencySymbol;
        });
        

        $scope.removeFromCart = function(el){
            basket.removeFromCart.async(localStorage.cartId,el.id).then(function(data){
                localStorage.cartId = data;

                basket.cartData.async(localStorage.cartId).then(function(data){
                    $scope.cartProducts.productsInCart = data.cartProducts;
                    $scope.cartProducts.cartCount = data.cartCount;
                    $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
                    $scope.cartProducts.cartQty = data.cartQty;
                });

               
            });
            
            var index = $scope.cartProducts.productsInCart.indexOf(el);
            $scope.cartProducts.productsInCart.splice(index, 1);
            $scope.cartCount = $scope.cartProducts.productsInCart.length;
            $scope.totalPrice = 0.00;
            for(var i = 0 ; i < $scope.cartProducts.productsInCart.length ; i++){
                $scope.totalPrice += $scope.cartProducts.productsInCart[i].price.toFixed(2);
            }

            
        };


        $scope.isCartOpen = false;
        $scope.cartOpenClass = "";

        //view filter elements
        var row1 =  angular.element( document.querySelector( '#div1' ) );
        if(localStorage.getItem("productGridType") === null){
            $scope.productGridType = "col-md-6 col-xs-6";
            $scope.activeRow2 = "active";
        } else {
            $scope.productGridType = localStorage.getItem('productGridType');


        }
         
        $scope.modalOpen = false;
        $scope.isModalOpen = false;

        
        
        $scope.openModal = function() {
            if ($scope.isModalOpen) {
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
                //empty
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
                openCartService.setCartOpen(false);
                $scope.contentClass = "";
                $scope.cartOpenClass = "";
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
            if(!$(".catalog-product").hasClass('col-md-12 col-xs-12')){
                 $scope.productGridType = localStorage.productGridType +  ' opacity-0';
                $timeout(function(){
                    $scope.productGridType = 'col-md-12 col-xs-12';
                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
           
            //localStorage.setItem('productGridType',$scope.productGridType);
            $scope.oneRowActive = "active";
            $scope.twoRowActive = "";
            $scope.threeRowActive = "";
        };

        $scope.twoRowGrid = function(){
            if(!$(".catalog-product").hasClass('col-md-6 col-xs-6')){
                $scope.productGridType = localStorage.productGridType +' opacity-0';
                $timeout(function(){
                    $scope.productGridType = 'col-md-6 col-xs-6';
                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
        
            
            $scope.oneRowActive = "";
            $scope.twoRowActive = "active";
            $scope.threeRowActive = "";
        };

        $scope.threeRowGrid = function(){
            if(!$(".catalog-product").hasClass('col-md-4 col-xs-6')){
                $scope.productGridType = localStorage.productGridType +' opacity-0';
                $timeout(function(){
                    $scope.productGridType = 'col-md-4 col-xs-6';
                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
            //localStorage.setItem('productGridType',$scope.productGridType);
            $scope.oneRowActive = "";
            $scope.twoRowActive = "";
            $scope.threeRowActive = "active";
        };


        var w = angular.element($window);
        w.bind('resize', function () {
            if($window.innerWidth < 990 && $scope.productGridType !== 'col-md-12 col-xs-12'){
               $scope.productGridType = localStorage.productGridType +' opacity-0';
                $timeout(function(){
                    $scope.productGridType = 'col-md-6 col-xs-6';
                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
                $scope.oneRowActive = "";
                $scope.twoRowActive = "active";
                $scope.threeRowActive = ""; 
            }
        });

        switch($scope.productGridType) {
            case 'col-md-4 col-xs-6':
                $scope.oneRowActive = "";
                $scope.twoRowActive = "";
                $scope.threeRowActive = "active";
                break;
            case 'col-md-6 col-xs-6':
                $scope.oneRowActive = "";
                $scope.twoRowActive = "active";
                $scope.threeRowActive = "";
                break;
            case 'col-md-12 col-xs-12':
                $scope.oneRowActive = "active";
                $scope.twoRowActive = "";
                $scope.threeRowActive = "";
                break;
        }


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

                $scope.isCartOpen = true;
             
                $scope.cartOpenClass = "move-cart-left ";
                 $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
                  $scope.closeFooter = "close-footer";

                 //  document.ontouchmove = function (e) {
                 //    e.preventDefault();
                 // };

                 // var shoppingCart = document.getElementById("shoppingcart");
                 // shoppingcart.ontouchmove = function(e){
                 //    return true;
                 // };

            } else {
                //Empty
            }
        };

        $('.menu').hover(
            function () {
               $(this).find("span").addClass("show-menu-text");
            },
            function () {
               $(this).find("span").removeClass("show-menu-text");
            }
        );
        

        $('.cartcount').hover(
            function () {
               $(this).find("span").addClass("show-bag-text");
            },
            function () {
               $(this).find("span").removeClass("show-bag-text");
            }
        );

       
        
    }]);



})(window.moaApp);