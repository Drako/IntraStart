'use strict';

var express = require('express');
var router = express.Router();

var menu = [
    {
        name: 'Search engines',
        entries: [
            { title: 'DuckDuckGo', href: 'https://duckduckgo.com' },
            { title: 'Google', href: 'https://www.google.com' },
            { title: 'YAHOO!', href: 'https://www.yahoo.com' },
            { title: 'Bing', href: 'https://www.bing.com' }
        ]
    }
];

router.get('/', function(req, res) {
    res.json(menu);
});

module.exports = router;
