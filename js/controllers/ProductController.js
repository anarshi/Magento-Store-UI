(function($moa) {

    "use strict";

    $moa.controller('ProductController', ['$scope', '$http','$routeParams','$location','basket' , 'cartProducts',

    function ProductController($scope,$http,$routeParams,$location , basket , cartProducts) {

        $scope.cartProducts = cartProducts;

        $scope.addToCart = function(){
            var productId = $routeParams.product_id;
            if(localStorage.cartId != null && !isNaN(localStorage.cartId)){
                     basket.addToCart.async(localStorage.cartId,productId).then(function(response){
                        localStorage.cartId = response;
                         basket.cartData.async(localStorage.cartId).then(function(data){
                            $scope.cartProducts.productsInCart = data.cartProducts;
                            $scope.cartProducts.cartCount = data.cartCount;
                            $scope.cartProducts.cartTotalPrice = data.totalPrice;
                        });
                    });
            } else {
                 basket.initialize.async(productId).then(function(response){
                    localStorage.cartId = response;
                     basket.cartData.async(localStorage.cartId).then(function(data){
                        $scope.cartProducts.productsInCart = data.cartProducts;
                        $scope.cartProducts.cartCount = data.cartCount;
                        $scope.cartProducts.cartTotalPrice = data.totalPrice;
                    });
                });
            }
        };

        $scope.allImages = [];
        var searchCriteria = $routeParams.product_id;
        $http.get('http://45.79.162.17:8888/product/' + searchCriteria).then(function successCallback(response) {
            $scope.product = response.data;
            $scope.product.price = '$ '  + $scope.product.price;
            $scope.slides = [];
            for(var i = 0 ; i < $scope.product.allImages.length ; i++){
                $scope.slides.push({
                    image: $scope.product.allImages[i],
                    description: "pulled image"
                });
            }
        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });

        $scope.goHome = function(path){
            $location.path(path);
        };

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };

        var productSizes = $('#product-sizes');
        $scope.isSizeChoosen = true;

        //should take size as parameter in fuction this is just a test case
        $scope.showSizes = function(){
            if(productSizes.hasClass('hide'))
                productSizes.removeClass('hide');
            else   
                productSizes.addClass('hide');
        };

        $scope.chooseSize = function(id){
            $scope.isSizeChoosen = false;
            $scope.choosenSize = id;
            $('.sizeBtn > span > strong').text(id);
            $scope.showSizes();
        }


        

        function isScrolledIntoView(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        $scope.footerClass = "";
        $scope.inView = function(index, inview, inviewpart){
            if(inview){
                console.log('inview');
                $scope.footerClass = "scrollout";
            } else {
                $scope.footerClass = "";
            }
        }


    }]).animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };


    });

})(window.moaApp);