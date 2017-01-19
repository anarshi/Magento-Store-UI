  (function($moa) {

    "use strict";

    $moa.controller('IntroTempController', ['$scope', '$stateParams' , '$location' , '$state' ,'$timeout', 
        'basket' ,function IntroTempController($scope,
     $stateParams ,$location , $state , $timeout, basket) {

    //   document.addEventListener("touchmove", function(event){
    //     event.preventDefault();
    // });
  

        $scope.enterSite = function(){
          console.log("currencyCode: "+ scope.currencyCode);

          if(scope.currencyCode === "nocurrency" || scope.currencyCode === "" || $scope.storeId === "nolanguage" || $scope.storeId === "nolanguage"){
            $scope.chooseLangagueClass="blink-select";
            $scope.chooseCountryClass="blink-select";
            $timeout(function(){
                $scope.chooseLangagueClass="blink-soft-select";
                $scope.chooseCountryClass="blink-soft-select";
            },300);

          } else {

            localStorage.currencyCode = $scope.currencyCode;
            localStorage.storeId = $scope.storeId;
            $state.go("home", {currencyCode: $scope.currencyCode});

          }
        }

        $scope.somePlaceholder = "Type your email here";

        $scope.toShowNew = false;
        $scope.toShowBlue = true;
        $scope.showAlert = false;

        $scope.focusInput = function(){
            $scope.somePlaceholder = "";
        }

        $scope.blurInput = function(){
            if($scope.blink === "blink-soft"){
                $scope.somePlaceholder = "Please enter email";
            } else {
                $scope.somePlaceholder= "Type you email here";
            }
        }

        $scope.saveEmail = function(){

            if($scope.emailInput !== '' && $scope.emailInput && $scope.emailInput.indexOf("@") != -1 && $scope.emailInput.indexOf(".") != -1){
                $scope.toShowBlue = false;
                $scope.toShowNew = true;
                $scope.showAlert = false;

                $.ajax({
                  url:"http://104.236.246.190:8888/writeEmail",
                  type: "post",
                  data:{
                    email: $scope.emailInput
                  },
                  success: function(data){
                    console.log(data);
                  },
                  error: function(data){
                    console.log(data);
                  }
                });

            } else {
                console.log("suo u else");
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