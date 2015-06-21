'use strict';
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var EchoProcessor = function(){ }.inherits(BaseProcessor);

// Implement compile method
EchoProcessor.prototype.compile = function(code) {
    return code;
};

module.exports = EchoProcessor;
