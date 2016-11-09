  (function($moa) {

    "use strict";

    $moa.controller('BasketController', ['$scope', '$stateParams' , '$location'  ,'basket', function BasketController($scope,
     $stateParams ,$location , basket ) {

       basket.cartData.async($stateParams.cartId,localStorage.currencyCode).then(function(data){
          $scope.cartProducts = data.cartProducts;
          $scope.totalPrice = data.totalPrice.toFixed(2);
          $scope.currencySymbol = data.currencySymbol;
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
        var requestData = {
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

        basket.checkout.async(requestData).then(function(response){
          if(response === "1"){
            basket.deleteCart.async(localStorage.cartId).then(function(response){
               if(response === "1"){
                  localStorage.cartId = null;
                  var buttonHref = document.getElementById();
                  $location.path("/");
               } else {
                  console.log(response);
               }
            });
              
          } else {
            basket.deleteCart.async(localStorage.cartId).then(function(response){
                  localStorage.cartId = null;
              });
            $location.path("/")
          }
        });
       }
        
    }]);

})(window.moaApp);