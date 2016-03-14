'use strict';
/* global __dirname */

var path = require('path');
var express = require('express');
var app = express();
var config = require('../config');
var bodyParser = require('body-parser');

if (config.environment === 'development') {
    app.locals.pretty = true;
}

app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ 'type': 'application/vnd.api+json' }));

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../views'));

var routes = require('../routes');
app.use('/', routes);

app.listen(config.port, config.host, 5, function() {
    console.log('Server listening on [' + config.host + ']:' + config.port + '...');
});

