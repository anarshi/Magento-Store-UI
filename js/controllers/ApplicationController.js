(function($moa) {

    "use strict";

    /**
     * @controller ApplicationController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ApplicationController', ['$rootScope', '$scope','$http' ,

    function applicationController($rootScope, $scope , $http) {


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
            }
        };

        $scope.closeModal = function () {
            if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
            } else {
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