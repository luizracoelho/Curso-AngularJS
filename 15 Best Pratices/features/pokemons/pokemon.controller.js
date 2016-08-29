(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('myCtrl', myCtrl);

    function myCtrl($routeParams, myService) {
        var vm = this;

        vm.selectPokemon = function (id) {
            vm.pokemonSelected = vm.pokemons.find(function (pokemon) {
                return pokemon._id == id;
            });
        }

        vm.deselectPokemon = function (id) {
            vm.pokemonSelected = null;
        }

        vm.list = function () {
            myService.list()
                .then(function (pokemons) {
                    vm.deselectPokemon();
                    vm.pokemons = pokemons;
                }, function (err) {
                    vm.error = err;
                });
        }

        vm.find = function () {
            myService.find($routeParams.id)
                .then(function (pokemon) {
                    vm.pokemon = pokemon;
                }, function (err) {
                    vm.error = err;
                });
        }

        vm.createPokemon = function () {
            myService.create(vm.pokemon)
                .then(function (resp) {
                    window.location = "#/";
                }, function (err) {
                    vm.error = err;
                });
        }

        vm.updatePokemon = function () {
            myService.update($routeParams.id, vm.pokemon)
                .then(function (resp) {
                    window.location = "#/";
                }, function (err) {
                    vm.error = err;
                });
        }

        vm.removePokemon = function () {
            myService.remove($routeParams.id)
                .then(function (resp) {
                    window.location = "#/";
                }, function (err) {
                    vm.error = err;
                });
        }
    }
})();