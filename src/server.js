#!/usr/bin/env node
'use strict';

var restify = require('restify');
var versioning = require('restify-url-semver');
var routes = require('./routes.js');

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

routes(server).listen(9090, function () {
    console.log('%s listening at %s', server.name, server.url);
});
