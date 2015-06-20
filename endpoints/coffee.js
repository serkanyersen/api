'use strict';
var request = require('request');

var coffee = require('coffee-script');

exports.POST = {
    v1: function (req, res, next) {
        var result = coffee.compile(req.params.code, req.params);

        res.send({
            result: result
        });

        return next();
    }
};

exports.GET = {
    v1: function (req, res, next) {
        if (req.params.file) {
            request.get(req.params.file, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var result = coffee.compile(body, req.params);

                    res.header('Content-Length', Buffer.byteLength(result));
                    res.header('Content-Type', 'text/plain');

                    res.end(result);

                    next();
                } else {
                    next(new Error('cannot read file'));
                }
            });
        }
    }
};
