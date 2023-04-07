var express = require('express');
var nf = require('node-fetch');

var app = express();

app.get("/", function (req, res) {
  nf("https://jsonplaceholder.typicode.com/users")
    .then((resposta) => resposta.json())
    .then((resposta) => console.table(resposta));

  res.end();
});

app.listen(8080);
