/* 1. var vs let keyword
      var -> accessible in full function
      let -> accessible in only block (here, "for" scope)
*/

function sayHello() {
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}

/* 2. Const keyword
      const -> It's for constant, we can't reassign
*/
const x = 1;
x = 2;

// 3. Object
const person = { // an object with one property and two methods
    name : "Mosh",
    walk() {},
    talk() {}
};

// *** For accessing(when we know what to access)
person.talk();
person.name = '';
// *** For accessing(when we don't know what to access)
const targetMember = 'name';
person[targetMember.value] = 'John';

// 4. 'this' keyword ('this' returns the reference of the current object)
const person = {
    name : "Mosh",
    walk() {
        console.log(this); //this will return the whole person object
    }
}
person.walk(); // will return the person object
//now,
const walk = person.walk;
walk(); // on using standalone method, it will return undefined as it's out of scope(brackets)
//so, we will use 'this' binding, (as all methods in javascript is object)
const walk = person.walk.bind(person);
walk();  

//5. Arrow Function

//normal function
const square = function(num) {
    return num * num;
}
//or,
function square(num) {
    return num*num;
}
// so, in arrow function, we write
const square = num => num * num;
console.log(square(5));

//suppose there is a object jobs and we have to find the active jobs
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]
//so in normal function
const activeJobs = jobs.filter(function(job){ return job.isActive; });
//but in arrow function
const activeJobs = jobs.filter(job => jobs.isActive); // Arrow Function

// 6. Arrow Function & this :- Arrow function don't rebind this keyword
const Person = {
    talk() {
        var self = this;
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};
person.talk();

// 7. Array.map() :- map() creates a new array with the result of calling an function

const colors = ['red','green', 'blue'];
const items = colors.map(function(color) {
    return '<li>' + color + '</li>';
});

// so we can use arrow functions
const_items = color.map(color => '<li>'+ color + '</li>');
// and we can also use template literals
const_items = color.map(color => `<li> ${color} </li>`);
console.log(items);

// 8. Object Destructing
const address = {
    street : '',
    city : '',
    country : ''
}
const street = address.street;
const city = address.city;
const country = address.country;
// Instead of writting that much we can write that in one line
const { street, city, country } = address;

// 9. Spread Operators

// using array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const combined = [...first, ...second]; // ... is called separate operator
// so we use separate operator instead of concat as, it let as add extrnal elements anywhere in the list
const combined_with_extra = [...first, 'a', ...second];

//using object
const first = { name : "Mosh" };
const second = { job : "Instructor" };
const combined = {...first, ...second, location: "Australia"};
console.log(combined);

/* 10. Class :- Instead of creating multiple same objects, 
       we use class. As methods having bugs, will reqiure
       that much times editing, while using class will require editng once */
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
const person = new Person('Mosh');

// 11. Inheritance
class Teacher extends Person {
    constructor (name, degree) {
        super(name); //else it will throw error
        this.degree = degree;
    }
    teach(){
        console.log("teach");
    }
}
const teacher = new Teacher("Mosh","MSc");
