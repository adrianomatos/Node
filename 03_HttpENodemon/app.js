var http = require('http');

http.createServer(function (req, res) {
    res.write('Node.js com Ralf Lima e NODEMON');
    res.end();
}).listen(8080);