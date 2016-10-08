(function($moa, $localStorage) {

    "use strict";

    $moa.controller('SidemenuController', ['$scope', '$location'  ,

    function accountController($scope, $location ) {

        function changeOnLocation(){
            var path = $location.path();

           
            if(path === '/lookbook'){
                $scope.lookbook = 'active-modal-link';
                $scope.collection = '';
                $scope.about = '';
                $scope.service = '';
            } 


            if(path === '/'){
                 $scope.collection = 'active-modal-link';
                $scope.lookbook = '';
                $scope.about = '';
                $scope.service = '';

            }

            if(path == '/about'){
                $scope.collection = '';
                $scope.lookbook = '';
                $scope.about = 'active-modal-link';
                $scope.service = '';
            }

            if(path == '/service'){
                $scope.collection = '';
                $scope.lookbook = '';
                $scope.about = '';
                $scope.service = 'active-modal-link';
            }
        };
        

        changeOnLocation();

        $scope.$on('$locationChangeSuccess', function() {
            changeOnLocation();
        });

        $scope.goHome = function(path){
            $location.path(path);
        };
    }]);

})(window.moaApp, window.localStorage);