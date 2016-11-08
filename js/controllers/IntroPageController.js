  (function($moa) {

    "use strict";

    $moa.controller('IntroPageController', ['$scope', '$stateParams' , '$location' , '$state' , 'basket', function IntroPageController($scope,
     $stateParams ,$location , $state) {

  

        $scope.enterSite = function(){
        	$state.go("home", {currencyCode: $scope.currencyCode});
        }
    }]);

})(window.moaApp);