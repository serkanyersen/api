'use strict';
var babel = require('babel-core');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var ES6Processor = function(){ }.inherits(BaseProcessor);

// Implement compile method
ES6Processor.prototype.compile = function(code) {

    var result = babel.transform(code, {
        auxiliaryComment:   this.getConfig('auxiliaryComment', null),
        nonStandard:        this.getConfig('nonStandard', true),
        comments:           this.getConfig('comments', true),
        modules:            this.getConfig('modules', 'common'),
        compact:            this.getConfig('compact', 'auto'),
        stage:              this.getConfig('stage', 2),
        ast:                this.getConfig('ast', true),
    });

    return result.code;
};

module.exports = ES6Processor;
