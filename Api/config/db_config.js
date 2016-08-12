var mongoose = require('mongoose');

var db_string = 'mongodb://127.0.0.1/curso_angularjs';

mongoose.connect(db_string, function (error, res) {
    if (error)
        console.log("Não foi possível se conectar a: " + db_string);
    else
        console.log("Conectado com sucesso a: " + db_string);
});