var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname));

var port = 4000;

var server = http.createServer( app );
server.listen( port );
