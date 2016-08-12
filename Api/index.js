//Configurações
var app = require('./config/app_config');
var db = require('./config/db_config');
var routes = require('./config/route_config');

//Mensgaem principal
app.get('/', function (req, res) {
    res.end('Bem vindo a Api do curso de angularJS.');
});