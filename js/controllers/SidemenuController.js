(function($moa, $localStorage) {

    "use strict";

    $moa.controller('SidemenuController', ['$scope', '$location' , 'locationService' ,

    function accountController($scope, $location ,locationService) {

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
            console.log("Home");
        };
    }]);

})(window.moaApp, window.localStorage);