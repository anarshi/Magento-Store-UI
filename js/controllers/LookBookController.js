(function($moa) {

    "use strict";

    /**
     * @controller CurrenciesController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('LookBookController', ['$scope', '$location', '$window', '$http' , '$timeout' , function LookBookController($scope, $location, $window, $http ,$timeout) {

            $scope.zoomArray = [];
            $scope.slides = [];
            $scope.allSlidesPosition = [];

        $http({
            method: 'GET',
            url: 'http://45.79.162.17:8888/lookbook'
        }).then(function successCallback(response) {
            $scope.products = response.data;
            console.log(response.data);

            for (var i = 0; i < $scope.products.length; i++) {
                    $scope.slides.push({
                        image: $scope.products[i].allImages[0],
                        description: "pulled image"
                    });
                }

        }, function errorCallback(response) {
            console.log("ERROR: " + response);
        });

        $scope.goToProduct = function(id) {
            $location.path('/product/' + id)
        };

        $timeout(function() {
            $scope.allSlides = [];
            // $scope.allSlidesObj = 
            $(".lookbook-image").each(function(i, obj) {

                $scope.allSlides.push(obj);
            });

            for (var i = 0; i < $scope.allSlides.length; i++) {
                $scope.allSlidesPosition.push($("#" + $scope.allSlides[i].id).offset().top);
            }

        }, 500);


        var index = 0;
        var prevIndex = 0;

        var globalCurrentScrollValue = 0;

        $scope.scrollToNextImage = function() {
            var t1 = new TimelineLite();

            if ($scope.zoomArray.length > 0) {
                if (parseFloat($scope.zoomArray[0].obj) !== parseFloat($scope.zoomArray[1].obj)) {

                    index = parseFloat($scope.zoomArray[0].obj) + 1;
                    console.log("index: " + $scope.zoomArray[0].obj);

                    globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index) - 52;
                } else {
                    index = parseFloat($scope.zoomArray[0].obj);
                        console.log($scope.zoomArray[0].obj);
                    globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index) - 52;
                }


                globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (index) - 52;


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

        $scope.scrollToPreviousImage = function() {

            var t1 = new TimelineLite();
            prevIndex = parseFloat($("#" + $scope.zoomArray[0].obj).attr('id'));
            globalCurrentScrollValue = $("#" + $scope.zoomArray[0].obj).height() * (prevIndex - 1) - 52;
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
                $scope.zoomArray = []; //cleaning array
                if ($scope.allSlides !== undefined) {
                    for (var i = 0; i < $scope.allSlides.length; i++) {
                        var globalInc = i;
                        $("#" + $scope.allSlides[globalInc].id).inViewport(function(px) {

                            if (px) {
                                
                                $scope.zoomArray.push({
                                    obj: $("#" + $scope.allSlides[globalInc].id).attr('id'),
                                    visiblePart: px
                                });
                            } else {

                            }
                        });
                    }
                }

                if ($scope.zoomArray.length > 1) {
                    if ($scope.zoomArray[1].visiblePart > 150) {
                        console.log($scope.zoomArray[1]);
                        $scope.zoomId = $scope.zoomArray[1].obj;
                    } else {
                        $scope.zoomId = $scope.zoomArray[0].obj;
                    }
                } else {
                    console.log($scope.zoomArray[1]);
                    console.log($scope.zoomArray[0]);
                    if ($scope.zoomArray[0] !== undefined) {
                        $scope.zoomId = $scope.zoomArray[0].obj;
                    }
                }

                //adjust disabling strategy
                // if ($scope.zoomArray.length > 0) {
                //     if ($(window).scrollTop() === 0 || parseFloat($scope.zoomArray[0].obj) === 0) {
                //         $(".prev").prop("disabled", true);
                //         $(".prev").addClass("disabled");
                //     } else {
                //         if ($(".prev").prop("disabled")) {
                //             $(".prev").prop("disabled", false);
                //             $(".prev").removeClass("disabled");
                //         }
                //     }

                //     if ($(window).scrollTop() !== 0 && parseFloat($scope.zoomArray[0].obj) === parseFloat($scope.slides.length - 1)) {

                //         // $(".next").prop("disabled", true);
                //         // $(".next").addClass("disabled");
                //     } else if ($(window).scrollTop() === 0 && $scope.slides.length === 1) {

                //         // if ($(".next").prop("disabled") === false) {
                //         //     $(".next").prop("disabled", true);
                //         //     $(".next").addClass("disabled");
                //         // }


                //     } else {
                //         // if ($(".next").prop("disabled")) {
                //         //     $(".next").prop("disabled", false);
                //         //     $(".next").removeClass("disabled");
                //         // }
                //     }

                // } else {
                //     if ($(window).scrollTop() === 0) {
                //         $(".prev").prop("disabled", true);
                //         $(".prev").addClass("disabled");
                //     } else {
                //         if ($(".prev").prop("disabled")) {
                //             $(".prev").prop("disabled", false);
                //             $(".prev").removeClass("disabled");
                //         }
                //     }

                //     if ($(window).scrollTop() !== 0) {

                //         $(".next").prop("disabled", true);
                //         $(".next").addClass("disabled");
                //     } else if ($(window).scrollTop() !== 0 && $scope.slides.length === 1) {

                //         if ($(".next").prop("disabled") === false) {
                //             $(".next").prop("disabled", true);
                //             $(".next").addClass("disabled");
                //         }


                //     } else {
                //         if ($(".next").prop("disabled")) {
                //             $(".next").prop("disabled", false);
                //             $(".next").removeClass("disabled");
                //         }
                //     }
                // }

            }



            $scope.scrollPosition = $($window).scrollTop();

        });




    }]);

})(window.moaApp);