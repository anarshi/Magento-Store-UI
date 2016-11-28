(function($moa) {

    "use strict";

    
    $moa.service('FilterService', ['$rootScope'  , '$http' , '$timeout', function FilterService($rootScope, $http , $timeout) {

        var service = {};


       this.getFilterCategories = {
            async: function filterProducts(){
                    var promise = $http({
                            method: "get",
                            url: 'http://104.236.246.190:8888/getFilterData',
                            }).then(function successCallback(response) {
                                console.log("FilterData");
                                console.log(response.data);
                                return response.data;
                            }, function errorCallback(response) {
                                console.log(response.data);
                        });

                 return promise;
            } 
        };  

        this.filterProducts = {
            async: function filterProducts(carpetDesignerValue,carpetCollectionValue,currencyCodeValue){
                    var promise = $http({
                            method: "post",
                            url: 'http://104.236.246.190:8888/getFilterProducts',
                            data:{
                                carpet_designer_value: carpetDesignerValue,
                                carpet_collection_value: carpetCollectionValue,
                                currencyCode: currencyCodeValue
                            }
                            }).then(function successCallback(response) {
                                console.log("FilteredProducts");
                                console.log(response.data);
                                return response.data;
                            }, function errorCallback(response) {
                                console.log(response.data);
                        });

                 return promise;
            } 
        };    
        
       
    }]);

})(window.moaApp);