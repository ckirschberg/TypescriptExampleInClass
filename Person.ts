import { Cat } from "./cat";

export class Person {
    name: string;
    cats: Cat[];

    constructor(name: string) {
        this.name = name;
        this.cats = [];
    }

    addCat(cat: Cat) {
        this.cats.push(cat);
    }
}