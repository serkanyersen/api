'use strict';

Function.prototype.inheritsFrom = function( ParentClassOrObject ){
    if ( ParentClassOrObject.constructor === Function ) {
        //Normal Inheritance
        this.prototype = new ParentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = ParentClassOrObject.prototype;
    } else {
        //Pure Virtual Inheritance
        this.prototype = ParentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = ParentClassOrObject;
    }
    return this;
};
