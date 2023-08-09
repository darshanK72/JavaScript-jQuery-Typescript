var emp1 = {
    name: "Darshan",
    employeeId: 101,
    department: "CFMG",
    salary: 26092
};
console.log(emp1);
var toUpper = function (input) {
    return input.toUpperCase();
};
var toLower = function (input) {
    return input.toLowerCase();
};
console.log(toLower("Hello world, this is sparta"));
var Person = /** @class */ (function () {
    function Person(name, dateOfBirth, age) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
    }
    Person.prototype.toJson = function () {
        this.jsonString = JSON.stringify(this);
        return this.jsonString;
    };
    Person.prototype.toObject = function () {
        if (this.jsonString == null) {
            return this;
        }
        return JSON.parse(this.jsonString);
    };
    return Person;
}());
var darshan = new Person("Darshan Khairnar", new Date("07/12/2000"), 22);
console.log(darshan.toJson());
console.log(darshan.toObject());
var point = {
    key: "x",
    value: "y"
};
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var i = this.items.indexOf(o);
        if (i > -1) {
            this.items.splice(i, 1);
        }
    };
    List.prototype.display = function () {
        console.log(lst);
    };
    return List;
}());
var lst = new List();
lst.add(10);
lst.add(20);
lst.add(30);
lst.remove(10);
lst.display();
