"use strict";
exports.__esModule = true;
exports.Cat = void 0;
var gender_1 = require("./gender");
var Cat = /** @class */ (function () {
    function Cat(catname, catcolor, gender) {
        this.name = catname;
        this.color = catcolor;
        this.gender = gender;
    }
    Cat.prototype.print = function () {
        console.log(this.name + " " + this.color + " " + this.gender);
    };
    Cat.prototype.isFemale = function () {
        return this.gender === gender_1.Gender.Female;
        // if (this.gender === Gender.Female) {
        //     return true;
        // } else {
        //     return false;
        // }
    };
    return Cat;
}());
exports.Cat = Cat;
