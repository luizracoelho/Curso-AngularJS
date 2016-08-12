var app = require('./app_config');

//Rotas
var pokemons = require('../routes/pokemonRouter');
app.use('/pokemons', pokemons);