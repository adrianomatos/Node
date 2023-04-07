var express = require('express');
var app = express();

// Inclusão de Arquivos externos
app.use(express.static(__dirname + '/public'));

// Rota
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pagina.html');
})

// Servidor
app.listen(8080);