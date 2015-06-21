'use strict';
var request = require('sync-request');

/**
 * Constructor
 * @constructor
 */
function CompilerBase() {}

/**
 * Compiles the given code.
 * Classes inheriting this Class should implement this method
 */
CompilerBase.prototype.compile = function() {
    throw 'not implemented';
};

/**
 * Reads the file from remote source and returns it as string
 * @param  {String} filePath Full path of the file
 * @return {string}          File contents as string
 */
CompilerBase.prototype.getFile = function(filePath) {
    var response = request('GET', filePath);
    return response.getBody().toString();
};

/**
 * Reads the config from parameters
 * @param  {String} key          name of the parameter
 * @param  {any} defaultValue if key is not found return the default value
 * @return {any}              matched config or whole config object
 */
CompilerBase.prototype.getConfig = function(key, defaultValue) {
    var config = this.params;
    if (key) {
        return config.hasOwnProperty(key) ? config[key] : defaultValue;
    }
    return config;
};

/**
 * Sends the output back to server
 * @param  {object} res     Response Object
 * @param  {string} content content to display on the screen
 * @param  {bool} plain   if true display the content as plain text, otherwise display as json
 */
CompilerBase.prototype.sendResponse = function(res, content, plain) {
    if (plain) {
        res.header('Content-Length', Buffer.byteLength(content));
        res.header('Content-Type', 'text/plain');

        res.end(content);
    } else {
        res.send({
            result: content,
        });
    }
};

/**
 * A view function that restify can use,
 * Operates this whole class and calls the necessary methods
 * @param  {object}   req  Request Object
 * @param  {object}   res  Response Object
 * @param  {Function} next function to complete this views operation
 */
CompilerBase.prototype.view = function(req, res, next) {
    var plainText = false, source, result;

    this.params = req.params;

    if (req.params.file) {
        source = this.getFile(req.params.file);
        plainText = true;
    } else {
        source = req.params.code;
    }

    result = this.compile(source);
    this.sendResponse(res, result, plainText);
    return next();
};

/**
 * Bind the view function with itself and returns it.
 * @return {Function} this.view
 */
CompilerBase.prototype.asView = function() {
    return this.view.bind(this);
};

module.exports = CompilerBase;
