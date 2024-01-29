"use strict";
/**
 * Variables in TypeScript
 */
// Number
var age = 20;
console.log(age);
// String
var fullname = "Darshan Khairnar";
console.log(fullname);
// Boolean
var isStudent = false;
console.log(isStudent);
// Enum
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Tuesdya"] = 1] = "Tuesdya";
    weekdays[weekdays["Thirsday"] = 2] = "Thirsday";
    weekdays[weekdays["Friday"] = 3] = "Friday";
})(weekdays || (weekdays = {}));
;
console.log(weekdays.Friday);
var monday = weekdays.Monday;
// Any
var anyvalue = 230;
console.log(anyvalue);
anyvalue = "This is any value";
console.log(anyvalue);
anyvalue = false;
console.log(anyvalue);
anyvalue = 235.6523;
console.log(anyvalue);
// Object
var student3 = {
    firstName: "Darshan",
    lastName: "Khairnar",
    email: "darshankhairnar72@gmail.com",
    age: 22,
    salary: 26092.25,
    isEmployee: true,
};
console.log(student);
// String Array
var subjects = ["Hindi", "English", "Marathi", "Science", "Math"];
console.log(subjects);
// Number Array
var marks = [87.98, 67.23, 23.52, 98.99, 87.55];
console.log(marks);
// Union Type
var message;
message = 255;
message = "hello world";
console.log(message);
// De-Structuring
var arr = ["one", "two", 3, "four", false];
var [a, b, c, d] = arr;
console.log(a);
var { firstName, lastName } = student3;
// Tuple
var tupple = ["Darshan", 56];
// Void
var und = undefined;
var und1 = null;
var password = 52343;
