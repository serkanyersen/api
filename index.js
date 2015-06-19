#!/usr/bin/env node
'use strict';

var restify = require('restify');
var Logger = require('bunyan');
var sass = require(__dirname + '/endpoints/sass.js');
var versioning = require('restify-url-semver');

var log = new Logger.createLogger({
    name: 'api',
    serializers: {
        req: Logger.stdSerializers.req
    }
});

var server = restify.createServer({
  name: 'api',
  log: log,
  version: ['1.0.0']
});

// Allow versioning
server.pre(versioning());

// Logging
server.pre(function (request, response, next) {
    request.log.info({ req: request }, 'REQUEST');
    next();
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.gzipResponse());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.CORS());
server.use(restify.bodyParser());

// Endpoints
server.post({ path: '/sass', version: '1.0.0' }, sass.v1);

server.listen(9090, function () {
    console.log('%s listening at %s', server.name, server.url);
});
