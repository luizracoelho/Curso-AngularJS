var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: String,
    type: String,
    imageUrl: String
});

module.exports = mongoose.model('Pokemon', PokemonSchema);