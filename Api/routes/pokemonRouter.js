var express = require('express');
var router = express.Router();
var pokemonController = require('../controllers/pokemonController');

router.get('/', function (req, res) {
    pokemonController.list(function (result) {
        res.json(result);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    pokemonController.find(id, function (result) {
        res.json(result);
    });
});

router.post('/', function (req, res) {
    var name = req.params.name;
    var imageUrl = req.params.imageUrl;

    pokemonController.save(name, imageUrl, function (result) {
        res.json(result);
    });
});

router.put('/:id', function (req, res) {
    var name = req.params.name;
    var imageUrl = req.params.imageUrl;

    var id = req.params.id;

    pokemonController.update(id, name, imageUrl, function (result) {
        res.json(result);
    });
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;

    pokemonController.delete(id, function (result) {
        res.json(result);
    });
});

module.exports = router;