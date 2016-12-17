(function($moa) {

    "use strict";

    
    $moa.directive('basicClick', [function ($window) {
    	return {
    		compile: function(elem, attr) {
				var fn = $parse(attr.basicClick);
					return function(scope, elem) {
						elem.on(‘click’, function(e) {
							fn(scope, {$event: e});
					scope.$apply();
					});
				};
				}
			};
    }]);

})(window.moaApp);