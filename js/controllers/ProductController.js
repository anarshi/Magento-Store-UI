(function($moa) {

    "use strict";

    $moa.controller('ProductController', ['$scope', '$http', '$state' ,'$stateParams', '$location', '$window', '$timeout', 'basket', 'cartProducts', 'openCartService',

        function ProductController($scope, $http, $state , $stateParams, $location, $window, $timeout, basket, cartProducts, openCartService) {


            var inViewpoerEl = $('#related-products');
            var productSizes = $('#product-sizes');
            var singleOverlay = $('.single-overlay');
            var slider = $("#slider");
            $scope.offsetTop = 0;
            $scope.scrollPosition = 0;
            $scope.footerClass = "";
            $scope.distance = 0;
            $scope.isSet = false;
            $scope.zoomArray = [];
            $scope.zoomId = "0";
            $scope.isOutOfStock = false;
            $scope.addToBagText = "Add to bag";
            $scope.productInformation = "";
            $scope.productChoosenId = null;
            $scope.isConfigurableFirst = false;
            var imageContainer = document.getElementsByClassName("image-container")[0];
            var info = document.getElementById("info");
            $scope.relatedProducts = [];

            $scope.scrollToTop = function(){
                $('html,body').animate({ scrollTop: 0 }, 'slow');
            };


            $scope.scroll = 0;
            if ($window.innerWidth <= 1020 ) {

                //TODO: check this behaviour timeout time from 1000 to 0 changed

                $timeout(function() {
                    $('#image-container').slick({
                        dots: true,
                        rtl:false,
                        vertical:false,
                        arrows: false,
                        mobileFirst: true,
                        swipeToSlide: true,
                        touchMove: true,
                        useTransform: true

                    });


                    $("#rp_image_container").slick({
                        dots: true,
                        rtl:false,
                        vertical:false,
                        arrows: false,
                        mobileFirst: true,
                        swipeToSlide: true,
                        touchMove: true,
                        useTransform: true
                    });

                }, 1000);
            }else {

                if($("#image-container").hasClass("slick-initialized")){
                     $timeout(function() {
                        $('#image-container').slick("unslick");
                        $("#rp_image_container").slick("unslick");
                    }, 0);
                }
                
            }

            $scope.toggleProductAccordion = function($event,id){
                if($("#" + id).hasClass("product-accordion-content-open")){
                    $("#" + id).removeClass("product-accordion-content-open");
                    $($event.currentTarget).find("span").removeClass("product-accordion-open");
                } else {
                    $("#" + id).addClass("product-accordion-content-open");
                    $($event.currentTarget).find("span").addClass("product-accordion-open");
                }
            };

            $scope.isMoving = false;
            $scope.pos = {};







             $http.post("http://104.236.246.190:8888/getRelatedProducts/" + $stateParams.product_id ,
                    {
                        storeId: localStorage.storeId,
                        currencyCode: localStorage.currencyCode

                    }).then(function successCallback(response){
                        $scope.relatedProducts = [];
                        for (var i = 0; i < response.data.length; i++) {
                            $scope.relatedProducts.push(response.data[i]);
                        }
                    } , function errorCallback(response) {
                            console.log(response);
                    });


            $scope.allImages = [];
            var searchCriteria = $stateParams.product_id;



            $scope.goToRelatedProduct = function(id,currencyCode){
                $state.go("product", {product_id: id , currencyCode: currencyCode});
            };

            $scope.scrollContainerWidth = 0;
            $http.post('http://104.236.246.190:8888/product/' + searchCriteria,{currencyCode: $stateParams.currencyCode , storeId: localStorage.storeId}).then(function successCallback(response) {
                $scope.product = response.data;
                $scope.product.price = $scope.product.price.toFixed(2);
                $scope.slides = [];

                console.log($scope.product);

                setTimeout(function(){
                    $("select").selectric();
                    for(var j = 0 ; j < $scope.product.childProducts.length ; j++){
                        $('select').append('<option ng-click="someFunction()">' + ($scope.product.childProducts[j].size ? $scope.product.childProducts[j].size : 'Empty') + '</option>');

                    }

                    $('select').selectric('refresh');
                },1500);


                $scope.productInformation = response.data.product_information;


                if($scope.product.typeId === "configurable"){
                    $scope.isConfigurableFirst = true;
                    $scope.associatedProducts = [];
                    for (var i = 0; i < $scope.product.childProducts.length; i++) {
                        $scope.associatedProducts.push($scope.product.childProducts[i]);
                    }

                    $scope.showProductData = false;
                    
                } else {
                    if(parseFloat(response.data.is_in_stock) === 1){
                        $scope.isOutOfStock = false;
                        $scope.addToBagText = "Add to bag";
                    } else {
                        $scope.isOutOfStock = true;
                        $scope.addToBagText = "Out of stock";
                    }
                    $scope.isConfigurableFirst = false;
                    $scope.showProductData = true;
                    $scope.sizeBtnClass="sizeBtn-size-is-choosen";
                    $scope.isSizeChoosen = true;
                    $scope.footerClass="footer-btn-container-height-with-add";
                    var chosedSizeText = $scope.product.size  +  " | " + $scope.product.currencySymbol + $scope.product.price;
                    $('.sizeBtn').text(chosedSizeText);
                }

                for (var i = 0; i < $scope.product.allImages.length; i++) {
                    $scope.slides.push({
                        image: $scope.product.allImages[i],
                        description: "pulled image"
                    });
                    $scope.scrollContainerWidth += 408;



                }




                var timestamp = null;
                var lastMouseX = null;
                var lastMouseY = null;

                if($scope.windowsInnerWidth < $scope.scrollContainerWidth){
                    $(".scroll-container > ul").on("mousemove", function(e){

                        if (timestamp === null) {
                            timestamp = Date.now();
                            lastMouseX = e.screenX;
                            lastMouseY = e.screenY;
                            return;
                        }

                        var now = Date.now();
                        var dt =  now - timestamp;
                        var dx = e.screenX - lastMouseX;
                        var dy = e.screenY - lastMouseY;
                        var speedX = Math.round(dx / dt * 100);
                        var speedY = Math.round(dy / dt * 100);

                        timestamp = now;
                        lastMouseX = e.screenX;
                        lastMouseY = e.screenY;

                        var minusRate = ($scope.scrollContainerWidth *($scope.windowsInnerWidth*0.05)) / parseFloat(100);
                        var scale =  $scope.scrollContainerWidth / parseFloat($scope.windowsInnerWidth);

                        console.log($scope.scrollContainerWidth);
                        console.log($scope.windowsInnerWidth);
                        console.log(scale);

                        console.log(minusRate);

                        if(e.pageX * (scale/2) <= ($scope.scrollContainerWidth-minusRate)){
                            $(".scroll-container > ul").css({
                                "transform": "translate( -" +  e.pageX*(scale/2) + "px, 0px)"
                            });
                        }


                    });



                }



                console.log($scope.slides);

                // if ($scope.slides.length > 1) {
                //     // $(".image-container").css({
                //     //     "margin-bottom": "-90%"
                //     // });
                // }


            if($scope.zoomArray.length > 0 ){
                if($(window).scrollTop() === 0 || parseFloat($scope.zoomArray[0].obj) === 0){
                    $(".prev").prop("disabled",true);
                    $(".prev").addClass("disabled");
                }else {
                    if($(".prev").prop("disabled")){
                        $(".prev").prop("disabled",false);
                        $(".prev").removeClass("disabled");
                    }
                }

                if($(window).scrollTop() !== 0 && parseFloat($scope.zoomArray[0].obj) === parseFloat($scope.allSlides.length - 1)){

                        $(".next").prop("disabled",true);
                        $(".next").addClass("disabled");
                    }else {

                        if($(".next").prop("disabled")){
                            $(".next").prop("disabled",false);
                            $(".next").removeClass("disabled");
                        }
                    }

                } else {
                    if($(window).scrollTop() === 0 || $scope.slides.length === 1){
                        $(".prev").prop("disabled",true);
                        $(".prev").addClass("disabled");
                    }else {
                        if($(".prev").prop("disabled")){
                            $(".prev").prop("disabled",false);
                            $(".prev").removeClass("disabled");
                        }
                    }

                    if($(window).scrollTop() !== 0){

                        $(".next").prop("disabled",true);
                        $(".next").addClass("disabled");
                    }else {

                        if($scope.slides.length === 1){
                            $(".next").prop("disabled",true);
                            $(".next").addClass("disabled");
                        } else{
                            if($(".next").prop("disabled")){
                                $(".next").prop("disabled",false);
                                $(".next").removeClass("disabled");
                            }
                        }

                        
                    }
                }
            }, function errorCallback(response) {
                console.log(response);
            });    
            

            slider.css({
                'height': $window.innerWidth + "px",
                'width': "100%"
            });

            $("html, body").animate({
                scrollTop: 0
            }, 1000);

            if ($("#scroll-container").is(':in-viewport')) {
                $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                    "-webkit-transform": "translate3d(0,0px,0)",
                    "transform": "translate3d(0,0px,0)"
                });
            } else {
                $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                    "-webkit-transform": "translate3d(0,34px,0)",
                    "transform": "translate3d(0,34px,0)"
                });
            }


            $scope.init = function() {
                slider.css({
                    'height': $window.innerWidth + "px",
                    'width': "100%"
                });
            }


            $scope.closeSizes = function() {

                productSizes.addClass('hide');
                singleOverlay.removeClass('show');
            };

            $scope.cartProducts = cartProducts;

            $scope.addToCart = function() {
                console.log($scope.productChoosenId);
                var productId = null;
                if($scope.productChoosenId != null){
                     productId = $scope.productChoosenId;
                } else {
                    productId  = $stateParams.product_id;
                }
                    
            if($scope.isOutOfStock === false){
                if (localStorage.cartId != null && !isNaN(localStorage.cartId)) {
                        basket.addToCart.async(localStorage.cartId, productId).then(function(response) {
                            localStorage.cartId = response;
                            basket.cartData.async(localStorage.cartId,localStorage.currencyCode).then(function(data) {
                                $scope.cartProducts.productsInCart = data.cartProducts;
                                $scope.cartProducts.cartCount = data.cartCount;
                                $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
                                $scope.currencySymbol = data.currencySymbol;
                                openCartService.setCartOpen(true);
                            });
                        });
                    } else {
                        basket.initialize.async(productId).then(function(response) {
                            localStorage.cartId = response;
                            basket.cartData.async(localStorage.cartId,localStorage.currencyCode).then(function(data) {
                                $scope.cartProducts.productsInCart = data.cartProducts;
                                $scope.cartProducts.cartCount = data.cartCount;
                                $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
                                $scope.currencySymbol = data.currencySymbol;
                                openCartService.setCartOpen(true);
                            });
                        });
                    }
                };
            };


                


            $scope.goHome = function(path) {
                $location.path(path);
            };

            $scope.direction = 'left';
            $scope.currentIndex = 0;

            $scope.setCurrentSlideIndex = function(index) {
                $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
                $scope.currentIndex = index;
            };

            $scope.isCurrentSlideIndex = function(index) {
                return $scope.currentIndex === index;
            };

            $scope.prevSlide = function() {
                $scope.direction = 'left';
                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            };

            $scope.nextSlide = function() {
                $scope.direction = 'right';
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            };


            $scope.isSizeChoosen = false;
            $scope.sizeBtnClass="";
            if($scope.isSizeChoosen){
                $scope.footerClass="footer-btn-container-height-with-add";
            }else{
                $scope.footerClass  ="footer-btn-container-height-no-add";
            }


            //should take size as parameter in fuction this is just a test case
            $scope.showSizes = function() {
                if (productSizes.hasClass('hide') && $scope.isConfigurableFirst) {
                    productSizes.removeClass('hide');
                    $('body').addClass('no-scroll lock-scroll');
                    productSizes.removeClass('hide');
                    singleOverlay.addClass('show');

                    // document.ontouchmove = function(e) {
                    //     e.preventDefault();
                    // }

                } else {
                    $('body').removeClass('no-scroll lock-scroll');
                    productSizes.addClass('hide');
                    singleOverlay.removeClass('show');

                    // document.ontouchmove = function(e) {
                    //     return true;
                    // }

                }

            };

            $scope.chooseSize = function(chosedSizeText,id) {
                $scope.sizeBtnClass="sizeBtn-size-is-choosen";
                $scope.isSizeChoosen = true;
                $scope.footerClass="footer-btn-container-height-with-add";
                $scope.choosenSize = chosedSizeText;
                $('.sizeBtn').text(chosedSizeText);
                $scope.productChoosenId = id;
                $scope.showSizes();


                $http.post("http://104.236.246.190:8888/getRelatedProducts/" + $scope.productChoosenId ,
                    {
                        storeId: localStorage.storeId,
                        currencyCode: localStorage.currencyCode

                    }).then(function successCallback(response){
                        console.log(response.data);
                        $scope.relatedProducts = [];
                        for (var i = 0; i < response.data.length; i++) {
                            $scope.relatedProducts.push(response.data[i]);
                        }

                        $(".relatedProductLink").click(function(){
                            var prId = $(this).attr("data-id");
                            var prCrCode = $(this).attr("data-currency");
                            console.log("prdId: " + prId  + " Code: " + prCrCode );
                        });

                    } , function errorCallback(response) {
                            console.log(response);
                    });

                if($window.innerWidth < 1020){
                     for(var j = 0 ; j < $scope.slides.length ; j++){
                         $('#image-container').slick('slickRemove',0)

                    //     TODO: add for rp_image_container approproet contiditon now is slides but change when logic is adjusted
                    //     and put it out of this foor loop
                         $("#rp_image_container").slick('slickRemove',0);
                    }

                    $('#image-container').slick('unslick');
                    $("#rp_image_container").slick('unslick');
                }
               


                $http.post("http://104.236.246.190:8888/getSimpleProductsById/" + id,{currencyCode: $stateParams.currencyCode , storeId: localStorage.storeId}).then(function successCallback(response) {
                            //$('.image-container').slick('unslick');
                            //console.log($scope.slides.length);
                            
                    

                            $scope.product = response.data;
                            $scope.product.price = $scope.product.price.toFixed(2);
                            $scope.slides = [];

                             if(parseFloat(response.data.is_in_stock) === 1){
                                $scope.addToBagText = "Add to bag";
                                $scope.isOutOfStock = false;
                            } else {
                                $scope.isOutOfStock = true;
                                $scope.addToBagText = "Out of stock";
                            }

                            console.log(response.data);

                            if($scope.product.typeId === "configurable"){
                                $scope.associatedProducts = [];
                                for (var i = 0; i < $scope.product.childProducts.length; i++) {
                                    $scope.associatedProducts.push($scope.product.childProducts[i]);
                                }

                                $scope.showProductData = false;
                                
                            } else {
                                $scope.showProductData = true;
                            }

                            for (var i = 0; i < $scope.product.allImages.length; i++) {
                                $scope.slides.push({
                                    image: $scope.product.allImages[i],
                                    description: "pulled image"
                                });

                            }

                            console.log($scope.slides);

                            if ($scope.slides.length > 1) {
                                $(".image-container").css({
                                    "margin-bottom": "-90%"
                                });
                            }

                            console.log($window.innerWidth < 1020);

                            if ($window.innerWidth < 1020) {
                                console.log("uso u <1200ifpx");
                                
                               setTimeout(function(){
                                    $('#image-container').slick({
                                        dots: true,
                                        rtl:false,
                                        vertical:false,
                                        arrows: false,
                                        mobileFirst: true,
                                        swipeToSlide: true,
                                        touchMove: true,
                                        useTransform: true

                                    });

                                    $('#rp_image_container').slick({
                                        dots: true,
                                        rtl:false,
                                        vertical:false,
                                        arrows: false,
                                        mobileFirst: true,
                                        swipeToSlide: true,
                                        touchMove: true,
                                        useTransform: true
                                    })
                               },0)

                            } else if($('#image-container').hasClass("slick-initialized")) {
                                setTimeout(function(){
                                    
                                    $('#image-container').slick('unslick');

                                    //TODO: Check this condition it is not for rp_image_container
                                    $("#rp_image_container").slick("unslick");
                               },0)
                            } else {
                                 
                            }


                        if($scope.zoomArray.length > 0 ){
                            if($(window).scrollTop() === 0 || parseFloat($scope.zoomArray[0].obj) === 0){
                                $(".prev").prop("disabled",true);
                                $(".prev").addClass("disabled");
                            }else {
                                if($(".prev").prop("disabled")){
                                    $(".prev").prop("disabled",false);
                                    $(".prev").removeClass("disabled");
                                }
                            }

                            if($(window).scrollTop() !== 0 && parseFloat($scope.zoomArray[0].obj) === parseFloat($scope.allSlides.length - 1)){

                                    $(".next").prop("disabled",true);
                                    $(".next").addClass("disabled");
                                }else {

                                    if($(".next").prop("disabled")){
                                        $(".next").prop("disabled",false);
                                        $(".next").removeClass("disabled");
                                    }
                                }

                            } else {
                                if($(window).scrollTop() === 0 || $scope.slides.length === 1){
                                    $(".prev").prop("disabled",true);
                                    $(".prev").addClass("disabled");
                                }else {
                                    if($(".prev").prop("disabled")){
                                        $(".prev").prop("disabled",false);
                                        $(".prev").removeClass("disabled");
                                    }
                                }

                                if($(window).scrollTop() !== 0){

                                    $(".next").prop("disabled",true);
                                    $(".next").addClass("disabled");
                                }else {

                                    if($scope.slides.length === 1){
                                        $(".next").prop("disabled",true);
                                        $(".next").addClass("disabled");
                                    } else{
                                        if($(".next").prop("disabled")){
                                            $(".next").prop("disabled",false);
                                            $(".next").removeClass("disabled");
                                        }
                                    }

                                    
                                }
                            }
                        }, function errorCallback(response) {
                            console.log(response);
                        });


               


            };

            $scope.windowsInnerWidth = $(window).innerWidth();
            angular.element($window).bind("resize", function() {
                var slider = $("#slider");
                $scope.windowsInnerWidth = $(window).innerWidth();
                if ($window.innerWidth < 1020 ) {
                    $timeout(function() {
                        $('#image-container').slick("unslick");
                        $("#rp_image_container").slick("unslick");
                    }, 0);


                    $timeout(function() {
                        $('#image-container').slick({
                            dots: true,
                            rtl:false,
                            vertical:false,
                            arrows: false,
                            mobileFirst: true,
                            swipeToSlide: true,
                            touchMove: true,
                            useTransform: true

                        });

                        $("#rp_image_container").slick({
                            dots: true,
                            rtl:false,
                            vertical:false,
                            arrows: false,
                            mobileFirst: true,
                            swipeToSlide: true,
                            touchMove: true,
                            useTransform: true
                        });

                    }, 0);

                } else {
                    if($("#image-container").hasClass("slick-initialized")){
                        $timeout(function() {
                            $('#image-container').slick("unslick");

                            //TODO: check this condition it is not for rp_image_container
                            $('#rp_image_container').slick("unslick");
                        }, 0);
                    }
                    
                }
                // slider.css({
                //     'height': $window.innerWidth + "px",
                //      'left' : "0px !important"

                // });


                var timestamp = null;
                var lastMouseX = null;
                var lastMouseY = null;

                if($scope.windowsInnerWidth < $scope.scrollContainerWidth){
                    $(".scroll-container > ul").on("mousemove", function(e){

                        if (timestamp === null) {
                            timestamp = Date.now();
                            lastMouseX = e.screenX;
                            lastMouseY = e.screenY;
                            return;
                        }

                        var now = Date.now();
                        var dt =  now - timestamp;
                        var dx = e.screenX - lastMouseX;
                        var dy = e.screenY - lastMouseY;
                        var speedX = Math.round(dx / dt * 100);
                        var speedY = Math.round(dy / dt * 100);

                        timestamp = now;
                        lastMouseX = e.screenX;
                        lastMouseY = e.screenY;

                        var minusRate = ($scope.scrollContainerWidth *($scope.windowsInnerWidth*0.05)) / parseFloat(100);
                        var scale =  $scope.scrollContainerWidth / parseFloat($scope.windowsInnerWidth);

                        console.log($scope.scrollContainerWidth);
                        console.log($scope.windowsInnerWidth);
                        console.log(scale);

                        console.log(minusRate);

                        if(e.pageX * (scale/2) <= ($scope.scrollContainerWidth-minusRate)){
                            $(".scroll-container > ul").css({
                                "transform": "translate( -" +  e.pageX*(scale/2) + "px, 0px)"
                            });
                        }


                    });
                } else {
                    $(".scroll-container > ul").unbind("mousemove");
                    $(".scroll-container > ul").css({
                        "transform": "translate( 0px, 0px)"
                    });
                }
            });

            $scope.scrollValueGlobal = 0;
            $scope.isZoomed = false;
            $scope.zoomClass = "zoom-in";
            //$scope.imageContainerZoomClass = "zoomedout";
            $scope.zoomIn = function($event) {

                if ($scope.isZoomed === false) {
                    var objDiv = document.getElementById("" + $event.target.id);

                    $scope.isZoomed = true;
                    $scope.zoomClass = "zoom-out";
                    $scope.imageContainerZoomClass = "zoomedout";
                    $("#image-container").removeClass("zoomeout");
                    $("#image-container").addClass("zoomedin");


                    var scrollValue = $("#" + $event.target.id).parent().height() * parseFloat($event.target.id);

                    if ($scope.slides.length > 1) {
                        $scope.scrollValueGlobal = $("#" + $event.target.id).height() * parseFloat($event.target.id) + 400;
                    } else {
                        $scope.scrollValueGlobal = 100;
                    }


                    var t1 = new TimelineLite();
                    if (!$('html').hasClass('touchevents')) {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "0",
                            left: "100%",
                            ease: Power4.easeIn
                        }, 0));
                    } else {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "0",
                            transform: "translate(0,-1000px)",
                            ease: Power4.easeIn
                        }, 0));
                    }
                    t1.insert(new TweenMax(imageContainer, .5, {
                        css: {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            marginBottom: "0%"
                        },
                        ease: Power4.easeIn
                    }), 0);
                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: scrollValue + 400,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);


                } else {
                    $scope.isZoomed = false;
                    $scope.zoomClass = "zoom-in";
                    $("#image-container").removeClass("zoomedin");
                    $("#image-container").addClass("zoomedout");
                    //$scope.imageContainerZoomClass = "zoomedin";
                    var scrollValue2 = $scope.scrollValueGlobal;
                    var t1 = new TimelineLite();
                    if ($event.target.id > 1) {

                        scrollValue2 = $scope.scrollValueGlobal;
                    }

                    if (!$('html').hasClass('touchevents')) {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "1",
                            left: "70%",
                            ease: Power4.easeIn
                        }, 0));
                    } else {
                        t1.insert(new TweenLite(info, 0.1, {
                            opacity: "1",
                            transform: "translate(0,0)",
                            ease: Power4.easeIn
                        }, 0));
                    }

                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: scrollValue2 - 400,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);
                    if ($scope.slides.length > 1) {

                        t1.insert(new TweenMax(imageContainer, .5, {
                            css: {
                                transform: "matrix(0.65, 0, 0, 0.65, 0, 0)",
                                marginBottom: "-90%"
                            },
                            ease: Power4.easeIn
                        }), 0);
                    } else {

                        t1.insert(new TweenMax(imageContainer, .5, {
                            css: {
                                transform: "matrix(0.65, 0, 0, 0.65, 0, 0)",
                                marginBottom: "0%"
                            },
                            ease: Power4.easeIn
                        }), 0);
                    }
                }

            };


            $scope.zoomInIcon = function() {

                var imageContainer = document.getElementsByClassName("image-container")[0];
                var info = document.getElementById("info");

                if ($scope.isZoomed === false) {
                    var objDiv = document.getElementById("" + $scope.zoomId);

                    $scope.isZoomed = true;
                    $scope.zoomClass = "zoom-out";
                    $scope.imageContainerZoomClass = "zoomedout";
                    $("#image-container").removeClass("zoomeout");
                    $("#image-container").addClass("zoomedin");



                    var scrollValue = $("#" + $scope.zoomId).parent().height() * parseFloat($scope.zoomId);
                    if ($scope.slides.length > 1) {
                        $scope.scrollValueGlobal = $("#" + $scope.zoomId).height() * parseFloat($scope.zoomId);
                    }


                    var t1 = new TimelineLite();

                    t1.insert(new TweenMax(imageContainer, .5, {
                        css: {
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            marginBottom: "0%"
                        },
                        ease: Power4.easeIn
                    }), 0);
                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: scrollValue + 400,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);

                    if (!$('html').hasClass('touchevents')) {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "0",
                            left: "100%",
                            ease: Power4.easeIn
                        }, 0));
                    } else {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "0",
                            transfor: "translate(0,-1000px)",
                            ease: Power4.easeIn
                        }, 0));
                    }

                } else {
                    $scope.isZoomed = false;
                    $scope.zoomClass = "zoom-in";
                    $("#image-container").removeClass("zoomedin");
                    $("#image-container").addClass("zoomedout");
                    //$scope.imageContainerZoomClass = "zoomedin";
                    var scrollValue2 = $scope.scrollValueGlobal;
                    var t1 = new TimelineLite();

                    if ($scope.zoomId > 1) {

                        scrollValue2 = $scope.scrollValueGlobal;
                    } else {
                        $scope.scrollValueGlobal = 100;
                    }


                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: scrollValue2 - 400,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);

                    if (!$('html').hasClass('touchevents')) {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "1",
                            left: "70%",
                            ease: Power4.easeIn
                        }, 0));
                    } else {
                        t1.insert(new TweenLite(info, 0.5, {
                            opacity: "1",
                            transfor: "translate(0,0)",
                            ease: Power4.easeIn
                        }, 0));
                    }

                    if ($scope.slides.length > 1) {

                        t1.insert(new TweenMax(imageContainer, .5, {
                            css: {
                                transform: "matrix(0.65, 0, 0, 0.65, 0, 0)",
                                marginBottom: "-90%"
                            },
                            ease: Power4.easeIn
                        }), 0);
                    } else {

                        t1.insert(new TweenMax(imageContainer, .5, {
                            css: {
                                transform: "matrix(0.65, 0, 0, 0.65, 0, 0)",
                                marginBottom: "0%"
                            },
                            ease: Power4.easeIn
                        }), 0);
                    }


                }

            };


            $scope.allSlidesPosition = [];

            $timeout(function() {
                $scope.allSlides = [];
                // $scope.allSlidesObj = 
                $(".slides").each(function(i, obj) {

                    $scope.allSlides.push(obj);
                });

                for (var i = 0; i < $scope.allSlides.length; i++) {
                    $scope.allSlidesPosition.push($("#" + $scope.allSlides[i].id).offset().top);
                }

            }, 500);


            var regularIndexForward = 0;
            var reuglarIndexBehind = 0;
            var regularCurrentIndex = 0;
            var index = 0;
            var prevIndex = 0;

            var globalCurrentScrollValue = 0;

            $scope.scrollToNextImage = function() {
                var t1 = new TimelineLite();
               
               if($scope.zoomArray.length > 0){
                    if(parseFloat($scope.zoomArray[0].obj) !== parseFloat($scope.zoomArray[1].obj)){

                        index = parseFloat($scope.zoomArray[0].obj) + 1;

                        globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index)  - 52;
                    } else {
                        index = parseFloat($scope.zoomArray[0].obj);
                       
                        globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index)  - 52;
                    }
                    
                  
                    globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index)  - 52;
                    
                    
                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: globalCurrentScrollValue,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);
               } else {
                    t1.insert(new TweenLite(window, 0.5, {
                        scrollTo: {
                            y: $scope.allSlidesPosition[1] - 52,
                            x: 0
                        },
                        ease: Power4.easeIn
                    }), 0);
               }
                
            };

           
            $scope.scrollToPreviousImage = function(){

               var t1 = new TimelineLite();
               prevIndex = parseFloat($("#" + $scope.zoomArray[0].obj).attr('id'));
               globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (prevIndex-1) - 52; 
                t1.insert(new TweenLite(window, 0.5, {
                    scrollTo: {
                        y: globalCurrentScrollValue ,
                        x: 0
                    },
                    ease: Power4.easeIn
                }), 0);

            };


            angular.element($window).bind("scroll", function() {

                if ($window.innerWidth > 990) {
                    $scope.zoomArray = []; //cleaning array
                    if ($scope.allSlides !== undefined) {
                        for (var i = 0; i < $scope.allSlides.length; i++) {
                            var globalInc = i;
                            $("#" + $scope.allSlides[globalInc].id).find('.hover').inViewport(function(px) {
                                    
                                if (px) {
                                    $scope.zoomArray.push({
                                        obj: $("#" + $scope.allSlides[globalInc].id).find(".hover").attr('id'),
                                        visiblePart: px
                                    });
                                } else {
                                
                                }
                            });
                        }
                    }
                        if($scope.zoomArray.length > 0){
                            if($(window).scrollTop() === 0 || parseFloat($scope.zoomArray[0].obj) === 0){
                                $(".prev").prop("disabled",true);
                                $(".prev").addClass("disabled");
                            }else {
                                if($(".prev").prop("disabled")){
                                    $(".prev").prop("disabled",false);
                                    $(".prev").removeClass("disabled");
                                }
                            }

                            if($(window).scrollTop() !== 0 && parseFloat($scope.zoomArray[0].obj) === parseFloat($scope.allSlides.length - 1)){

                                $(".next").prop("disabled",true);
                                $(".next").addClass("disabled");
                            }else if($(window).scrollTop() === 0 && $scope.slides.length === 1){

                                if($(".next").prop("disabled") === false){
                                    $(".next").prop("disabled",true);
                                    $(".next").addClass("disabled");
                                }

                                
                            } else {

                                if($(".next").prop("disabled")){
                                    $(".next").prop("disabled",false);
                                    $(".next").removeClass("disabled");
                                }
                            }

                        } else {
                            if($(window).scrollTop() === 0){
                                $(".prev").prop("disabled",true);
                                $(".prev").addClass("disabled");
                            }else {
                                if($(".prev").prop("disabled")){
                                    $(".prev").prop("disabled",false);
                                    $(".prev").removeClass("disabled");
                                }
                            }

                            if($(window).scrollTop() !== 0){

                                $(".next").prop("disabled",true);
                                $(".next").addClass("disabled");
                            }else if($(window).scrollTop() !== 0 && $scope.slides.length === 1){

                                if($(".next").prop("disabled") === false){
                                    $(".next").prop("disabled",true);
                                    $(".next").addClass("disabled");
                                }

                                
                            } else {
                                if($(".next").prop("disabled")){
                                    $(".next").prop("disabled",false);
                                    $(".next").removeClass("disabled");
                                }
                            }   
                        }

                    


                    if ($scope.zoomArray.length > 1) {
                        if ($scope.zoomArray[1].visiblePart > 150) {
                            $scope.zoomId = $scope.zoomArray[1].obj;
                        } else {
                            $scope.zoomId = $scope.zoomArray[0].obj;
                        }
                    } else {
                        if ($scope.zoomArray[0] !== undefined) {
                            $scope.zoomId = $scope.zoomArray[0].obj;
                        }
                    }
                }



                $scope.scrollPosition = $($window).scrollTop();

                if ($($window).scrollTop() === 0) {
                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });

                    

                } else if (inViewpoerEl.is(':in-viewport(-54)') && $($window).scrollTop() !== 0) {

                    $scope.isSet = false;
                    // if (!$('html').hasClass('touchevents')) {
                    //     // $("#info").css({
                    //     //     "position": 'absolute',
                    //     //     "top": ($scope.distance - 500) + 'px'
                    //     // });

                    //     console.log($scope.distance - 500);
                    // }


                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(100%)',
                        'transform': 'translateY(100%)'
                    });

                    $("#zoom-container").css({
                        '-webkit-transform': 'translateY(54px)',
                        'transform': 'translateY(54px)'
                    });

                    $("#prev").css({
                        '-webkit-transform': 'translateY(54px)',
                        'transform': 'translateY(54px)'
                    });

                    $("#next").css({
                        '-webkit-transform': 'translateY(54px)',
                        'transform': 'translateY(54px)'
                    });

                } else if (inViewpoerEl.is(':in-viewport') === false) {

                    if ($scope.isSet === false) {
                        $scope.isSet = true;
                        $scope.distance = $('#related-products').offset().top;

                    }

                    // if (!$('html').hasClass('touchevents')) {
                    //     $("#info").css({
                    //         "position": 'fixed',
                    //         "top": '30%'
                    //     });
                    // }


                    $('#footer-bar').css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });

                    $("#zoom-container").css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });

                    $("#prev").css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });

                    $("#next").css({
                        '-webkit-transform': 'translateY(0)',
                        'transform': 'translateY(0)'
                    });


                }

                if ($("#scroll-container").is(':in-viewport')) {
                    $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                        "-webkit-transform": "translate3d(0,0px,0)",
                        "transform": "translate3d(0,0px,0)"
                    });
                } else {
                    $("html.no-touchevents .product-page .upsells .scroll-container-products ul li.onscreen").css({
                        "-webkit-transform": "translate3d(0,34px,0)",
                        "transform": "translate3d(0,34px,0)"
                    });
                }

            });

            $scope.fitActive = "active";
            $scope.showFit = "";
            $scope.showDelivery = "hide";
            $scope.showMaterial = "hide";

            $scope.showTabContent = function(contentId){

                switch(contentId) {
                    case 1:
                        $scope.fitActive = "active";
                        $scope.materialActive = "";
                        $scope.deliveryActive = "";
                        $scope.showFit = "";
                        $scope.showDelivery = "hide";
                        $scope.showMaterial = "hide";

                        break;
                    case 2:
                        $scope.fitActive = "";
                        $scope.materialActive = "";
                        $scope.deliveryActive = "active";

                        $scope.showFit = "hide";
                        $scope.showDelivery = "";
                        $scope.showMaterial = "hide";
                        break;
                    case 3:
                        $scope.fitActive = "";
                        $scope.materialActive = "active";
                        $scope.deliveryActive = "";

                        $scope.showFit = "hide";
                        $scope.showDelivery = "hide";
                        $scope.showMaterial = "";
                        break;
                }
            };

            $scope.showProductInfo = function(){
                $scope.productInfoClass = "exp-panel--show-panel stock-Android exp-panel--show-panel";
               $("body").addClass("no-scroll lock-scroll");
               // document.ontouchmove = function (e) {
               //      e.preventDefault();
               // }
            }

            $scope.closeProductInfo = function(){
                $scope.productInfoClass = "";
                $("body").removeClass("no-scroll lock-scroll");
               //  document.ontouchmove = function () {
               //      return true
               // }
            
            }


        }
        
    ]).animation('.slide-animation', function() {
        return {
            beforeAddClass: function(element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if (scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {
                        left: finishPoint,
                        onComplete: done
                    });
                } else {
                    done();
                }
            },
            removeClass: function(element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if (scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, {
                        left: startPoint
                    }, {
                        left: 0,
                        onComplete: done
                    });
                } else {
                    done();
                }
            }
        };




    });

})(window.moaApp);