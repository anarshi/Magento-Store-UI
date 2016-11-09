  (function($moa) {

    "use strict";

    $moa.controller('IntroPageController', ['$scope', '$stateParams' , '$location' , '$state' , 'basket' ,function IntroPageController($scope,
     $stateParams ,$location , $state , basket) {

  
  

        $scope.enterSite = function(){
        	localStorage.currencyCode = $scope.currencyCode;
        	console.log(localStorage.currencyCode);
        	$state.go("home", {currencyCode: $scope.currencyCode});
        }
    }]);

})(window.moaApp);