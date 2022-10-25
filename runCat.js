"use strict";
exports.__esModule = true;
var cat_1 = require("./cat");
var gender_1 = require("./gender");
var Person_1 = require("./Person");
var cat1 = new cat_1.Cat("Charlie", "Brown", gender_1.Gender.Male);
cat1.print();
console.log(cat1.isFemale());
var person1 = new Person_1.Person("Christian");
var person2 = new Person_1.Person("Michelle");
person1.addCat(cat1);
// person1.addCat(person2); // type error
