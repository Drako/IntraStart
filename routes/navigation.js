'use strict';

var express = require('express');
var router = express.Router();

// could be read from a json file or dynamically determined by inspecting
// arbitrary sources
var menu = [
    {
        name: 'Search engines',
        entries: [
            { title: 'DuckDuckGo', href: 'https://duckduckgo.com' },
            { title: 'Google', href: 'https://www.google.com' },
            { title: 'YAHOO!', href: 'https://www.yahoo.com' },
            { title: 'Bing', href: 'https://www.bing.com' }
        ]
    },
    {
        name: 'Social networks',
        entries: [
            { title: 'diaspora*', href: 'https://www.joindiaspora.com' },
            { title: 'Google+', href: 'https://plus.google.com' },
            { title: 'Facebook', href: 'https://www.facebook.com' }
        ]
    }
];

router.get('/', function(req, res) {
    res.json(menu);
});

module.exports = router;
