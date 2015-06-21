var SassCompiler = require('../compilers/sass-compiler.js');
var CoffeeCompiler = require('../compilers/coffee-compiler.js');
var EchoCompiler = require('../compilers/echo-compiler.js');
var ES6Compiler = require('../compilers/es6-compiler.js');

module.exports = function routes(server) {
    'use strict';

    // Endpoints
    server.post({ path: '/sass', version: '1.0.0' }, new SassCompiler().asView());
    server.get({ path: '/sass', version: '1.0.0' }, new SassCompiler().asView());

    server.post({ path: '/coffee', version: '1.0.0' }, new CoffeeCompiler().asView());
    server.get({ path: '/coffee', version: '1.0.0' }, new CoffeeCompiler().asView());

    server.post({ path: '/echo', version: '1.0.0' }, new EchoCompiler().asView());
    server.get({ path: '/echo', version: '1.0.0' }, new EchoCompiler().asView());

    server.post({ path: '/es6', version: '1.0.0' }, new ES6Compiler().asView());
    server.get({ path: '/es6', version: '1.0.0' }, new ES6Compiler().asView());

    return server;
};
