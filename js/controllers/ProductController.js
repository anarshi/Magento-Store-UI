(function($moa) {

    "use strict";

    /**
     * @controller ProductController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ProductController', ['$scope', '$http','$routeParams','$location',

    function ProductController($scope,$http,$routeParams,$location) {

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
            console.log($scope.product);
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