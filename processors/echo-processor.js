'use strict';
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var EchoProcessor = function(){ }.inherits(BaseProcessor);

// Implement process method
EchoProcessor.prototype.process = function(code) {
    if (this.getConfig('delay')) {
        require('deasync').sleep(this.getConfig('delay'));
    }

    if (this.getConfig('error')) {
        throw new Error(this.getConfig('error'));
    }

    return code;
};

module.exports = EchoProcessor;
