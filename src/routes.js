var SASSProcessor = require('../compilers/sass-compiler.js');
var CoffeeProcessor = require('../compilers/coffee-compiler.js');
var EchoProcessor = require('../compilers/echo-compiler.js');
var ES6Processor = require('../compilers/es6-compiler.js');
var MD5Processor = require('../compilers/md5-compiler.js');

module.exports = function routes(server) {
    'use strict';

    // Endpoints
    server.post({ path: '/sass', version: '1.0.0' }, new SASSProcessor().asView());
    server.get({ path: '/sass', version: '1.0.0' }, new SASSProcessor().asView());

    server.post({ path: '/coffee', version: '1.0.0' }, new CoffeeProcessor().asView());
    server.get({ path: '/coffee', version: '1.0.0' }, new CoffeeProcessor().asView());

    server.post({ path: '/echo', version: '1.0.0' }, new EchoProcessor().asView());
    server.get({ path: '/echo', version: '1.0.0' }, new EchoProcessor().asView());

    server.post({ path: '/es6', version: '1.0.0' }, new ES6Processor().asView());
    server.get({ path: '/es6', version: '1.0.0' }, new ES6Processor().asView());

    server.post({ path: '/md5', version: '1.0.0' }, new MD5Processor().asView());
    server.get({ path: '/md5', version: '1.0.0' }, new MD5Processor().asView());

    return server;
};
