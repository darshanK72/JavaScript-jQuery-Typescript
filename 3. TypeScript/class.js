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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, marks, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.marks = marks;
        this.dateOfBirth = dateOfBirth;
        Person.count++;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getMarks = function () {
        return this.marks;
    };
    Person.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    Person.prototype.getPersonDetails = function () {
        return "Full Name : ".concat(this.getFullName(), "\nDate Of Birth : ").concat(this.getDateOfBirth());
    };
    Person.getCount = function () {
        return Person.count;
    };
    Person.count = 0;
    return Person;
}());
var darshan = new Person("Darshan", "Khairnar", 23, 88.00, new Date("07/12/2000"));
console.log(darshan.getPersonDetails());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, marks, dateOfBirth, employeeId, department) {
        var _this = _super.call(this, firstName, lastName, age, marks, dateOfBirth) || this;
        _this.employeeId = employeeId;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "".concat(this.getPersonDetails(), "\nEmployee ID : ").concat(this.employeeId, "\nDepartment : ").concat(this.department);
    };
    return Employee;
}(Person));
var prasad = new Employee("Prasad", "Khairnar", 23, 72.23, new Date("25/06/2000"), 101, "Mechanical");
console.log(prasad.getEmployeeDetails());
console.log(Person.getCount());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getDetails = function () {
        return "This are details of animal";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Bow Bow";
    };
    Dog.prototype.move = function () {
        return "Moving";
    };
    Dog.prototype.eat = function () {
        return "Eating";
    };
    return Dog;
}(Animal));
var ani = new Dog();
console.log(ani.makeSound());
