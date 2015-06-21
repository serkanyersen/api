'use strict';
var coffee = require('coffee-script');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var CoffeeProcessor = function(){ }.inherits(BaseProcessor);

// Implement compile method
CoffeeProcessor.prototype.compile = function(code) {
    return coffee.compile(code, this.getConfig());
};

module.exports = CoffeeProcessor;
