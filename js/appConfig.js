"use strict";

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partials/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: '../partials/about.html',
            controller: 'AboutController'
        })
        .when('/portfolio', {
            templateUrl: '../partials/portfolio.html',
            controller: 'PortfolioController'
        })
        .when('/contact', {
            templateUrl: '../partials/contact.html',
            controller: 'ContactController'
        })
        .otherwise('/');
});
