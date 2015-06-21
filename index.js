#!/usr/bin/env node
'use strict';

var restify = require('restify');
var SassCompiler = require(__dirname + '/compilers/sass-compiler.js');
var CoffeeCompiler = require(__dirname + '/compilers/coffee-compiler.js');
var EchoCompiler = require(__dirname + '/compilers/echo-compiler.js');
var ES6Compiler = require(__dirname + '/compilers/es6-compiler.js');
var versioning = require('restify-url-semver');

var server = restify.createServer({
    name: 'api',
    version: ['1.0.0']
});

// Allow versioning
server.pre(versioning());

server.use(restify.acceptParser(server.acceptable));
server.use(restify.gzipResponse());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.CORS());
server.use(restify.bodyParser());

// Endpoints
server.post({ path: '/sass', version: '1.0.0' }, new SassCompiler().asView());
server.get({ path: '/sass', version: '1.0.0' }, new SassCompiler().asView());

server.post({ path: '/coffee', version: '1.0.0' }, new CoffeeCompiler().asView());
server.get({ path: '/coffee', version: '1.0.0' }, new CoffeeCompiler().asView());

server.post({ path: '/echo', version: '1.0.0' }, new EchoCompiler().asView());
server.get({ path: '/echo', version: '1.0.0' }, new EchoCompiler().asView());

server.post({ path: '/es6', version: '1.0.0' }, new ES6Compiler().asView());
server.get({ path: '/es6', version: '1.0.0' }, new ES6Compiler().asView());

server.listen(9090, function () {
    console.log('%s listening at %s', server.name, server.url);
});
