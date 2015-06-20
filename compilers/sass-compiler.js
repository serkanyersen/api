'use strict';
var sass = require('node-sass');
var CompilerBase = require('./compiler-base.js');
require('../utils.js');

function SassCompiler() {}
SassCompiler.inheritsFrom(CompilerBase);

SassCompiler.prototype.compile = function(code) {
    var result = sass.renderSync({
        data: code,
        indentedSyntax: this.getConfig('sass', false),
        outputStyle: this.getConfig('outputStyle', 'nested'),
        sourceComments: this.getConfig('sourceComments', false)
    });

    return result.css.toString();
};

module.exports = SassCompiler;
