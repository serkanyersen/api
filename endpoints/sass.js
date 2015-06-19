'use strict';

var sass = require('node-sass');

exports.v1 = function (req, res, next) {
    var result = sass.renderSync({
      data: req.params.code
    });

    res.send({
      result: result.css.toString()
    });

    return next();
};
