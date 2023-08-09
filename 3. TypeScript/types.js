var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic types
var num = 20;
var str = "Darshan";
var bool = false;
console.log(num);
console.log(str);
console.log(bool);
//num = "hello"; will give error
var str1 = "hello"; // autometically infer
// Any
var temp;
temp = 23;
console.log(temp);
temp = "Hello, world"; //will not give any error
console.log(temp);
// Array
var nums = [1, 2, 3, 4, 5, 5, 23, 2];
console.log(nums);
// Touple
var tup = [123, "hello", true];
console.log(tup);
// Object
var student = {
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
var date = 235;
console.log(date);
var c1 = {
    real: 23,
    imag: 21
};
console.log(c1);
// function
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(23, 42));
var Person = /** @class */ (function () {
    function Person(name, age, dob) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.name);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getDob = function () {
        return this.dob;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, dob, id) {
        var _this = _super.call(this, name, age, dob) || this;
        _this.emp_id = id;
        return _this;
    }
    Employee.prototype.getId = function () {
        return this.emp_id;
    };
    return Employee;
}(Person));
var p1 = new Person("Darshan", 22, "07/12/2000");
var e1 = new Employee("Aakash", 22, "01/01/2001", 101);
console.log(p1);
console.log(e1);
