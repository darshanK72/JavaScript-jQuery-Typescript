"use strict";
class Person1 {
    constructor(firstName, lastName, age, marks, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.marks = marks;
        this.dateOfBirth = dateOfBirth;
        Person1.count++;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
    getMarks() {
        return this.marks;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getPersonDetails() {
        return `Full Name : ${this.getFullName()}\nDate Of Birth : ${this.getDateOfBirth()}`;
    }
    static getCount() {
        return Person1.count;
    }
}
Person1.count = 0;
let darshan1 = new Person1("Darshan", "Khairnar", 23, 88.00, new Date("07/12/2000"));
console.log(darshan1.getPersonDetails());
class Employee1 extends Person1 {
    constructor(firstName, lastName, age, marks, dateOfBirth, employeeId, department) {
        super(firstName, lastName, age, marks, dateOfBirth);
        this.employeeId = employeeId;
        this.department = department;
    }
    getEmployeeDetails() {
        return `${this.getPersonDetails()}\nEmployee ID : ${this.employeeId}\nDepartment : ${this.department}`;
    }
}
let prasad = new Employee1("Prasad", "Khairnar", 23, 72.23, new Date("25/06/2000"), 101, "Mechanical");
console.log(prasad.getEmployeeDetails());
console.log(Person1.getCount());
class Animal {
    getDetails() {
        return "This are details of animal";
    }
}
class Dog extends Animal {
    makeSound() {
        return "Bow Bow";
    }
    move() {
        return "Moving";
    }
    eat() {
        return "Eating";
    }
}
let ani = new Dog();
console.log(ani.makeSound());
// Class Declaration
class person {
    constructor(f, l, r, m) {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    isMarried() {
        return this.marraied;
    }
    greet() {
        return "Hello, Mr " + this.first_name + " " + this.last_name;
    }
}
// Object creation
let p2 = new person("Darshan", "Khairnar", 1232, false);
console.log(p2.greet());
