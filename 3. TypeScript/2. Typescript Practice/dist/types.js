"use strict";
// Basic types
let num = 20;
let str = "Darshan";
let bool = false;
console.log(num);
console.log(str);
console.log(bool);
//num = "hello"; will give error
let str1 = "hello"; // autometically infer
// Any
let temp;
temp = 23;
console.log(temp);
temp = "Hello, world"; //will not give any error
console.log(temp);
// Array
let nums = [1, 2, 3, 4, 5, 5, 23, 2];
console.log(nums);
// Touple
let tup = [123, "hello", true];
console.log(tup);
// Object
let student = {
    name: "Darshan",
    age: 23
};
console.log(student.name);
console.log(student.age);
// Enum
var days;
(function (days) {
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
    days[days["sonday"] = 7] = "sonday";
})(days || (days = {}));
console.log(days.monday);
console.log(days.friday);
let date = 235;
console.log(date);
let cu = {
    name: "Consumer Name",
    email: "consumer@gmail.com",
    age: 23,
    consumerId: '24342342',
    joinedDate: new Date('2000/12/1')
};
console.log(cu);
let c1 = {
    real: 23,
    imag: 21
};
console.log(c1);
// function
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(23, 42));
class Person {
    constructor(name, age, dob) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
    getAge() {
        return this.age;
    }
    getDob() {
        return this.dob;
    }
}
class Employee extends Person {
    constructor(name, age, dob, id) {
        super(name, age, dob);
        this.emp_id = id;
    }
    getId() {
        return this.emp_id;
    }
}
let p1 = new Person("Darshan", 22, "07/12/2000");
let e1 = new Employee("Aakash", 22, "01/01/2001", 101);
console.log(p1);
console.log(e1);
