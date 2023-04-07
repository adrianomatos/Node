var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); //JSON
app.use(bodyParser.urlencoded({ extended: false })); //POST

// Inclusão de Arquivos externos
// app.use(express.static(__dirname + '/public'));

// ROTAS
// Página de origem
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Página de destino
app.post("/receber", function (req, res) {
  res.write("Nome informado: " + req.body.nome);
  res.end();
});

// Servidor
app.listen(8080);
