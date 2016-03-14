'use strict';

var express = require('express');
var router = express.Router();

router.get(['/', '/page/*'], function(req, res) {
    res.render('index', {
        title: 'Intra'
    });
});

module.exports = router;
