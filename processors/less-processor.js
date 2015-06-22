'use strict';
var less = require('less');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var LESSProcessor = function(){
    this.useCallback = true;
}.inherits(BaseProcessor);

// Implement process method
LESSProcessor.prototype.process = function(code, callback) {
    var result = less.render(code, {}, function(error, output) {
        if (error === null) {
            callback(output.css);
        } else {
            throw new Error(error);
        }
    });

    return result;
};

module.exports = LESSProcessor;
