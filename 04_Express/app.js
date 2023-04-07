var express = require ('express');
var app = express();

// Rota
app.get('/', function(req, res){
    res.write('Utilizando Express');
    res.send();
})

// Servidor
app.listen(8080);