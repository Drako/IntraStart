'use strict';

var express = require('express');
var router = express.Router();
var navigation = require('./navigation');

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Intra'
    });
});

router.use('/navigation', navigation);

module.exports = router;
