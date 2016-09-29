(function($moa) {

    "use strict";

    /**
     * @controller BasketController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('BasketController', ['$scope', '$routeParams' , '$location'  , 'http', 'basket', function BasketController($scope,
     $routeParams ,$location , http, basket) {

      

        console.log($routeParams.cartId);
       basket.cartData.async($routeParams.cartId).then(function(data){
            $scope.cartProducts = data.cartProducts;
            $scope.totalPrice = data.totalPrice;
       });

       //view vars
       $scope.firstName = "";
       $scope.lastName = "";
       $scope.email = "";
       $scope.adress1 = "";
       $scope.adress2 = "";
       $scope.zip = "";
       $scope.city = "";
       $scope.state = "";
       $scope.telephone = ""; 
       $scope.countryCode = ""; 
       $scope.company = "";

       $scope.submitCheckout = function(){
            var requuestData = {
                "firstName" : $scope.firstName,
                "lastName" : $scope.lastName,
                "email": $scope.email,
                "adress1": $scope.adress1,
                "adress2": $scope.adress2,
                "zip": $scope.zip,
                "city": $scope.city,
                "state": $scope.state,
                "telephone": $scope.telephone,
                "countryCode" : $scope.countryCode,
                "company": $scope.company,
                "cartId": $routeParams.cartId
            };
            console.log(requuestData);
            basket.checkout.async(requuestData).then(function(response){
              console.log("response : " + response);
                if(response === "1"){
                  console.log("dobro chech out");
                    basket.deleteCart.async(localStorage.cartId).then(function(response){
                      console.log("uso u brisanje");
                       if(response === "1"){
                          console.log("response: " + response);
                          localStorage.cartId = null;
                          var buttonHref = document.getElementById();
                          // $window.location.href = buttonHref.getAttribute('data-href')
                          $location.path("/");
                       } else {
                          console.log(response);
                       }
                    });
                    
                } else {
                  basket.deleteCart.async(localStorage.cartId).then(function(response){
                      console.log("uso u brisanje");
                       
                        console.log("response: " + response);
                        localStorage.cartId = null;
                            //var buttonHref = document.getElementById();
                          
                      
                    });
                  //console.log("lose checkout");
                  $location.path("/")
                }
            });
       }
        
    }]);

})(window.moaApp);