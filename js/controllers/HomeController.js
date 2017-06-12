"use strict";
app.controller("HomeController", function($scope, $location) {

 $scope.goToAbout = () => {
        $location.url('/about');
    };

});
