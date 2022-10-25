import { Gender } from "./gender";

export class Cat {
    name: string;
    color: string;
    gender: Gender;

    constructor(catname: string, catcolor: string, gender: Gender) {
        this.name = catname;
        this.color = catcolor;
        this.gender = gender;
    }

    print(): void {
        console.log(this.name + " " + this.color + " " + this.gender);
    }

    isFemale() : boolean {
        return this.gender === Gender.Female;

        // if (this.gender === Gender.Female) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

}