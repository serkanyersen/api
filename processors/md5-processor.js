'use strict';
var md5 = require('MD5');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var MD5Processor = function(){
    this.usePlainText = false;
}.inherits(BaseProcessor);

// Implement process method
MD5Processor.prototype.process = function(code) {
    return md5(code);
};

module.exports = MD5Processor;
