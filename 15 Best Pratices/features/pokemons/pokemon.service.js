(function () {
    'use strict';

    angular
        .module('myApp')
        .service('myService', myService);

    function myService($http, $q) {

        var Service = function () {
            this.list = list;
            this.find = find;
            this.create = create;
            this.update = update;
            this.remove = remove;
        };

        return new Service();

        function list() {
            var def = $q.defer();

            $http.get("http://localhost:3000/pokemons")
                .then(function (resp) {
                    def.resolve(resp.data);
                }, function () {
                    def.reject("Erro! Não foi possível carregar os pokémons.");
                });

            return def.promise;
        }

        function find(id) {
            var def = $q.defer();

            $http.get("http://localhost:3000/pokemons/" + id)
                .then(function (resp) {
                    def.resolve(resp.data);
                }, function () {
                    def.reject("Erro! Não foi possível carregar o pokémon.");
                });

            return def.promise;
        }

        function create(pokemon) {
            var def = $q.defer();

            $http.post("http://localhost:3000/pokemons", pokemon)
                .then(function (resp) {
                    def.resolve(resp.data);
                }, function () {
                    def.reject("Erro! Não foi possível inserir o pokémon.");
                });

            return def.promise;
        }

        function update(id, pokemon) {
            var def = $q.defer();

            $http.put("http://localhost:3000/pokemons/" + id, pokemon)
                .then(function (resp) {
                    def.resolve("Pokémon editado com sucesso");
                }, function () {
                    def.reject("Erro! Não foi possível editar o pokémon.");
                });

            return def.promise;
        }

        function remove(id) {
            var def = $q.defer();

            $http.delete("http://localhost:3000/pokemons/" + id)
                .then(function (resp) {
                    def.resolve("Pokémon removido com sucesso");
                }, function () {
                    def.reject("Erro! Não foi possível remover o pokémon.");
                });

            return def.promise;
        }

    }
})();