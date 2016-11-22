  (function($moa) {

    "use strict";

    $moa.controller('IntroPageController', ['$scope', '$stateParams' , '$location' , '$state' , 'basket' ,function IntroPageController($scope,
     $stateParams ,$location , $state , basket) {

  
  

        $scope.enterSite = function(){
        	localStorage.currencyCode = $scope.currencyCode;
        	console.log(localStorage.currencyCode);
        	$state.go("home", {currencyCode: $scope.currencyCode});
        }

        $scope.toShowNew = false;
        $scope.toShowBlue = true;

        $scope.saveEmail = function(){
                console.log($scope.emailInput);

                $scope.toShowBlue = false;
                $scope.toShowNew = true;
           

           //  $.ajax({
           //      url:"/saveEmail",
           //      type: "post",
           //      data:{
           //          email: emailInputValue
           //      },
           //      success: function(){
           //          console.log();
           //      },
           //      error: function(){

           //      }
           //  });


          
        }

    }]);

})(window.moaApp);