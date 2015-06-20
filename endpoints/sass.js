'use strict';
var request = require('request');

var sass = require('node-sass');

exports.POST = {
    v1: function (req, res, next) {
        var result = sass.renderSync({
            data: req.params.code
        });

        res.send({
            result: result.css.toString()
        });

        return next();
    }
};

exports.GET = {
    v1: function (req, res, next) {
        if (req.params.file) {
            request.get(req.params.file, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var result = sass.renderSync({
                        data: body
                    });

                    res.header('Content-Length', Buffer.byteLength(result.css.toString()));
                    res.header('Content-Type', 'text/plain');

                    res.end(result.css.toString());

                    next();
                } else {
                    next(new Error('cannot read file'));
                }
            });
        }
    }
};
