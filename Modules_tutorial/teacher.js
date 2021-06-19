import {Person} from './person'
export class Teacher extends Person {
    constructor (name, degree) {
        super(name); //else it will throw error
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}