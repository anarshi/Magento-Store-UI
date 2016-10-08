(function($moa) {

    "use strict";

    /**
     * @controller CurrenciesController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('LookBookController', ['$scope'  , '$location' , '$http' , function LookBookController($scope,$location,$http) {

        $http({
            method: 'GET',
            url: 'http://45.79.162.17:8888/lookbook'
        }).then(function successCallback(response) {
            $scope.products = response.data;


             $scope.elementIdUp = $scope.products[0].id;
            $scope.elementIdDown = $scope.products[0].id;
            $scope.counter = 0;

            $scope.scrollUp = function(){

                $('html, body').animate({
                    scrollTop: $("#" + $scope.elementIdUp).offset().top
                }, 2000);
                if($scope.counter < 0){
                    $scope.counter = 0;
                    $scope.elementIdUp = $scope.products[$scope.counter].id;
                    $scope.elementIdDown = $scope.products[1].id;
                } else if($scope.counter > 0){
                    $scope.elementIdDown = $scope.products[$scope.counter].id;
                    $scope.elementIdUp = $scope.products[$scope.counter-1].id;
                }

                $scope.counter--; 

            };

            $scope.scrollDown = function(){
                $('html, body').animate({
                    scrollTop: $("#" + $scope.elementIdDown).offset().top
                }, 2000);
                
                if($scope.counter >= $scope.products.length){
                    $scope.elementIdDown = $scope.products[$scope.counter].id;
                    $scope.elementIdUp = $scope.products[$scope.counter-1].id;
                }else {
                    console.log($scope.counter);

                    $scope.elementIdDown = $scope.products[$scope.counter + 1].id;
                    $scope.elementIdUp = $scope.products[$scope.counter];
                }
                $scope.counter++;
                

            };


        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });

        $scope.goToProduct = function(id){
            $location.path('/product/' + id)
        };

        

       


        
    }]);

})(window.moaApp);