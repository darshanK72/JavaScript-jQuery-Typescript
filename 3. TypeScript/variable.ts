/**
 * Variables in TypeScript
 */

// Number
var age : number = 20;
console.log(age);

// String
var fullname : string = "Darshan Khairnar";
console.log(fullname);

// Boolean
var isStudent : boolean = false;
console.log(isStudent);

// Enum
enum weekdays {Monday,Tuesdya,Thirsday,Friday};
console.log(weekdays.Friday)
var monday: weekdays = weekdays.Monday;

// Any
var anyvalue : any = 230;
console.log(anyvalue);

anyvalue = "This is any value";
console.log(anyvalue);

anyvalue = false;
console.log(anyvalue);

anyvalue = 235.6523;
console.log(anyvalue);

// Object
var student = {
    firstName: "Darshan",
    lastName : "Khairnar",
    email : "darshankhairnar72@gmail.com",
    age : 22,
    salary : 26092.25,
    isEmployee : true,
}

console.log(student);

// String Array
var subjects : Array<string> = ["Hindi","English","Marathi","Science","Math"];
console.log(subjects);

// Number Array
var marks : Array<number> = [87.98,67.23,23.52,98.99,87.55];
console.log(marks);

// Union Type
var message : number | string;
message = 255;
message = "hello world";
console.log(message);

// De-Structuring
var arr : Array<any> = ["one","two",3,"four",false];
var[a,b,c,d] = arr;
console.log(a);

var {firstName,lastName} = student;

// Tuple
var tup : [string,number] = ["Darshan",56]

// Void
var und : void = undefined;
var und1 : null = null;

// Alias 
type alphanumeric =  string | number
var password : alphanumeric = 52343;


