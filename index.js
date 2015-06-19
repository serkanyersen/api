#!/usr/bin/env node
'use strict';

var restify = require('restify');
var Logger = require('bunyan');
var sass = require('node-sass');
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

server.post({ path: '/sass', version: '1.0.0' }, function (req, res, next) {
    var result = sass.renderSync({
      data: req.params.code
    });

    res.send({
      result: result.css.toString()
    });

    return next();
});

server.listen(9090, function () {
    console.log('%s listening at %s', server.name, server.url);
});
