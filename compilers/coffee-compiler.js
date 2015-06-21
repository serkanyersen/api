'use strict';
var coffee = require('coffee-script');
var CompilerBase = require('./compiler-base.js');
require('../src/utils.js');

// Create Class
var CoffeeCompiler = function(){ }.inherits(CompilerBase);

// Implement compile method
CoffeeCompiler.prototype.compile = function(code) {
    return coffee.compile(code, this.getConfig());
};

module.exports = CoffeeCompiler;
