'use strict';
var haml = require('haml');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var HAMLProcessor = function(){
    this.contentType = 'text/html';
}.inherits(BaseProcessor);

// Implement process method
HAMLProcessor.prototype.process = function(code) {
    var main = haml(code);

    return main(JSON.parse(this.getConfig('context', '{}')));
};

module.exports = HAMLProcessor;
