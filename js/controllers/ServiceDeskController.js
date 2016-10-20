(function($moa) {

    "use strict";

    $moa.controller('ServiceDeskController', ['$scope', '$timeout',

    function serviceDeskController($scope, $timeout) {

        document.addEventListener('touchmove', function(event){
            return true;
        });

        //to Hide
        $scope.showContactUs = true;
        $scope.showTermsAndConditions = true;
        $scope.showReturnExchange = true;
        $scope.showShippingInformation = true;
        $scope.shoppingAtEtq = true;
        $scope.showSiziingInformation = true;
        
        //contact Us
        $scope.showCustomCare = true;
        $scope.showWholesaleShowroom = true;
        $scope.showPressAndMarketing = true;
        $scope.showOfficesAdress = true;
        $scope.showJobs = true;

        // terms and conditions
        $scope.showTermsAndConditionsEl = true;
        $scope.showPrivacyStatement = true;
        $scope.showDisclaimer = true;

        //Returns & Exchange
        $scope.showReturnsPolicy = true;
        $scope.showInternationalReturns = true;
        $scope.showIncorrectOrders = true;

        //shipping information
        $scope.showShipping = true;
        $scope.showDeliveryTimes = true;
        $scope.showTrackingInformation = true;
        $scope.showShippingFees = true;
        $scope.showForwarder = true;
        $scope.showInsurance = true;
        $scope.showInccorectOrders2 = true;
        $scope.showAdressPolicy = true;
        $scope.showShipToLocation = true;
        $scope.showCustoms = true;

        //shopping at Etq
        $scope.showPlaceAnOrder = true;
        $scope.showCheckout = true;
        $scope.showPayment = true;
        $scope.showOrderConfirmation = true;
        $scope.showOrderStatus = true;
        $scope.showOrderChanges = true;
        $scope.showSeasonSales = true;

        //Sizing information
        $scope.showFootwear = true;

        var step1 = $("#animateContainer");

        $scope.slideInElement = function(dataId){

            switch(dataId){
                case 'contact-us':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = false;
                    $scope.showTermsAndConditions = true;
                    $scope.showReturnExchange = true;
                    $scope.showShippingInformation = true;
                    $scope.shoppingAtEtq = true;
                    $scope.showSiziingInformation = true;
                    step1.addClass('active');
                    break;
                case 'general-terms-conditions':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = true;
                    $scope.showTermsAndConditions = false;
                    $scope.showReturnExchange = true;
                    $scope.showShippingInformation = true;
                    $scope.shoppingAtEtq = true;
                    $scope.showSiziingInformation = true;
                    step1.addClass('active');
                    break;
                case 'returns-exchanges':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = true;
                    $scope.showTermsAndConditions = true;
                    $scope.showReturnExchange = false;
                    $scope.showShippingInformation = true;
                    $scope.shoppingAtEtq = true;
                    $scope.showSiziingInformation = true;
                    step1.addClass('active');
                    break;
                case  'shipping-information':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = true;
                    $scope.showTermsAndConditions = true;
                    $scope.showReturnExchange = true;
                    $scope.showShippingInformation = false;
                    $scope.shoppingAtEtq = true;
                    $scope.showSiziingInformation = true; 
                    step1.addClass('active');
                    break;
                case 'shopping-at-etq':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = true;
                    $scope.showTermsAndConditions = true;
                    $scope.showReturnExchange = true;
                    $scope.showShippingInformation = true;
                    $scope.shoppingAtEtq = false;
                    $scope.showSiziingInformation = true;
                    step1.addClass('active');
                    break;
                case 'sizing-information':
                    step1.removeClass('active');
                    hideAllInnerSections();
                    $scope.showContactUs = true;
                    $scope.showTermsAndConditions = true;
                    $scope.showReturnExchange = true;
                    $scope.showShippingInformation = true;
                    $scope.shoppingAtEtq = true;
                    $scope.showSiziingInformation = false;
                    step1.addClass('active');
                    break;
            }
        };

        //:D
        $scope.slideOutElement = function(dataId){
            switch(dataId){
                case 'contact-us':
                    step1.removeClass('active');
                    $timeout(function(){
                        $scope.showContactUs = true;
                    },500)
                    break;
                case 'general-terms-conditions':
                    step1.removeClass('active');
                    $timeout(function(){
                        $scope.showTermsAndConditions = true;
                    },500);
                    break;
                case 'returns-exchanges':
                    step1.removeClass('active');
                     $timeout(function(){
                        $scope.showReturnExchange = true;
                    },500);
                    break;
                case  'shipping-information':
                    step1.removeClass('active');
                    $timeout(function(){
                        $scope.showShippingInformation = true;
                    },500);
                    break;
                case 'shopping-at-etq':
                    step1.removeClass('active');
                    $timeout(function(){
                         $scope.shoppingAtEtq = true;
                    },500);
                    break;
                case 'sizing-information':
                    step1.removeClass('active');
                    $timeout(function(){
                        $scope.showSiziingInformation = true;
                    },500);
                    break;
            }
        }

        $scope.slideElementSection = function(dataId,dataQid){
            switch(dataId){
                case 'contact-us':
                    
                    switch(dataQid){
                        case 'customer-care':
                           
                            $scope.showCustomCare = false;
                             $timeout(function(){
                                $scope.showWholesaleShowroom = true;
                                $scope.showPressAndMarketing = true;
                                $scope.showOfficesAdress = true;
                                $scope.showJobs = true;

                            },500);
                            break;
                        case 'wholesale-showroom':
                             
                            $scope.showWholesaleShowroom = false;
                            $timeout(function(){
                                $scope.showCustomCare = true;
                                $scope.showPressAndMarketing = true;
                                $scope.showOfficesAdress = true;
                                $scope.showJobs = true;
                            },500);
                            
                            break;
                        case 'press-marketing':
                            
                            $scope.showPressAndMarketing = false;
                            $timeout(function(){
                                $scope.showCustomCare = true;
                                $scope.showWholesaleShowroom = true;
                                $scope.showOfficesAdress = true;
                                $scope.showJobs = true;
                            },500);
                            
                            break;
                        case 'office-address':
                           
                            $scope.showOfficesAdress = false;
                             $timeout(function(){
                                $scope.showCustomCare = true;
                                $scope.showWholesaleShowroom = true;
                                $scope.showPressAndMarketing = true;
                                $scope.showJobs = true;
                            },500);
                            
                            break;
                        case 'jobs':
                           
                            $scope.showJobs = false;
                             $timeout(function(){
                                $scope.showCustomCare = true;
                                $scope.showWholesaleShowroom = true;
                                $scope.showPressAndMarketing = true;
                                $scope.showOfficesAdress = true;
                            },500);
                            break;
                    }

                    break;
                case 'general-terms-conditions':
                    
                    switch(dataQid){
                        case 'terms-conditions':
                            $scope.showTermsAndConditionsEl = false;
                            $timeout(function(){
                                $scope.showPrivacyStatement = true;
                                $scope.showDisclaimer = true;
                            },500);
                            break;
                        case 'privacy-statement':
                            $scope.showPrivacyStatement = false;
                            $timeout(function(){
                                $scope.showTermsAndConditionsEl = true;
                                $scope.showDisclaimer = true;
                            },500);
                            break;
                        case 'disclaimer':
                            $scope.showDisclaimer = false;
                            $timeout(function(){
                                $scope.showTermsAndConditionsEl = true;
                                $scope.showPrivacyStatement = true;
                            },500);
                            break;
                    }

                    break;
                case 'returns-exchanges':
                    
                    switch(dataQid){
                        case 'returns-policy':
                            $scope.showReturnsPolicy = false;
                            $timeout(function(){
                                $scope.showInternationalReturns = true;
                                $scope.showIncorrectOrders = true;
                            },500);
                            break;
                        case 'international-returns':
                            $scope.showInternationalReturns = false;
                            $timeout(function(){
                                $scope.showReturnsPolicy = true;
                                $scope.showIncorrectOrders = true;
                            },500);
                            break;
                        case 'incorrect-orders':
                            $scope.showIncorrectOrders = false;
                            $timeout(function(){
                                $scope.showInternationalReturns = true;
                                $scope.showReturnsPolicy = true;
                            },500);
                            break;
                    }

                    break;
                case  'shipping-information':
                    
                    switch(dataQid){
                        case 'shipping':
                            $scope.showShipping = false;
                            $timeout(function(){
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showShippingFees = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'delivery-times':
                            $scope.showDeliveryTimes = false;
                            $timeout(function(){
                                $scope.showShipping = true;
                                $scope.showTrackingInformation = true;
                                $scope.showShippingFees = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'tracking-information':
                            $scope.showTrackingInformation = false;
                            $timeout(function(){
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showShippingFees = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'shipping-fees':
                            $scope.showShippingFees = false;
                            $timeout(function(){
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'forwarder':
                            $scope.showForwarder = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'insurance':
                            $scope.showInsurance = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'incorrect-orders-2':
                            $scope.showInccorectOrders2 = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'wrong-address-non-received-items-and-returns':
                            $scope.showAdressPolicy = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showShipToLocation = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'ship-to-locations':
                            $scope.showShipToLocation = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showCustoms = true;
                            },500);
                            break;
                        case 'customs':
                            $scope.showCustoms = false;
                            $timeout(function(){
                                $scope.showShippingFees = true;
                                $scope.showShipping = true;
                                $scope.showDeliveryTimes = true;
                                $scope.showTrackingInformation = true;
                                $scope.showForwarder = true;
                                $scope.showInsurance = true;
                                $scope.showInccorectOrders2 = true;
                                $scope.showAdressPolicy = true;
                                $scope.showShipToLocation = true;
                            },500);
                            break;
                    }

                    break;
                case 'shopping-at-etq':
                   
                    switch(dataQid){
                        case 'place-an-order':
                            $scope.showPlaceAnOrder = false;
                            $timeout(function(){
                                $scope.showCheckout = true;
                                $scope.showPayment = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderStatus = true;
                                $scope.showOrderChanges = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'checkout':
                            $scope.showCheckout = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showPayment = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderStatus = true;
                                $scope.showOrderChanges = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'payment':
                            $scope.showPayment = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showCheckout = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderStatus = true;
                                $scope.showOrderChanges = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'order-confirmation':
                            $scope.showOrderConfirmation = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showCheckout = true;
                                $scope.showPayment = true;
                                $scope.showOrderStatus = true;
                                $scope.showOrderChanges = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'order-status':
                            $scope.showOrderStatus = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showCheckout = true;
                                $scope.showPayment = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderChanges = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'order-changes-and-cancellations':
                            $scope.showOrderChanges = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showCheckout = true;
                                $scope.showPayment = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderStatus = true;
                                $scope.showSeasonSales = true;
                            },500);
                            break;
                        case 'seasonal-sales-new-arrivals-and-promotions':
                            $scope.showSeasonSales = false;
                            $timeout(function(){
                                $scope.showPlaceAnOrder = true;
                                $scope.showCheckout = true;
                                $scope.showPayment = true;
                                $scope.showOrderConfirmation = true;
                                $scope.showOrderStatus = true;
                                $scope.showOrderChanges = true;
                            },500);
                            break;
                    }

                    break;
                case 'sizing-information':
                    
                    switch(dataQid){
                        case 'sizing-information':
                            $timeout(function(){
                                $scope.showFootwear = false;
                            },500);
                            break;
                    }   

                    break;
            }
        };


        $scope.slideOutInnerEl = function(dataQid){
                    
            switch(dataQid){
                case 'customer-care':
                    $scope.showCustomCare = true;
                    break;
                case 'wholesale-showroom':
                    $scope.showWholesaleShowroom = true;
                    break;
                case 'press-marketing':
                    
                    $scope.showPressAndMarketing = true;
                    break;
                case 'office-address':
                   
                    $scope.showOfficesAdress = true;
                    break;
                case 'jobs':
                   
                    $scope.showJobs = true;
                    break;
                    
                case 'terms-conditions':
                    $scope.showTermsAndConditionsEl = true;
                    break;
                case 'privacy-statement':
                    $scope.showPrivacyStatement = true;
                    break;
                case 'disclaimer':
                    $scope.showDisclaimer = true;
                    break;
                    
                case 'returns-policy':
                    $scope.showReturnsPolicy = true;
                    break;
                case 'international-returns':
                    $scope.showInternationalReturns = true;
                    break;
                case 'incorrect-orders':
                    $scope.showIncorrectOrders = true;
                    break;
                    
                case 'shipping':
                    $scope.showShipping = true;
                    break;
                case 'delivery-times':
                    $scope.showDeliveryTimes = true;
                    break;
                case 'tracking-information':
                    $scope.showTrackingInformation = true;
                    break;
                case 'shipping-fees':
                    $scope.showShippingFees = true;
                    break;
                case 'forwarder':
                    $scope.showForwarder = true;
                    break;
                case 'insurance':
                    $scope.showInsurance = true;
                    break;
                case 'incorrect-orders-2':
                    $scope.showInccorectOrders2 = true;
                    break;
                case 'wrong-address-non-received-items-and-returns':
                    $scope.showAdressPolicy = true;
                    break;
                case 'ship-to-locations':
                    $scope.showShipToLocation = true;
                    break;
                case 'customs':
                    $scope.showCustoms = true;
                    break;

                case 'place-an-order':
                    $scope.showPlaceAnOrder = true;
                    break;
                case 'checkout':
                    $scope.showCheckout = true;
                    break;
                case 'payment':
                    $scope.showPayment = true;
                    break;
                case 'order-confirmation':
                    $scope.showOrderConfirmation = true;
                    break;
                case 'order-status':
                    $scope.showOrderStatus = true;
                    break;
                case 'order-changes-and-cancellations':
                    $scope.showOrderChanges = true;
                    break;
                case 'seasonal-sales-new-arrivals-and-promotions':
                    $scope.showSeasonSales = true;
                    break;
                case 'sizing-information':

                    $scope.showFootwear = true;
                    break;
            }
        };

        function hideAllInnerSections(){
            //contact Us
            $scope.showCustomCare = true;
            $scope.showWholesaleShowroom = true;
            $scope.showPressAndMarketing = true;
            $scope.showOfficesAdress = true;
            $scope.showJobs = true;

            // terms and conditions
            $scope.showTermsAndConditionsEl = true;
            $scope.showPrivacyStatement = true;
            $scope.showDisclaimer = true;

            //Returns & Exchange
            $scope.showReturnsPolicy = true;
            $scope.showInternationalReturns = true;
            $scope.showIncorrectOrders = true;

            //shipping information
            $scope.showShipping = true;
            $scope.showDeliveryTimes = true;
            $scope.showTrackingInformation = true;
            $scope.showShippingFees = true;
            $scope.showForwarder = true;
            $scope.showInsurance = true;
            $scope.showInccorectOrders2 = true;
            $scope.showAdressPolicy = true;
            $scope.showShipToLocation = true;
            $scope.showCustoms = true;

            //shopping at Etq
            $scope.showPlaceAnOrder = true;
            $scope.showCheckout = true;
            $scope.showPayment = true;
            $scope.showOrderConfirmation = true;
            $scope.showOrderStatus = true;
            $scope.showOrderChanges = true;
            $scope.showSeasonSales = true;

            //Sizing information
            $scope.showFootwear = true;
        }
      
        
    }]);

})(window.moaApp);