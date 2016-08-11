var app = require('./app_config');
var pokemonController = require('./pokemonController');
var validator = require('validator');

app.get('/', function (req, res) {
    res.end('Servidor On.');
});

app.get('/pokemons', function (req, res) {
    pokemonController.list(function (result) {
        res.json(result);
    });
});

app.get('/pokemons/:id', function (req, res) {
    var id = validator.trim(validator.escape(req.param('id')));

    pokemonController.find(id, function (result) {
        res.json(result);
    });
});

app.post('/pokemons', function (req, res) {
    var name = validator.trim(validator.escape(req.param('name')));
    var imageUrl = validator.trim(validator.escape(req.param('imageUrl')));

    pokemonController.save(name, imageUrl, function (result) {
        res.json(result);
    });
});

app.put('/pokemons/:id', function (req, res) {
    var name = validator.trim(validator.escape(req.param('name')));
    var imageUrl = validator.trim(validator.escape(req.param('imageUrl')));

    var id = validator.trim(validator.escape(req.param('id')));

    pokemonController.update(id, name, imageUrl, function (result) {
        res.json(result);
    });
});

app.delete('/pokemons/:id', function (req, res) {
    var id = validator.trim(validator.escape(req.param('id')));

    pokemonController.delete(id, function (result) {
        res.json(result);
    });
});