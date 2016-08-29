(function () {
    'use strict';

    angular
        .module('myApp')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'features/pokemons/views/list.html',
                controller: 'myCtrl'
            })
            .when('/criar', {
                templateUrl: 'features/pokemons/views/create.html',
                controller: 'myCtrl'
            })
            .when('/editar/:id', {
                templateUrl: 'features/pokemons/views/edit.html',
                controller: 'myCtrl'
            })
            .when('/remover/:id', {
                templateUrl: 'features/pokemons/views/remove.html',
                controller: 'myCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();