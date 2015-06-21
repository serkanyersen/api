'use strict';
var BaseProcessor = require('./base-processor.js');
var md5 = require('MD5');
require('../src/utils.js');

// Create Class
var MD5Processor = function(){
    this.usePlainText = false;
}.inherits(BaseProcessor);

// Implement compile method
MD5Processor.prototype.compile = function(code) {
    return md5(code);
};

module.exports = MD5Processor;
