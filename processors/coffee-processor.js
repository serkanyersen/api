'use strict';
var coffee = require('coffee-script');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var CoffeeProcessor = function(){ }.inherits(BaseProcessor);

// Implement process method
CoffeeProcessor.prototype.process = function(code) {
    return coffee.compile(code, this.getConfig());
};

module.exports = CoffeeProcessor;
