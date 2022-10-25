"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.cats = [];
    }
    Person.prototype.addCat = function (cat) {
        this.cats.push(cat);
    };
    return Person;
}());
exports.Person = Person;
