(function($moa, $localStorage) {

    "use strict";

    /**
     * @controller AccountController
     * @author Adam Timberlake
     * @module Moa
     */
    $moa.controller('AccountController', ['$scope', '$location' ,

    function accountController($scope, $location) {

        if($location.path() === '/'){
            $scope.side1 = 'active-modal-link';
            $scope.side2 = '';
            $scope.side3 = '';
            $scope.side4 = '';
        }

        $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
            var path = $location.path();

            //EDIT: cope with other path
            if(path === '/lookbook'){
                $scope.lookbook = 'active-modal-link';
                $scope.collection = '';
                $scope.about = '';
                $scope.service = '';
            } 

            console.log(path);

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

           // $scope.templateUrl = (path==='/' || path==='/') ? 'template/header4signin.html' : 'template/header4normal.html' ;
        });

        $scope.goHome = function(path){
            $location.path(path);
            console.log("Home");
        };
    }]);

})(window.moaApp, window.localStorage);