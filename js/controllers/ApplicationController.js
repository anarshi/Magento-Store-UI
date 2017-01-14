(function($moa) {

    "use strict";

    $moa.controller('ApplicationController', ['$rootScope', '$scope'  ,  '$route','$location' 
                                                , '$http' ,'$timeout', '$window' 
                                                ,'basket',  'deviceDetector' , 'cartProducts','openCartService' , '$state', '$mdSidenav' , '$log' ,
                                                '$mdComponentRegistry' ,
    function applicationController($rootScope, $scope , $route  ,  $location , $http , $timeout
                                     , $window ,basket ,deviceDetector ,cartProducts,openCartService , $state , $mdSidenav, $log, $mdComponentRegistry) {

        // window.onbeforeunload = function () {
        //     var url = window.location.href;
        //     if(window.location.href.split("/")[5] === "" || url.indexOf("welcome") !== -1 || url.indexOf("home") !== -1){
        //         window.location.reload();
        //         $state.go("welcome");
                 
              
        //     }
        // };




        $scope.isOpenCategoryFilter = false;


        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
        };





        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                        console.log("toggle " + navID + " is done");
                    });
            }, 200);
        }

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                        console.log("toggle " + navID + " is done");
                    });
            }
        }

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }


        // side nav left and right preventing scrollig when they are open
        $scope.sideNavIsOpen = function() {
            return false;
        };

        $scope.sideNavIsOpenLeft = function() {
            return false;
        };

        //fire sideNavIsOpen when right side nav is open
        $mdComponentRegistry.when('right').then(function(sideNav) {
            $scope.sideNavIsOpen = angular.bind(sideNav, sideNav.isOpen);
        });

        //fire sideNavIsOpen when left side nav is open
        $mdComponentRegistry.when('left').then(function(sideNav) {
            $scope.sideNavIsOpenLeft = angular.bind(sideNav, sideNav.isOpen);
        });


        $scope.$watch('sideNavIsOpen()', function() {
            if(!$scope.sideNavIsOpen()) {
                $('body').removeClass('lock-scroll');
                document.ontouchmove = function(e){
                    return true;
                };
                console.log('closed');
            }
            else {
                document.ontouchmove = function(e){
                    e.preventDefault();
                };
                $('body').addClass('lock-scroll');
                console.log('open');
            }
        });

        $scope.$watch('sideNavIsOpenLeft()', function() {
            if(!$scope.sideNavIsOpenLeft()) {
                $('body').removeClass('lock-scroll');
                document.ontouchmove = function(e){
                    return true;
                };
                console.log('closed');
            }
            else {
                document.ontouchmove = function(e){
                    e.preventDefault();
                };
                $('body').addClass('lock-scroll');
                console.log('open');
            }
        });

        $scope.countryListSideMenuClass = "countryListStyle-hide";
        $scope.chooseLangListSideMenuClass = "chooseLangListStyle-hide";
        $scope.showMainCategorySideMenuClass = "";
        $scope.translateSideMenuClass = "";
        $scope.backCountryIconClass = "";
        $scope.isCountryListOpen = false;
        $scope.isLangListOpen = false;

        $scope.openCountryList = function(){
            if(!$scope.isCountryListOpen) {
                $scope.isCountryListOpen = true;
                $scope.showMainCategorySideMenuClass = "main-sidemenu-category";
                $scope.countryListSideMenuClass = "countryListStyle-show";
                $scope.translateSideMenuClass = "translateSideMenu";
                $scope.backCountryIconClass = "showBackCountry";
            }
        };

        $scope.openLangList = function(){
            if(!$scope.isLangListOpen){
                $scope.isLangListOpen = true;
                $scope.chooseLangListSideMenuClass = "chooseLangListStyle-show";
                $scope.showMainCategorySideMenuClass = "main-sidemenu-category";
                $scope.backCountryIconClass = "showBackCountry";
            }
        };

        $scope.showMainCategorySideMenu = function(){
            if($scope.isCountryListOpen){
                $scope.isCountryListOpen = false;
                $scope.showMainCategorySideMenuClass = "main-sidemenu-category";
                $scope.countryListSideMenuClass = "countryListStyle-hide";
                $scope.translateSideMenuClass = "";
                $scope.backCountryIconClass = "";1
                $scope.showMainCategorySideMenuClass = "";
            } else if($scope.isLangListOpen){
                $scope.isLangListOpen = false;
                $scope.showMainCategorySideMenuClass = "";
                $scope.chooseLangListSideMenuClass = "chooseLangListStyle-hide";
                $scope.showMainCategorySideMenuClass = "";
                $scope.backCountryIconClass = "";
            }
        };


        $scope.openCategoryFilter = function(){
            if($scope.isOpenCategoryFilter){
                $scope.openFilter = "";
                $scope.isOpenCategoryFilter = false;
                $scope.toggleFilterBackDrop = "close-filter-backdrop";
                $scope.bodyOpenModalClass = "";
                document.ontouchmove = function(e){
                    return true;
                };
            } else {
                document.ontouchmove = function(e){
                    e.preventDefault();
                };
                $scope.openFilter = "open-category-filter";
                $scope.isOpenCategoryFilter = true;
                $scope.toggleFilterBackDrop = "open-filter-backdrop";
                $scope.bodyOpenModalClass = "lock-scroll no-scroll";
            }
        };


        $scope.closeCategoryFilter = function(){

            document.ontouchmove = function(e){
                return true;
            };

            $scope.isOpenCategoryFilter = false;
            $scope.openFilter = "";
            $scope.toggleFilterBackDrop = "close-filter-backdrop";
            $scope.bodyOpenModalClass = "";
        };


        $scope.chooseCategory = function(){
            $scope.closeCategoryFilter();
        };
      

        $scope.isFilterOpen = false;
        $scope.openFilter = function(){
            console.log("openFilter");
            if($scope.isFilterOpen){
                $scope.isFilterOpen = false;
                $scope.openFilterClass = "";
            } else {
                $scope.isFilterOpen = true;
                $scope.openFilterClass = "show";
            }
            
        };

        $scope.topNavabarStyle = {};
        $scope.currentState = "";
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
            $scope.currentState = toState.templateUrl;
            console.log(toState.templateUrl);
            if(toState.templateUrl === "views/lookbook.html"){
               $scope.topNavbarStyle = "product-page-navabar ";
                $scope.topNavbarLogoStyle = "product-page-navbar-span-logo-icon product-page-small-logo" ;
                $scope.topNavbarCartcountStyle = "product-page-cartcount";
                $scope.topNavbarMenuStyle = "product-page-navbar-menu"
                $scope.filterMenuButtonClass = "hide-filter-menu";
                $scope.menuLabelClass = "product-menu-label";
                $scope.bagLabelClass = "product-bag-label";
                $scope.introTempStyleClass = "";

            } else if(toState.templateUrl === "views/about.html"){
                 console.log( $(".transform-container-index"));
                $(".transform-container-index").css({
                    "height":"100%"
                }); 
                $scope.topNavbarStyle = "product-page-navabar ";
                $scope.topNavbarLogoStyle = "product-page-navbar-span-logo-icon product-page-small-logo" ;
                $scope.topNavbarCartcountStyle = "product-page-cartcount";
                $scope.topNavbarMenuStyle = "product-page-navbar-menu"
                $scope.filterMenuButtonClass = "hide-filter-menu";
                $scope.menuLabelClass = "product-menu-label";
                $scope.bagLabelClass = "product-bag-label";
                $scope.introTempStyleClass = "";

            } else if(toState.templateUrl === "views/product.html"){

                $scope.topNavbarStyle = "product-page-navabar ";
                $scope.topNavbarLogoStyle = "product-page-navbar-span-logo-icon product-page-small-logo" ;
                $scope.topNavbarCartcountStyle = "product-page-cartcount";
                $scope.topNavbarMenuStyle = "product-page-navbar-menu"
                $scope.filterMenuButtonClass = "hide-filter-menu";
                $scope.menuLabelClass = "product-menu-label";
                $scope.bagLabelClass = "product-bag-label";
                $scope.introTempStyleClass = "";

            } else if (toState.templateUrl === "views/home_page.html"){
                $scope.topNavbarStyle = "";
                $scope.topNavbarLogoStyle = "";
                $scope.topNavbarCartcountStyle = "";
                $scope.filterMenuButtonClass = "";
                $scope.menuLabelClass = "";
                $scope.bagLabelClass = "";
                $scope.introTempStyleClass = "";

            }else if(toState.templateUrl === "views/serviceDesk.html"){
                $scope.topNavbarStyle = "product-page-navabar ";
                $scope.topNavbarLogoStyle = "product-page-navbar-span-logo-icon product-page-small-logo" ;
                $scope.topNavbarCartcountStyle = "product-page-cartcount";
                $scope.topNavbarMenuStyle = "product-page-navbar-menu"
                $scope.filterMenuButtonClass = "hide-filter-menu";
                $scope.menuLabelClass = "product-menu-label";
                $scope.bagLabelClass = "product-bag-label";
                $scope.introTempStyleClass = "";
            } else if(toState.templateUrl === "views/checkout.html"){
                $scope.topNavbarStyle = "product-page-navabar ";
                $scope.topNavbarLogoStyle = "product-page-navbar-span-logo-icon product-page-small-logo" ;
                $scope.topNavbarCartcountStyle = "product-page-cartcount";
                $scope.topNavbarMenuStyle = "product-page-navbar-menu"
                $scope.filterMenuButtonClass = "hide-filter-menu";
                $scope.menuLabelClass = "product-menu-label";
                $scope.bagLabelClass = "product-bag-label";
                $scope.introTempStyleClass = "";
            } else {
                $scope.introTempStyleClass = "introPageStyle";
                $scope.topNavbarStyle = "hide-top-navbar";
                $scope.topNavbarLogoStyle = "";
                $scope.topNavbarCartcountStyle = "";
                $scope.filterMenuButtonClass = "";
            }
        });


        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        $scope.isLoaded = false;
        $scope.isiOS = false;
        $scope.stylesheets = [];
        $scope.isiOS = iOS;
        $scope.isSafari = isSafari;

        if($scope.isiOS || $scope.isSafari){
            var innerHeight =  window.innerHeight;
            $timeout(function(){
                var sidemenu = document.getElementById("sidemenu-ios");
                sidemenu.style.height = innerHeight + "px";
                $('#collection-footer').css({
                    'display':"none"
                });
                $('#collection-footer-ios').css({
                    'display':"block"
                });
            },500);
            
            $scope.stylesheets = [
              {href: 'css/iosStyle/default-ios.css', type:'text/css'}
            ];
        } else {

            $('#collection-footer').css({
                    'display':"block"
                });

                $('#collection-footer-ios').css({
                    'display':"none"    
                });

            $scope.stylesheets = [
              {href: 'css/default.css', type:'text/css'}
            ];                
        }

        $scope.isLoaded = true;

        $scope.$watch(
            function(){
                return openCartService.getCartOpen();
            },

            function(newValue , oldValue){
                if(newValue === true){
                     if($location.path() === "/about" || $location.path() === "/service"){
                        $scope.contentClass = "move-left-content-no-fixed";
                        if($location.path() === "/service"){
                            var myDiv = document.getElementById('step1');
                            myDiv.scrollTop = 0;
                        }else {
                             var myDiv = document.getElementById('body');
                              myDiv.scrollTop = 0;
                           
                        }
                    }else {
                       $scope.contentClass = "move-left-content"; 
                    }

                    $scope.isCartOpen = true;
                    $scope.cartOpenClass = "move-cart-left ";
                    $scope.bodyOpenModalClass = "menu-open lock-scroll no-scroll";
                    document.ontouchmove = function(e){
                        e.preventDefault();
                    };
                    $scope.closeFooter = "close-footer";
                } else {
                    $scope.contentClass = "";
                    $scope.cartOpenClass = "asdasd";
                    $scope.bodyOpenModalClass = "";
                    $scope.closeFooter = "";
                    $scope.isCartOpen = false;
                     document.ontouchmove = function(){
                        return true;
                    }
                }
            }
        ,true);


        document.addEventListener('touchmove', function(event){
            event.stopPropagation();
        });

         $scope.$on('$locationChangeSuccess', function() {

                var url = window.location.href;
              if(window.location.href.split("/").length <= 6  && window.location.href.split("/")[5] === "" 
                                                || url.indexOf("welcome") !== -1){
                $(".menu").css({
                   visibility:"hidden"
                
                });
                $(".cartcount").css({
                    visibility: "hidden"
                });
                    
              } else {
                $(".menu").css({
                   visibility:"visible"
                });
                $(".cartcount").css({
                    visibility: "inherit"
                });
              }

              if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
                document.ontouchmove = function (e) {
                  return true;
                  
                }
            
            } else if($scope.isCartOpen){
                $scope.contentClass = "";
                $scope.cartOpenClass = "asdasd";
                $scope.bodyOpenModalClass = "";
                $scope.isCartOpen = false;
                $scope.closeFooter = "close-footer";
                document.ontouchmove = function (e) {
                  return true;
                  
                }

            }else {
                //Empty
            }


            $scope.cartCount = 0;

            $scope.cartProducts = cartProducts;
            basket.cartData.async(localStorage.cartId,localStorage.currencyCode).then(function(data){
                $scope.cartProducts.productsInCart = data.cartProducts;
                $scope.cartProducts.cartCount = data.cartCount;
                $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
                $scope.cartProducts.cartQty = data.cartQty;
                $scope.cartProducts.currencySymbol = data.currencySymbol;
            });

         });

        

        $scope.removeFromCart = function(el){
            basket.removeFromCart.async(localStorage.cartId,el.id).then(function(data){
                localStorage.cartId = data;

                basket.cartData.async(localStorage.cartId,localStorage.currencyCode).then(function(data){
                    $scope.cartProducts.productsInCart = data.cartProducts;
                    $scope.cartProducts.cartCount = data.cartCount;
                    $scope.cartProducts.cartTotalPrice = data.totalPrice.toFixed(2);
                    $scope.cartProducts.cartQty = data.cartQty;
                    $scope.cartProducts.currencySymbol = data.currencySymbol;
                });

               
            });
            
            var index = $scope.cartProducts.productsInCart.indexOf(el);
            $scope.cartProducts.productsInCart.splice(index, 1);
            $scope.cartCount = $scope.cartProducts.productsInCart.length;
            $scope.totalPrice = 0.00;
            for(var i = 0 ; i < $scope.cartProducts.productsInCart.length ; i++){
                $scope.totalPrice += $scope.cartProducts.productsInCart[i].price.toFixed(2);
            }

            
        };


        $scope.isCartOpen = false;
        $scope.cartOpenClass = "";

        //view filter elements
        var row1 =  angular.element( document.querySelector( '#div1' ) );
        if(localStorage.getItem("productGridType") === null){
            $scope.productGridType = "col-md-6 col-xs-6";
            $scope.activeRow2 = "active";
        } else {
            $scope.productGridType = localStorage.getItem('productGridType');


        }
         
        $scope.modalOpen = false;
        $scope.isModalOpen = false;

        
        
        $scope.openModal = function() {
            if ($scope.isModalOpen) {
            } else {

                if($location.path() === "/about" || $location.path() === "/service"){
                    $scope.contentClass = "move-right-content-no-fixed";
                    if($location.path() === "/service"){
                        var myDiv = document.getElementById('step1');
                        myDiv.scrollTop = 0;
                    }else {
                         var myDiv = document.getElementById('body');
                          myDiv.scrollTop = 0;
                       
                    }
                }else {
                   $scope.contentClass = "move-right-content-no-fixed"; 
                }
                $scope.isModalOpen = true;
                
                $scope.modalClass = "open";
                $scope.openSidemenu = "open-sidemenu";
                $scope.sidebar_footer_class = "open-modal-footer";
                $scope.closeFooter = "close-footer";
                // $scope.navbarOpenClass= "move-right-content-no-fixed";
                $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open ";
                $scope.sidemenuFooterOpen = "sidemenu-footer-open";
                document.ontouchmove = function (e) {
                  e.preventDefault();
                }
            }
        };

        $scope.goHome = function(path){

            if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
            } else {
                //empty
            }
            $location.path(path);
        };

        $scope.closeModal = function () {
            if($scope.isModalOpen){
                $scope.isModalOpen = false;
                $scope.bodyOpenModalClass = "";
                $scope.sidebar_footer_class = "close-modal-footer";
                $scope.contentClass = "close-main-container";
                $scope.modalClass="close-modal";
                $scope.closeFooter = "";
                $scope.openSidemenu = "";
                $scope.sidemenuFooterOpen = ""

                document.ontouchmove = function (e) {
                  return true;

                }
            
            } else if($scope.isCartOpen){
                openCartService.setCartOpen(false);
                $scope.contentClass = "";
                $scope.cartOpenClass = "";
                $scope.bodyOpenModalClass = "";
                $scope.closeFooter = "";
                $scope.isCartOpen = false;
                document.ontouchmove = function (e) {
                  return true;

                }
            }else {
                //Empty
            }
        };

        $scope.oneRowGrid = function(){
            if(!$(".catalog-product").hasClass('col-md-12 col-xs-12')){
                console.log("uso");
                 $scope.productGridType = localStorage.productGridType +  ' opacity-0';
                 $(".catalog-product").addClass(localStorage.productGridType +' opacity-0');
                $timeout(function(){
                    $scope.productGridType = 'col-md-12 col-xs-12';
                    $(".catalog-product").removeClass("col-md-6 col-xs-6");
                    $(".catalog-product").removeClass("col-md-4 col-xs-4");
                    $(".catalog-product").removeClass("opacity-0");
                    $(".catalog-product").addClass("col-md-12 col-xs-12");
                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
           
            //localStorage.setItem('productGridType',$scope.productGridType);
            $scope.oneRowActive = "active ";
            $scope.twoRowActive = "";
            $scope.threeRowActive = "";
        };


         $scope.oneAtATime = true;

          $scope.groups = [
            {
              title: 'Dynamic Group Header - 1',
              content: 'Dynamic Group Body - 1'
            },
            {
              title: 'Dynamic Group Header - 2',
              content: 'Dynamic Group Body - 2'
            }
          ];

          $scope.items = ['Item 1', 'Item 2', 'Item 3'];

          $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
          };

          $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
          };

        var productFilter = $("#productFilter");
        var singleOverlay = $('.single-overlay');
        $scope.showFilter = function(){
            if ($("#productFilter").hasClass('hide')) {

                //$scope.filterBtn = "filter-btn-clicked";  
                $("#productFilter").removeClass('hide');
                $('body').addClass('no-scroll lock-scroll');
                $("#productFilter").removeClass('hide');
                singleOverlay.addClass('show');

                document.ontouchmove = function(e) {
                    return true;
                }


            } else {
                $scope.filterBtn = "";
                $('body').removeClass('no-scroll lock-scroll');
                 $("#productFilter").addClass('hide');
                singleOverlay.removeClass('show');

                document.ontouchmove = function(e) {
                    return true;
                }

            }
        }

        
        $scope.twoRowGrid = function(){
            if(!$(".catalog-product").hasClass('col-md-6 col-xs-6')){
                $scope.productGridType = localStorage.productGridType +' opacity-0';
                $(".catalog-product").addClass(localStorage.productGridType +' opacity-0');
                $timeout(function(){
                    $scope.productGridType = 'col-md-6 col-xs-6';
                    $(".catalog-product").removeClass("col-md-4 col-xs-4");
                    $(".catalog-product").removeClass("col-md-12 col-xs-12");
                    $(".catalog-product").removeClass("opacity-0");
                     $(".catalog-product").addClass("col-md-6 col-xs-6");

                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
        
            
            $scope.oneRowActive = "";
            $scope.twoRowActive = "active";
            $scope.threeRowActive = "";
        };

        $scope.threeRowGrid = function(){
            if(!$(".catalog-product").hasClass('col-md-4 col-xs-6')){
                $(".catalog-product").addClass(localStorage.productGridType +' opacity-0');
                $scope.productGridType = localStorage.productGridType +' opacity-0';
                $timeout(function(){
                    $scope.productGridType = 'col-md-4 col-xs-6';
                     $(".catalog-product").removeClass("col-md-12 col-xs-12");
                     $(".catalog-product").removeClass("col-md-6 col-xs-6");
                     $(".catalog-product").removeClass("opacity-0");
                    $(".catalog-product").addClass("col-md-4 col-xs-6");

                    localStorage.setItem('productGridType',$scope.productGridType);
                },1000);
            }
            //localStorage.setItem('productGridType',$scope.productGridType);
            $scope.oneRowActive = "";
            $scope.twoRowActive = "";
            $scope.threeRowActive = "active";
        };


        var w = angular.element($window);
        w.bind('resize', function () {
            if($window.innerWidth < 990 && $scope.productGridType === 'col-md-12 col-xs-12'){
               //  console.log("radi");
               // $scope.productGridType = localStorage.productGridType +' opacity-0';
               //  $timeout(function(){
               //      $scope.productGridType = 'col-md-6 col-xs-6';
               //      localStorage.setItem('productGridType',$scope.productGridType);
               //  },1000);
               //  $scope.oneRowActive = "";
               //  $scope.twoRowActive = "active";
               //  $scope.threeRowActive = ""; 
            }


           // $scope.scrollPaneFilterClass = $(".accordio-container").height - 255;

        });

        switch($scope.productGridType) {
            case 'col-md-4 col-xs-6':
                $scope.oneRowActive = "";
                $scope.twoRowActive = "";
                $scope.threeRowActive = "active";
                break;
            case 'col-md-6 col-xs-6':
                $scope.oneRowActive = "";
                $scope.twoRowActive = "active";
                $scope.threeRowActive = "";
                break;
            case 'col-md-12 col-xs-12':
                $scope.oneRowActive = "active";
                $scope.twoRowActive = "";
                $scope.threeRowActive = "";
                break;
        }


        $scope.goToCart = function(){
            $location.path('/checkout/' + localStorage.cartId);
            $scope.closeModal();
        };

        $scope.openCart = function(){
            if($scope.isCartOpen === false){
                
                if($location.path() === "/about" || $location.path() === "/service"){
                    $scope.contentClass = "move-left-content-no-fixed";
                    if($location.path() === "/service"){
                        var myDiv = document.getElementById('step1');
                        myDiv.scrollTop = 0;
                    }else {
                         var myDiv = document.getElementById('body');
                          myDiv.scrollTop = 0;
                       
                    }
                }else {
                   $scope.contentClass = "move-left-content"; 
                }

                $scope.isCartOpen = true;
             
                $scope.cartOpenClass = "move-cart-left ";
                 $scope.bodyOpenModalClass = "no-scroll lock-scroll menu-open";
                  $scope.closeFooter = "close-footer";

                 //  document.ontouchmove = function (e) {
                 //    e.preventDefault();
                 // };

                 // var shoppingCart = document.getElementById("shoppingcart");
                 // shoppingcart.ontouchmove = function(e){
                 //    return true;
                 // };

            } else {
                //Empty
            }
        };

        $('.menu').hover(
            function () {
               $(this).find("span").addClass("show-menu-text");
            },
            function () {
               $(this).find("span").removeClass("show-menu-text");
            }
        );
        

        $('.cartcount').hover(
            function () {
               $(this).find("span").addClass("show-bag-text");
            },
            function () {
               $(this).find("span").removeClass("show-bag-text");
            }
        );


         angular.element($window).bind("scroll", function() {
            if($(window).scrollTop()  >  100 && $(window).innerWidth() <= 990  ){
               if($("#navBar-home").hasClass("shrink") && $scope.currentState === "views/home_page.html"){

               } else if(!$("#navBar-home").hasClass("shrink") && $scope.currentState === "views/home_page.html") {
                    $("#navBar-home").addClass("shrink");
                   // $("#filterMenu-home").removeClass("filter-menu");
                    $("#filterMenu-home").addClass("filter-menu-wide");
               }
                
            } else if($scope.currentState === "views/home_page.html" ) {

               if($("#navBar-home").hasClass("shrink")){
                    $("#navBar-home").removeClass("shrink");
                    $("#filterMenu-home").removeClass("filter-menu-wide");
                     //$("#filterMenu-home").addClass("filter-menu");
               } else {

               }

            }
         });

       
        
    }]);



})(window.moaApp);