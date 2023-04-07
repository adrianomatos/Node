var express = require('express');
var app = express();

var exphbs = require('express-handlebars');

// Template Principal
app.engine('handlebars', exphbs({ defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// ROTAS
app.get('/', function (req, res) {

    let pessoas =[
        {"nome":"Ralf", "idade":37},
        {"nome":"Rebeca", "idade":34},
        {"nome":"Junior", "idade":14}
    ]
    res.render('inicio', {gostandoDeNode:true, dados:pessoas});
});

app.get('/sobre', function (req, res) {
    res.render('sobre');
});

// Servidor
app.listen(8080);