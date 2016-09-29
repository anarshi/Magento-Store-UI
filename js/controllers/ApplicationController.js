(function($moa) {

    "use strict";

    /**
     * @controller ApplicationController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ApplicationController', ['$rootScope', '$scope' , '$location' , '$http' ,'$timeout', 'basket',

    function applicationController($rootScope, $scope , $location , $http , $timeout , basket) {

        $scope.cartCount = 0;

        //possible delete or reargangement
        // basket.initialize.async().then(function(data){
        //     $scope.cartId = data;
        //     console.log($scope.cartId);
        //     basket.addToCart.async($scope.cartId,4).then(function(data){
        //         $scope.cartId = data;
        //         console.log($scope.cartId);
                
        //     }); 
        // });



        

        basket.cartData.async(localStorage.cartId).then(function(data){
            $scope.cartProducts = data.cartProducts;
            $scope.cartCount = data.cartCount;
            $scope.totalPrice = data.totalPrice;
        });
        

        $scope.removeFromCart = function(el){
            basket.removeFromCart.async(localStorage.cartId,el.id).then(function(data){
                localStorage.cartId = data;
                console.log("ret data: " +data);
            });
            var index = $scope.cartProducts.indexOf(el);
            $scope.cartProducts.splice(index, 1);
            $scope.cartCount = $scope.cartProducts.length;
            $scope.totalPrice = 0;
            for(var i = 0 ; i < $scope.cartProducts.length ; i++){
                $scope.totalPrice += $scope.cartProducts[i].price;
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
                $scope.isModalOpen = true;
                $scope.contentClass = "move-right-content";
                $scope.modalClass = "open";
                $scope.sidebar_footer_class = "open-modal-footer";
                $scope.closeFooter = "close-footer";
                $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
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
            
            } else if($scope.isCartOpen){
                $scope.contentClass = "";
                $scope.cartOpenClass = "asdasd";
                $scope.bodyOpenModalClass = "";
                $scope.isCartOpen = false;
            }else {
                console.log("Application Controller message \n 'modal is already open' \n SystemDev Message delete in production");
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
            console.log("asdasd");
            if($scope.isCartOpen === false){
                console.log("uso");
                //$scope.cartId = localStorage.cartId;
                $scope.isCartOpen = true;
                $scope.contentClass = "move-left-content";
                $scope.cartOpenClass = "move-cart-left ";
                 $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
            } else {
                console.log("Cart is already open");
            }
        };

        /**
         * @method keyUp
         * @param event {Object}
         * @return {void}
         */
        $scope.keyUp = function keyUp(event) {

            if (event.keyCode === 27) {
                $scope.$broadcast('modal/close');
            }

        };

        /**
         * @method broadcast
         * @param event {String}
         * @return {void}
         */
        $scope.broadcast = function broadcast(event) {
            $rootScope.$broadcast(event);
        }
        
    }]);



})(window.moaApp);