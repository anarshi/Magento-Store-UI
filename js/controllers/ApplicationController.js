(function($moa) {

    "use strict";

    $moa.controller('ApplicationController', ['$rootScope', '$scope'  ,  '$route','$location'
        , '$http' ,'$timeout', '$window'
        ,'basket',  'deviceDetector' , 'cartProducts','openCartService' , '$state', '$mdSidenav' , '$log' ,
        '$mdComponentRegistry' ,
        function applicationController($rootScope, $scope , $route  ,  $location , $http , $timeout
            , $window ,basket ,deviceDetector ,cartProducts,openCartService , $state , $mdSidenav, $log, $mdComponentRegistry) {


            document.addEventListener("ontouchmove" , function(event){
                event.stopPropagation();
            });

            $scope.isOpenCategoryFilter = false;
            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.toggleRight = buildToggler('right');

            document.ontouchmove = function (e) {
                return true;

            };


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


            $scope.isLoaded = true;

            $scope.$watch(
                function(){
                    return openCartService.getCartOpen();
                },

                function(newValue , oldValue){
                    if(newValue === true){

                        //openCart on item added to cart
                        document.ontouchmove = function(e){
                            e.preventDefault();
                        };
                        $scope.closeFooter = "close-footer";
                    } else {

                        //close cart and set to false
                        document.ontouchmove = function(){
                            return true;
                        }
                    }
                }
                ,true);

            $scope.$on('$locationChangeSuccess', function() {

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
                    // document.ontouchmove = function (e) {
                    //     return true;
                    //
                    // }
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



            $scope.goToCart = function(){
                $location.path('/checkout/' + localStorage.cartId);
                //close rightside menu
            };



        }]);



})(window.moaApp);