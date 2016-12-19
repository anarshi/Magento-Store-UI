  (function($moa) {

    "use strict";

    $moa.controller('IntroPageController', ['$scope', '$stateParams' , '$location' , '$state' ,'$timeout', 'basket' ,'deviceDetector' , function IntroPageController($scope,
     $stateParams ,$location , $state , $timeout, basket ,  deviceDetector) {


    var vm = this;
    vm.data = deviceDetector;
    vm.allData = JSON.stringify(vm.data, null, 2);

    $scope.showModal = function(){
      $(".bd-example-modal-sm").modal("show");
    }

    $scope.isMobile = false;
    if(vm.data.os === "ios" || vm.data.os === "android" && vm.data.os === "microsoft"){
      $scope.isMobile = true;
    }

    console.log(vm.data.os);

    //initial placeholders
    $scope.choosenLang = "Select language";
    $scope.choosenCountry = "Select your country";

    $scope.isCountryUp = false;
    $scope.rotateCountryIcon = function(e){
      e.stopPropagation();
        


      if($scope.isLangUp){

        $(".langDropdownbutton").dropdown('toggle');
        $scope.isLangUp = false;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:0, transformOrigin:"center"});
      }

      if($scope.isCountryUp){

        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).attr("aria-expanded","false");
          $(el).parent().removeClass("open");
        }

        $scope.isCountryUp = false;
        TweenLite.to($("#country-caret"), 0.5, {rotation:0, transformOrigin:"center"});
      } else {

        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).attr("aria-expanded","true");
          $(el).parent().addClass("open");
        }

         $scope.isCountryUp = true;
        TweenLite.to($("#country-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
      }
     
    }

    $scope.isLangUp = false;
    $scope.rotateLangIcon = function(e){
      e.stopPropagation();
       
      if($scope.isCountryUp){
        $scope.isCountryUp = false;
        TweenLite.to($("#country-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
      }

      if($scope.isLangUp){

        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).attr("aria-expanded","false");
          $(el).parent().removeClass("open");
        }

        $scope.isLangUp = false;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:0, transformOrigin:"center"});
      } else {

        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).attr("aria-expanded","true");
          $(el).parent().addClass("open");
        }

        $scope.isLangUp = true;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
      }
     
    }

    $scope.closeDropdownMenu = function(){
      if($scope.isCountryUp === true && (vm.data.os.toLowerCase() !== "ios"  && vm.data.os.toLowerCase() !== "android")){
        $scope.isCountryUp = false;
        TweenLite.to($("#country-caret"), 0.5, {rotation:0, transformOrigin:"center"});
         //$(".countryDropdownButton").removeClass("open");
      } 

      if($scope.isLangUp ===  true && (vm.data.os.toLowerCase() !== "ios"  && vm.data.os.toLowerCase() !== "android") ){
        $scope.isLangUp = false;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:0, transformOrigin:"center"});
      } 
    }

    $scope.openCountryDropdown = function(){
      document.getElementById("myDropdown").classList.toggle("show");
    }

    $scope.selectedCountry;
    $scope.selectedLang;
    $scope.chooseACountry = function(selectedCountry,e){
      $scope.currencyCode = selectedCountry;

      //$(".countryDropdownButton").dropdown('hide');
      $(".countryDropdownButton").dropdown("toggle");
       $('.countryDropdownButton').trigger('click.bs.dropdown');
      $("body").trigger("click");


      //ajdust to backend return lang ids from databse
      //this is temp solution just for demostration
      if(selectedCountry === "SEK"){
        $scope.choosenCountry = "Sweeden";
      } else if(selectedCountry === "EUR") {
          $scope.choosenCountry = "Rest of europe";
      }

      if($scope.isLangUp){
        $(".langDropdownbutton").dropdown('toggle');
        $scope.isLangUp = false;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:0, transformOrigin:"center"});
      }

      if($scope.isCountryUp){

        $scope.isCountryUp = false;
        TweenLite.to($("#country-caret"), 0.5, {rotation:0, transformOrigin:"center"});
        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element();
          $(el).parent().parent().removeClass("open");
          $(".countryDropdownButon").attr("aria-expanded","true");
          console.log("ios");
        }
      } else {

        $scope.isCountryUp = true;
        TweenLite.to($("#country-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
        if(vm.data.os.toLowerCase() === "ios"){
          console.log("ios2");
          var el = angular.element();
          $(el).parent().parent().addClass("open");
          $(".countryDropdownButon").attr("aria-expanded","true");
        }
      }
    }


    // //stops scrolling on ios
    // if(vm.data.os.toLowerCase() === "ios"){
    //   document.addEventListener('touchmove', function(event){
    //     event.stopPropagation();
    //   });

    //    document.ontouchmove = function(e){
    //       e.preventDefault();
    //   }
    // }
    
    $scope.chooseLang = function(value,e){

      $scope.storeId = value;

      $(".langDropdownbutton").dropdown('toggle');
      $('.langDropdownbutton').trigger('click.bs.dropdown');

      $("body").trigger("click");



      //ajdust to backend return lang ids from databse
      //this is temp solution just for demostration
      if(parseFloat(value) === 1 ){
        $scope.choosenLang = "Svenska"; 
      } else if(parseFloat(value) === 2 ){
        $scope.choosenLang = "English"; 
      }

      if($scope.isCountryUp){
        $scope.isCountryUp = false;
        TweenLite.to($("#country-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
      }

      if($scope.isLangUp){

      

        $scope.isLangUp = false;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:0, transformOrigin:"center"});
        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).parent().parent().removeClass("open");
          $(".langDropdownbutton").attr("aria-expanded","false");
        }

      } else {
        
        $scope.isLangUp = true;
        TweenLite.to($("#lang-caret"), 0.5, {rotation:-180, transformOrigin:"center"});
        if(vm.data.os.toLowerCase() === "ios"){
          var el = angular.element(e.target);
          $(el).parent().parent().addClass("open");
          $(".langDropdownbutton").attr("aria-expanded","true");
        }
      }

    }

    $scope.enterSite = function(){
    	

      if($scope.currencyCode === undefined || $scope.storeId === undefined){
        console.log("currencyCode: "+ $scope.currencyCode);
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

          
        }

    }]);

})(window.moaApp);