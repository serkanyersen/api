'use strict';
var jade = require('jade');
var BaseProcessor = require('./base-processor.js');
require('../src/utils.js');

// Create Class
var JadeProcessor = function(){
    this.contentType = 'text/html';
}.inherits(BaseProcessor);

// Implement process method
JadeProcessor.prototype.process = function(code) {
    var main = jade.compile(code, {
        doctype: this.getConfig('doctype', false),
        pretty: this.getConfig('pretty', true)
    });

    return main(JSON.parse(this.getConfig('context', '{}')));
};

module.exports = JadeProcessor;
