(function($moa) {

    "use strict";

    
    $moa.directive('onScrollDirective', [function ($window) {
    	return {
    		restrict: 'A',
    		link: function (scope, element, attrs) {
    			angular.element($window).bind("scroll", function() {
		            if (this.pageYOffset >= 100) {
		                 scope.boolChangeClass = true;
		                 console.log('Scrolled below header.');
		             } else {
		                 scope.boolChangeClass = false;
		                 console.log('Header is in view.');
		             }
		            scope.$apply();
		        });
    		}
    	};
    }]);

})(window.moaApp);