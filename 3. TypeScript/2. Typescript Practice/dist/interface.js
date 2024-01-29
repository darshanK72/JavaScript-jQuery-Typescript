"use strict";
let emp1 = {
    name: "Darshan",
    employeeId: 101,
    department: "CFMG",
    salary: 26092
};
console.log(emp1);
let toUpper = function (input) {
    return input.toUpperCase();
};
let toLower = function (input) {
    return input.toLowerCase();
};
console.log(toLower("Hello world, this is sparta"));
class Person2 {
    constructor(name, dateOfBirth, age) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.jsonString = '';
    }
    toJson() {
        this.jsonString = JSON.stringify(this);
        return this.jsonString;
    }
    toObject() {
        if (this.jsonString == null) {
            return this;
        }
        return JSON.parse(this.jsonString);
    }
}
let darshan = new Person2("Darshan Khairnar", new Date("07/12/2000"), 22);
console.log(darshan.toJson());
console.log(darshan.toObject());
let point = {
    key: "x",
    value: "y"
};
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let i = this.items.indexOf(o);
        if (i > -1) {
            this.items.splice(i, 1);
        }
    }
    display() {
        console.log(lst);
    }
}
let lst = new List();
lst.add(10);
lst.add(20);
lst.add(30);
lst.remove(10);
lst.display();
class employee {
    constructor(f, l, r, m) {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    isMarried() {
        throw new Error("Method not implemented.");
    }
    isMarrid() {
        return this.marraied;
    }
    greet() {
        return "Hello " + this.first_name + " " + this.last_name;
    }
}
let e2 = new employee("Darshan", "Khairnar", 124, true);
console.log(e2.isMarrid());
