'use strict';
var CompilerBase = require('./compiler-base.js');
require('../utils.js');

// Create Class
var EchoCompiler = function(){ }.inherits(CompilerBase);

// Implement compile method
EchoCompiler.prototype.compile = function(code) {
    return code;
};

module.exports = EchoCompiler;
