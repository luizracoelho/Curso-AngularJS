var db_string = 'mongodb://127.0.0.1/curso_angularjs';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco.'));

db.once('open', function () {
    var pokemonSchema = mongoose.Schema({
        name: String,
        imageUrl: String
    });

    module.exports.Pokemon = mongoose.model('Pokemon', pokemonSchema);
});