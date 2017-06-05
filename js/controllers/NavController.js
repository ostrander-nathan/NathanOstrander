"use strict";

app.controller("NavController", function($scope, $location) {

    $scope.goToHome = () => {
        $location.url('/home');
    };

    $scope.goToPortfolio = () => {
        $location.url('/portfolio');
    };
    $scope.goToAbout = () => {
        $location.url('/about');
    };

    $scope.goToContact = () => {
        $location.url('/contact');
    };

});
