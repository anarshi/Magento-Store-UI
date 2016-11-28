(function($moa) {

    "use strict";

    /**
     * @controller ProductsController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('ProductsController', ['$scope', '$rootScope', '$http' , '$state' , '$stateParams'
                                            , "$window" , 'FilterService',

    function productsController($scope, $rootScope,$http, $state ,$stateParams , $window , FilterService) {

        $scope.products = [];


        $http({
            method: 'POST',
            url: 'http://104.236.246.190:8888/getAllConfigProducts',
            data: {
                currencyCode: $stateParams.currencyCode,
                storeId: localStorage.storeId
            }
        }).then(function successCallback(response) {
            $scope.products = response.data;
            console.log(response);
        }, function errorCallback(response) {
            console.log(response);
        });

        // $scope.openProduct = function(id,currencyCode){
        //     $state.go("product",{id: id , currencyCode: currencyCode});
        // }

        $scope.showSubText = function(id){
            var containerEl = document.getElementById(id + '');
            var showEl = containerEl.getElementsByClassName("hover")[0];
            TweenLite.to(showEl, 0, {css:{opacity:1}});
            TweenLite.to(showEl, 0, {css:{margin:0}});       
        }

        $scope.hideSubText = function(id){
            var containerEl = document.getElementById(id + '');
            var showEl = containerEl.getElementsByClassName("hover")[0];
            TweenLite.to(showEl, 1, {css:{opacity:0}});
            TweenLite.to(showEl, 0, {css:{margin:'10px 0 0'}});
        }

        
        $scope.clearFilter = function(){
            $scope.isFilterSet = false;
            $('input:checkbox').removeAttr('checked');
            $scope.productGridType =" opacity-0";
           setTimeout(function(){
                    $scope.productGridType = localStorage.productGridType;
                    $window.scrollTo(10, 0);
                    $window.scrollTo(0, 0);
                },500);
            $http({
                method: 'POST',
                url: 'http://104.236.246.190:8888/getAllConfigProducts',
                data: {
                    carpet_collection: null,
                    carpet_designer: null ,
                    currencyCode: localStorage.currencyCode,
                    storeId: localStorage.storeId
                }
            }).then(function successCallback(response) {
                $scope.products = response.data;
                $scope.closeFilter();
                 
                    
                  
                
            }, function errorCallback(response) {
                console.log(response);
            });

           

            //loggic for filering data
        }

        $scope.isFilterOpen = false;
    
        $scope.filterCategories = {};
        var singleOverlay = $('.single-overlay');

        $scope.closeFilter = function() {
            $scope.filterBtn = "";
            $("#productFilter").addClass('hide');
            singleOverlay.removeClass('show');  
            $('body').removeClass('no-scroll lock-scroll');
        };

        FilterService.getFilterCategories.async().then(function(data){
            $scope.filterCategories = data;
            console.log("filterData Products");
            console.log(data);
            //console.log($scope.filterCategories[0].name);
        });


        $scope.applyFilter = function(){

            $scope.isFilterSet = true;
            var collectionArray = divideArrayBasedOnParametar($scope.selectedFilterOptions,"Collection");
            console.log(collectionArray);
            var designerArray = divideArrayBasedOnParametar($scope.selectedFilterOptions,"Designer");
            var carpetSizesArray = divideArrayBasedOnParametar($scope.selectedFilterOptions,"Size");
            $scope.productGridType = localStorage.getItem("productGridType") + " opacity-0";


            $http({
                method: 'POST',
                url: 'http://104.236.246.190:8888/getFilterProducts',
                data: {
                    carpet_collection: collectionArray,
                    carpet_designer: designerArray ,
                    carpet_size: carpetSizesArray,
                    currencyCode: localStorage.currencyCode,
                    storeId: localStorage.storeId
                }
            }).then(function successCallback(response) {
                $scope.products = response.data;
                $scope.closeFilter();
                 setTimeout(function(){
                    $scope.productGridType = localStorage.productGridType;
                    $window.scrollTo(10, 0);
                    $window.scrollTo(0, 0);
                },500);
            }, function errorCallback(response) {
                console.log(response);
                $scope.closeFilter();
            });
        }

        function divideArrayBasedOnParametar(array,paramaterName){
            var toRetArray = [];
            for (var i = 0; i < array.length; i++) {
                if(array[i].name === paramaterName){
                    toRetArray.push(array[i]);
                }
            }
            return toRetArray;
        }

        $scope.selectedFilterOptions = [];

        $scope.selectFilter = function(filterValue,categoryParent){
            console.log(filterValue);
            var findedIndex = $scope.filterCategories.indexOf(categoryParent);
            if(findedIndex != -1){
                var array = $.map($scope.filterCategories[findedIndex], function(value, index) {
                    return [value];
                });
                var filterSelectedElementIndex = array.indexOf(filterValue);
                var tempIndex = $scope.selectedFilterOptions.indexOf(filterValue);
                if(tempIndex == -1){
                    if(filterSelectedElementIndex != -1){
                        $scope.selectedFilterOptions.push(filterValue);
                    }
                }else {
                    $scope.selectedFilterOptions.splice(tempIndex,1);
                }
                
            }
        }
        

    }]);

})(window.moaApp);
