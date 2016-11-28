(function($moa) {

    "use strict";

    $moa.controller('LookBookController', ['$scope', '$location', '$window', '$http' , '$timeout' , function LookBookController($scope, $location, $window, $http ,$timeout) {

        $scope.isLoading = true;
        $scope.slideArray = [];
        $scope.slides = [];
        $scope.allSlidesPosition = [];
        var currentIndex = 0;
        var prevIndex = 0;
        var nextIndex = 0;
        var globalCurrentScrollValue = 0;

        //initial setup
        if($(window).scrollTop() === 0){
            $('.prev').prop("dislabled",true);
            $(".prev").addClass("disabled");
        } else {
             if($(".prev").prop("disabled")){
                $(".prev").prop("disabled",false);
                $(".prev").removeClass("disabled");
            }
        }

        //loading all slides
        $http({
            method: 'GET',
            url: 'http://104.236.246.190:8888/lookbook'
        }).then(function successCallback(response) {
            $scope.products = response.data;

            for (var i = 0; i < $scope.products.length; i++) {
                    $scope.slides.push({
                        image: $scope.products[i].allImages[0],
                        description: "pulled image"
                    });
                }
            $scope.isLoading = true;

        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });

        $scope.goToProduct = function(id) {
            $location.path('/product/' + id)
        };

        $timeout(function() {
            $scope.allSlides = [];
            $(".lookbook-image").each(function(i, obj) {

                $scope.allSlides.push(obj);
            });

            for (var i = 0; i < $scope.allSlides.length; i++) {
                $scope.allSlidesPosition.push($("#" + $scope.allSlides[i].id).offset().top);
            }

        }, 500);


       
        $scope.scrollToNextImage = function() {
           
            var t1 = new TimelineLite();

            if ($scope.slideId !== undefined) {

                prevIndex = $scope.slideId;

                if( parseFloat($scope.slideId) !== $scope.allSlides.length - 1){
                    currentIndex = parseFloat($scope.slideId) + 1;
                    if(parseFloat($scope.slideId) + 2 <= $scope.allSlides.length){
                        nextIndex = parseFloat($scope.slideId) + 2;
                    } else {
                        nextIndex = currentIndex;
                    }
                    
                } else {
                    prevIndex = parseFloat($scope.slideId) - 1;
                    currentIndex = parseFloat($scope.slideId);
                    nextIndex = parseFloat($scope.slideId); 
                }
                
                globalCurrentScrollValue = $("#" + $scope.slideId).height() * (currentIndex) - 52;

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

                $scope.slideId = 1;
                prevIndex = $scope.slideId - 1;
                currentIndex = $scope.slideId;
                nextIndex = $scope.slideId + 1;
            }

        };

        $scope.scrollToPreviousImage = function() {

            var t1 = new TimelineLite();
            prevIndex = parseFloat($("#" + $scope.slideArray[0].obj).attr('id'));
            // if(prevIndex === $scope.allSlides.length - 1)
            globalCurrentScrollValue = $("#" + $scope.slideArray[0].obj).height() * (prevIndex) - 52;
            t1.insert(new TweenLite(window, 0.5, {
                scrollTo: {
                    y: globalCurrentScrollValue,
                    x: 0
                },
                ease: Power4.easeIn
            }), 0);
        };

        angular.element($window).bind("scroll", function() {

            if ($window.innerWidth > 990) {
                $scope.slideArray = []; //cleaning array
                if ($scope.allSlides !== undefined) {
                    for (var i = 0; i < $scope.allSlides.length; i++) {
                        var globalInc = i;
                        $("#" + $scope.allSlides[globalInc].id).inViewport(function(px) {

                            if (px) {
                                
                                $scope.slideArray.push({
                                    obj: $("#" + $scope.allSlides[globalInc].id).attr('id'),
                                    visiblePart: px
                                });

                            } else {

                            }
                        });
                    }

                    $("#" + $scope.allSlides[$scope.allSlides.length - 1].id).inViewport(function(px){
                        var visiblePartCondition = $(this).height() * 40 / 100;
                        if(px >= visiblePartCondition){
                            $('.next').prop("dislabled",true);
                            $(".next").addClass("disabled");
                        } else {
                            $(".next").prop("disabled",false);
                            $(".next").removeClass("disabled");
                        }
                    });
                }

                if ($scope.slideArray.length > 1) {
                    var visiblePartConditionLocal = $("#" + $scope.slideArray[1].obj).height() * 45 / 100;
                    if ($scope.slideArray[1].visiblePart >= visiblePartConditionLocal) {
                        $(".prev").prop("disabled",false);
                        $(".prev").removeClass("disabled");
                        $scope.slideId = $scope.slideArray[1].obj;
                    } else {
                        $('.prev').prop("dislabled",true);
                        $(".prev").addClass("disabled");
                        $scope.slideId = $scope.slideArray[0].obj;
                    }
                } else {
                    if ($scope.slideArray[0] !== undefined) {
                        $scope.slideId = $scope.slideArray[0].obj;
                    }
                }

                if($(window).scrollTop() === 0){
                    console.log("uso na vrh");
                    $('.prev').prop("dislabled",true);
                    $(".prev").addClass("disabled");
                } else {
                    $(".prev").prop("disabled",false);
                    $(".prev").removeClass("disabled");
                }
            }

            $scope.scrollPosition = $($window).scrollTop();

        });

        $scope.viewProduct = function(){
            var productId = "";
            if($scope.slideId !== undefined){
                productId = $("#" + $scope.slideId).attr("prId");
            } else {
                productId = $("#" + $scope.allSlides[0].id).attr("prId");
            }

            $location.path('/product/' + productId);
        }

    }]);

})(window.moaApp);