import express = require('express');
import routes = require('./app/routes/indexRoutes');
import posicionesGPS = require('./app/routes/posicionGPSRoutes');
import http = require('http');
import path = require('path');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');
import request = require('request');

mongoose.connect('localhost', 'posicionesGPS');

var app = express();

// all environments
//app.set('port', process.env.PORT || 3000);
app.set('port', '3000');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(bodyParser.json());
//app.use(express.json());
//app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

/*
app.configure(function () {
    app.use(express.bodyParser());
    app.use(app.router);
});
*/

//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

import stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.post('/posicionesGPS', posicionesGPS.create);
//app.get('/posicionesGPS/:id', posicionesGPS.read);
app.del('/posicionesGPS', posicionesGPS.eliminarPosicionesGPS);
app.get('/posicionesGPS', posicionesGPS.obtenerPosicionesGPS);
app.post('/posicionesGPS/:linea', posicionesGPS.cargarPosicionesGPS);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
