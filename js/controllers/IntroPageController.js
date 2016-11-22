  (function($moa) {

    "use strict";

    $moa.controller('IntroPageController', ['$scope', '$stateParams' , '$location' , '$state' ,'$timeout', 
        'basket' ,function IntroPageController($scope,
     $stateParams ,$location , $state , $timeout, basket) {

  
  

        $scope.enterSite = function(){
        	localStorage.currencyCode = $scope.currencyCode;
        	console.log(localStorage.currencyCode);
        	$state.go("home", {currencyCode: $scope.currencyCode});
        }

        $scope.somePlaceholder = "Type your email here";

        $scope.toShowNew = false;
        $scope.toShowBlue = true;
        $scope.showAlert = false;

        $scope.saveEmail = function(){
                
            if($scope.emailInput !== '' && $scope.emailInput && $scope.emailInput.indexOf("@") != -1 && $scope.emailInput.indexOf(".") != -1){
                $scope.toShowBlue = false;
                $scope.toShowNew = true;
                $scope.showAlert = false;
            } else {
                $scope.blink="blink";
                

                $timeout(function(){
                    $scope.somePlaceholder = "Please enter email";
                    $scope.blink="blink-soft";
                },300);
                
                $scope.showAlert = true;
            }

             

               
           

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