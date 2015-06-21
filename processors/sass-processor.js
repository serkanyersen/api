'use strict';
var sass = require('node-sass');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var SASSProcessor = function(){ }.inherits(BaseProcessor);

// Implement compile method
SASSProcessor.prototype.compile = function(code) {
    var result = sass.renderSync({
        data: code,
        indentedSyntax: this.getConfig('sass', false),
        outputStyle: this.getConfig('outputStyle', 'nested'),
        sourceComments: this.getConfig('sourceComments', false)
    });

    return result.css.toString();
};

module.exports = SASSProcessor;
