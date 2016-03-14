'use strict';
/* global __dirname */

var path = require('path');
var process = require('process');
var env = process.env.NODE_ENV || 'development';

var config = require(path.join(__dirname, env));
config.environment = env;

module.exports = config;
