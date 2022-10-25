import { Cat } from "./cat";
import { Gender } from "./gender";
import { Person } from "./Person";

const cat1 = new Cat("Charlie", "Brown", Gender.Male);

cat1.print();
console.log(cat1.isFemale());


const person1 = new Person("Christian");
const person2 = new Person("Michelle");
person1.addCat(cat1);
// person1.addCat(person2); // type error