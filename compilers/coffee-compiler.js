'use strict';
var coffee = require('coffee-script');
var CompilerBase = require('./compiler-base.js');
require('../utils.js');

function CoffeeCompiler() {}
CoffeeCompiler.inheritsFrom(CompilerBase);

CoffeeCompiler.prototype.compile = function(code) {
    return coffee.compile(code, this.getConfig());
};

module.exports = CoffeeCompiler;
