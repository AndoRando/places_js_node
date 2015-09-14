var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile('index.html', {root: __dirname} );
});


var http = require("http");
var server = http.createServer(app)

server.listen(3000);
