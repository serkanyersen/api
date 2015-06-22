'use strict';
var ts = require('typestring');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var TypeScriptProcessor = function(){ }.inherits(BaseProcessor);

// Implement process method
TypeScriptProcessor.prototype.process = function(code) {

    var result = ts.compile(code);

    return result;
};

module.exports = TypeScriptProcessor;
