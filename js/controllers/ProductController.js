

(function($moa) {

    "use strict";

    $moa.controller('ProductController', ['$scope', '$http','$stateParams','$location', '$window' , '$timeout' , 'basket' , 'cartProducts', 'openCartService' , 

    function ProductController($scope,$http,$stateParams,$location , $window , $timeout , basket , cartProducts , openCartService) {

        var inViewpoerEl = $('#related-products');

        var slider = $("#slider");
            slider.css({
                'height':  $window.innerWidth + "px",
                'width' : "100%"
            });

        $("html, body").animate({ scrollTop: 0 }, 1000);

        if($("#scroll-container").is(':in-viewport')){
            console.log("in view test");
            $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                "-webkit-transform": "translate3d(0,0px,0)",
                "transform": "translate3d(0,0px,0)"
            });
        }else {
             $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                "-webkit-transform": "translate3d(0,34px,0)",
                "transform": "translate3d(0,34px,0)"
            });
        }

        

      $scope.offsetTop = 0;
      $scope.init = function(){
        console.log('asda');
         var slider = $("#slider");
            slider.css({
                'height':  $window.innerWidth + "px",
                'width' : "100%"
            });
      }
        

        $scope.cartProducts = cartProducts;

        $scope.addToCart = function(){
            var productId = $stateParams.product_id;
            if(localStorage.cartId != null && !isNaN(localStorage.cartId)){
                     basket.addToCart.async(localStorage.cartId,productId).then(function(response){
                        localStorage.cartId = response;
                         basket.cartData.async(localStorage.cartId).then(function(data){
                            $scope.cartProducts.productsInCart = data.cartProducts;
                            $scope.cartProducts.cartCount = data.cartCount;
                            $scope.cartProducts.cartTotalPrice = data.totalPrice;
                            openCartService.setCartOpen(true);
                        });
                    });
            } else {
                 basket.initialize.async(productId).then(function(response){
                    localStorage.cartId = response;
                     basket.cartData.async(localStorage.cartId).then(function(data){
                        $scope.cartProducts.productsInCart = data.cartProducts;
                        $scope.cartProducts.cartCount = data.cartCount;
                        $scope.cartProducts.cartTotalPrice = data.totalPrice;
                        openCartService.setCartOpen(true);
                    });
                });
            }
        };

        $scope.allImages = [];
        var searchCriteria = $stateParams.product_id;
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

            if($scope.slides.length > 1){
                $(".image-container").css({
                    "margin-bottom" : "-90%"
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
            if(productSizes.hasClass('hide')){
                productSizes.removeClass('hide');
                $('body').addClass('no-scroll lock-scroll');
                
                document.ontouchmove = function (e) {
                  e.preventDefault();
                }  
                
            }
            else   {
                $('body').removeClass('no-scroll lock-scroll');
                productSizes.addClass('hide');
                document.ontouchmove = function (e) {
                  return true;
                }
                  
            }

        };

        $scope.chooseSize = function(id){
            $scope.isSizeChoosen = false;
            $scope.choosenSize = id;
            $('.sizeBtn > span > strong').text(id);
            $scope.showSizes();
        }


         angular.element($window).bind("resize", function() {
            var slider = $("#slider");
            slider.css({
                'height':  $window.innerWidth + "px",

            });
         });

         $scope.scrollValueGlobal = 0;
         $scope.isZoomed = false;
         $scope.zoomClass = "zoom-in";
         //$scope.imageContainerZoomClass = "zoomedout";
         $scope.zoomIn = function($event){
            
            var imageContainer = document.getElementsByClassName("image-container")[0];
            var info = document.getElementById("info");
            
            if($scope.isZoomed === false){
                var objDiv = document.getElementById(""+$event.target.id);
        
                $scope.isZoomed = true;
                $scope.zoomClass = "zoom-out";
                $scope.imageContainerZoomClass = "zoomedout";
                $("#image-container").removeClass("zoomeout");
                $("#image-container").addClass("zoomedin");
                

                

                var scrollValue = $("#" + $event.target.id).parent().height() *parseFloat($event.target.id);



                if($scope.slides.length > 1){
                    $scope.scrollValueGlobal = $("#" + $event.target.id).height() * parseFloat($event.target.id) + 400;
                }else {
                    $scope.scrollValueGlobal = 100 ;
                }
                

                var t1 = new TimelineLite();
                 if(!$('html').hasClass('touchevents')){
                    t1.insert( new TweenLite(info , 0.5 , {opacity: "0" , left:"100%" , ease:Power4.easeIn} , 0));
                }else {
                     t1.insert( new TweenLite(info , 0.5 , {opacity: "0" , transfor:"translate(0,-1000px)" , ease:Power4.easeIn} , 0));
                }
                t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(1, 0, 0, 1, 0, 0)" , marginBottom:"0%"},ease:Power4.easeIn}), 0);
                t1.insert( new TweenLite(window, 0.5, {scrollTo:{y:scrollValue+400, x:0}, ease:Power4.easeIn}), 0);
                
                 
            } else {
                $scope.isZoomed = false;
                $scope.zoomClass = "zoom-in";
                $("#image-container").removeClass("zoomedin");
                $("#image-container").addClass("zoomedout");
                //$scope.imageContainerZoomClass = "zoomedin";
                var scrollValue2 = $scope.scrollValueGlobal;
                var t1 = new TimelineLite();
                if($event.target.id > 1){

                    scrollValue2 = $scope.scrollValueGlobal;
                }

                if(!$('html').hasClass('touchevents')){
                    t1.insert( new TweenLite(info , 0.5 , {opacity: "1" , left:"70%" , ease:Power4.easeIn} , 0));
                }else {
                     t1.insert( new TweenLite(info , 0.5 , {opacity: "1" , transfor:"translate(0,0)" , ease:Power4.easeIn} , 0));
                }
                
                t1.insert( new TweenLite(window, 0.5, {scrollTo:{y:scrollValue2-400, x:0}, ease:Power4.easeIn}), 0);
                if($scope.slides.length > 1){

                    t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(0.65, 0, 0, 0.65, 0, 0)" , marginBottom:"-90%"},ease:Power4.easeIn}), 0);
                } else {
                        
                  t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(0.65, 0, 0, 0.65, 0, 0)" , marginBottom:"0%"},ease:Power4.easeIn}), 0);
                }
            }
           
         };


         $scope.zoomInIcon = function(){
            
            var imageContainer = document.getElementsByClassName("image-container")[0];
            var info = document.getElementById("info");
            
            if($scope.isZoomed === false){
                var objDiv = document.getElementById("" + $scope.zoomId);
        
                $scope.isZoomed = true;
                $scope.zoomClass = "zoom-out";
                $scope.imageContainerZoomClass = "zoomedout";
                $("#image-container").removeClass("zoomeout");
                $("#image-container").addClass("zoomedin");
                

               
                var scrollValue = $("#" + $scope.zoomId).parent().height() *parseFloat($scope.zoomId);
                if($scope.slides.length > 1){
                    $scope.scrollValueGlobal = $("#" + $scope.zoomId).height() * parseFloat($scope.zoomId);
                }
                

                var t1 = new TimelineLite();
    
                t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(1, 0, 0, 1, 0, 0)" , marginBottom:"0%"},ease:Power4.easeIn}), 0);
                t1.insert( new TweenLite(window, 0.5, {scrollTo:{y:scrollValue + 400, x:0}, ease:Power4.easeIn}), 0);
                
                if(!$('html').hasClass('touchevents')){
                    t1.insert( new TweenLite(info , 0.5 , {opacity: "0" , left:"100%" , ease:Power4.easeIn} , 0));
                }else {
                     t1.insert( new TweenLite(info , 0.5 , {opacity: "0" , transfor:"translate(0,-1000px)" , ease:Power4.easeIn} , 0));
                }
                 
            } else {
                $scope.isZoomed = false;
                $scope.zoomClass = "zoom-in";
                $("#image-container").removeClass("zoomedin");
                $("#image-container").addClass("zoomedout");
                //$scope.imageContainerZoomClass = "zoomedin";
                var scrollValue2 = $scope.scrollValueGlobal;
                var t1 = new TimelineLite();

                if($scope.zoomId > 1){

                    scrollValue2 = $scope.scrollValueGlobal;
                }else {
                    $scope.scrollValueGlobal = 100 ;
                }

                
                t1.insert( new TweenLite(window, 0.5, {scrollTo:{y:scrollValue2 - 400, x:0}, ease:Power4.easeIn}), 0);

                if(!$('html').hasClass('touchevents')){
                    t1.insert( new TweenLite(info , 0.5 , {opacity: "1" , left:"70%" , ease:Power4.easeIn} , 0));
                }else {
                     t1.insert( new TweenLite(info , 0.5 , {opacity: "1" , transfor:"translate(0,0)" , ease:Power4.easeIn} , 0));
                }

                if($scope.slides.length > 1){

                    t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(0.65, 0, 0, 0.65, 0, 0)" , marginBottom:"-90%"},ease:Power4.easeIn}), 0);
                } else {
                        
                  t1.insert( new TweenMax(imageContainer,.5,{css:{transform: "matrix(0.65, 0, 0, 0.65, 0, 0)" , marginBottom:"0%"},ease:Power4.easeIn}), 0);
                }
                
                
            }
           
         };


        $timeout(function(){
            $scope.allSlides  = [];
            // $scope.allSlidesObj = 
            $(".slides").each(function(i, obj){
                $scope.allSlides.push(obj);
            }); 
        },500);
         
        $scope.scrollPosition = 0;
        $scope.footerClass = "";
        $scope.distance = 0;
        $scope.isSet = false;
        $scope.zoomArray = [];
        $scope.zoomId = "0";

        
            angular.element($window).bind("scroll", function() {

                if($window.innerWidth > 990){
                    $scope.zoomArray = []; //cleaning array
                    if($scope.allSlides !== undefined){
                         for (var i = 0; i < $scope.allSlides.length; i++) {
                            var globalInc = i;
                            $("#" + $scope.allSlides[i].id ).find('.hover').inViewport(function(px){
                                if(px){
                                    $scope.zoomArray.push({
                                        obj:  $("#" + $scope.allSlides[globalInc].id ).find(".hover").attr('id'),
                                        visiblePart: px
                                    });
                                } else {
                                }
                            });
                        }
                    }
                   

                    if($scope.zoomArray.length > 1){
                        if($scope.zoomArray[1].visiblePart > 150){
                            $scope.zoomId = $scope.zoomArray[1].obj;
                        } else {
                            $scope.zoomId = $scope.zoomArray[0].obj;
                        }
                    } else {
                        if($scope.zoomArray[0] !== undefined){
                            $scope.zoomId = $scope.zoomArray[0].obj;
                        }
                    }
                }
                
                
                
                $scope.scrollPosition = $($window).scrollTop();

                if($($window).scrollTop() === 0){
                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });
                } else if(inViewpoerEl.is(':in-viewport(-54)') && $($window).scrollTop() !== 0) {

                    $scope.isSet = false;
                    if(!$('html').hasClass('touchevents')){
                        $("#info").css({
                            "position" : 'absolute',
                            "top" : ($scope.distance-300) + 'px'
                        });
                    }


                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(100%)',
                        'transform': 'translateY(100%)'
                    });

                    $("#zoom-container").css({
                        '-webkit-transform': 'translateY(54px)',
                        'transform': 'translateY(54px)'
                    });
                    
                } else if(inViewpoerEl.is(':in-viewport') === false){

                    if($scope.isSet === false){
                        $scope.isSet = true;
                        $scope.distance = $('#related-products').offset().top;

                    }
                    
                    if(!$('html').hasClass('touchevents')){
                        $("#info").css({
                            "position" : 'fixed',
                            "top" : '50%'
                        });
                    }
                    

                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });

                    $("#zoom-container").css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });
                }

                if($("#scroll-container").is(':in-viewport')){
                    $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                        "-webkit-transform": "translate3d(0,0px,0)",
                        "transform": "translate3d(0,0px,0)"
                    });
                }else {
                     $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                        "-webkit-transform": "translate3d(0,34px,0)",
                        "transform": "translate3d(0,34px,0)"
                    });
                }

            });

        // }
        


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