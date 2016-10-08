(function($moa) {

    "use strict";

    
    $moa.service('basket', ['$rootScope'  , '$http' , '$timeout', function basketService($rootScope, $http , $timeout) {

        var service = {};

        //possible or shure delete of this part of code
        this.initialize = {
            async: function initialize(productId){
                    var promise = $http({
                            method: 'GET',
                            url: 'http://45.79.162.17:8888/startCartSession/' + productId
                            }).then(function successCallback(response) {
                                return response.data;
                            }, function errorCallback(response) {
                                console.log("ERROR: " + response.data);
                        });

                 return promise;
            } 
        };


        this.addToCart = {
            async: function addToCart(cartId , productId){
                        var promise =
                        $http({
                                method: 'GET',
                                url: 'http://45.79.162.17:8888/cart/' + cartId + '/' + productId
                            }).then(function successCallback(response) {
                                return  response.data;
                            }, function errorCallback(response) {
                                console.log("ERROR: " + response);
                            });
                        

                        return promise;
                    } 
        }

        this.cartData = {
            async: function cartData(cartId){
                var promise = $http({
                        method: 'GET',
                        url: 'http://45.79.162.17:8888/getCartData/' + cartId
                    }).then(function successCallback(response) {
                        var cartData = {};

                        cartData.cartProducts = response.data;
                        cartData.cartCount = cartData.cartProducts.length;
                        cartData.totalPrice = 0;
                        for(var i = 0 ; i < cartData.cartProducts.length ; i++){
                            cartData.totalPrice += cartData.cartProducts[i].price;
                        }
                        return cartData;
                     
                    }, function errorCallback(response) {
                        console.log("ERROR: " + response);
                    });
                return promise;
            }
        };
         
        this.removeFromCart = {
            async: function removeFromCart(cartId,productId){
                var promise = $http({
                                method: 'GET',
                                url: 'http://45.79.162.17:8888/deleteProductFromCart/' + cartId + "/" + productId
                            }).then(function successCallback(response) {
                               return response.data;
                            }, function errorCallback(response) {
                                console.log("ERROR: " + response);
                            });
                            
                return promise;
            }
        };

        this.checkout = {
                async: function checkout(requestData){
                    var parameter = JSON.stringify(requestData);
                    console.log(parameter);
                    
                    var promise  =  $http({
                                        method: 'POST',
                                        url: 'http://45.79.162.17:8888/checkout',
                                        dataType:"jsonp",
                                        data: parameter,

                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }).then(function successCallback(response, status, headers, config) {
                                       return response.data;
                                    }, function errorCallback(response) {
                                        console.log("ERROR: " + response);
                                    });
                    return promise;
                }
        }

        this.deleteCart = {
            async: function deleteCart(cartId){
                var promise = $http({
                                method: 'GET',
                                url: 'http://45.79.162.17:8888/deleteCart/' + cartId 
                            }).then(function successCallback(response) {
                               return response.data;
                            }, function errorCallback(response) {
                                console.log("ERROR: " + response);
                            });

                return promise;
            }
        };

     
       
    }]);

})(window.moaApp);