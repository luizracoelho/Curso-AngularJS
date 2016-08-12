var Pokemon = require('../models/pokemon');

module.exports.list = function (callback) {
    Pokemon.find({}, function (error, pokemons) {
        if (error) {
            callback({
                error: 'Não foi possível retornar os pokémons'
            });
        } else {
            callback(pokemons);
        }
    });
};

module.exports.find = function (id, callback) {
    Pokemon.findById(id, function (error, pokemon) {
        if (error) {
            callback({
                error: 'Não foi possível retornar o pokémon'
            });
        } else {
            callback(pokemon);
        }
    });
};

module.exports.save = function (name, imageUrl, callback) {
    new Pokemon({
        'name': name,
        'imageUrl': imageUrl
    }).save(function (error, pokemon) {
        if (error) {
            callback({
                error: 'Não foi possível salvar o pokémon'
            });
        } else {
            callback(pokemon);
        }
    });
};

module.exports.update = function (id, name, imageUrl, callback) {
    Pokemon.findById(id, function (error, pokemon) {
        if (name) {
            pokemon.name = name;
        }
        if (imageUrl) {
            pokemon.imageUrl = imageUrl;
        }

        pokemon.save(function (error, pokemon) {
            if (error) {
                callback({
                    error: 'Não foi possível salvar o pokémon'
                });
            } else {
                callback(pokemon);
            }
        });
    });
};

module.exports.delete = function (id, callback) {
    Pokemon.findById(id, function (error, pokemon) {
        if (error) {
            callback({
                error: 'Não foi possível retornar o pokémon'
            });
        } else {
            pokemon.remove(function () {
                if (!error) {
                    callback({
                        response: 'Pokémon excluído com sucesso'
                    })
                }
            });
        }
    });
};