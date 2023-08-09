
// Variables
let x;
x = 10;
console.log('x = ' + x);

let y = 20;
console.log('y = ' + y);
let z = x + y;
console.log('z = ' + z);

var a = "this is my message"
console.log("Message = " + a);

const PI = 3.14321;
console.log("Constant PI = " + PI + " | Its value cannot be changed |");


// Operators
/*
    Addition +
    Subtraction -
    Multiplication *
    Exponent **
    Modulo %
    assignment =
    operational assignment +=,-=,*= **=,%=
    isequal to ==
    less than & greater than < , >
    less than or equal to and greater than equal to <=, >=
    equal and type ===
    not equal and type !==
    ternery operator ?(con1:con2)
    logical and &&
    logiral or ||
    logical not !
    bitwise and &
    bitwise or |
    bitwise not ~
    bitwise xor ^
    bitwise leftshift <<
    bitwise rightshift >>
    bitwise unsigned right shift >>>
    typeof type of variable
    instanceof return true if belong to certain type of variable

*/

// Datatypes
// number
var num1 = 1022;
var num2 = 23.23;
console.log(num1 + num2);

/*
  Number Methods 
  isInteger()	It determines whether the given value is an integer.
  parseFloat()	It converts the given string into a floating point number.
  parseInt()	It converts the given string into an integer number.
  toExponential()	It returns the string that represents exponential notation of the given number.
  toFixed()	It returns the string that represents a number with exact digits after a decimal point.
  toPrecision()	It returns the string representing a number of specified precision.
  toString()	It returns the given number in the form of string.
  isFinite()	It determines whether the given value is a finite number.
 */
// string
var str1 = 'hello';
var str2 = "World";
console.log(str1 + " " + str2);

//boolean 
var flag1 = true;
var flag2 = false;
console.log(flag1);

//Array
var userList = ["darshan", "abhi", "aakash"];
var numList = [1, 2, 3, 4, 5];
console.log(userList);
console.log(numList);

/*
   Array Function
   concat()	It returns a new array object that contains two or more merged arrays.
   entries()	It creates an iterator object and a loop that iterates over each key/value pair.
   every()	It determines whether all the elements of an array are satisfying the provided function conditions.
   flat()	It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
   flatMap()	It maps all array elements via mapping function, then flattens the result into a new array.
   fill()	It fills elements into an array with static values.
   from()	It creates a new array carrying the exact copy of another array element.
   filter()	It returns the new array containing the elements that pass the provided function conditions.
   find()	It returns the value of the first element in the given array that satisfies the specified condition.
   findIndex()	It returns the index value of the first element in the given array that satisfies the specified condition.
   forEach()	It invokes the provided function once for each element of an array.
   includes()	It checks whether the given array contains the specified element.
   indexOf()	It searches the specified element in the given array and returns the index of the first match.
   isArray()	It tests if the passed value ia an array.
   join()	It joins the elements of an array as a string.
   keys()	It creates an iterator object that contains only the keys of the array, then loops through these keys.
   lastIndexOf()	It searches the specified element in the given array and returns the index of the last match.
   map()	It calls the specified function for every array element and returns the new array
   of()	It creates a new array from a variable number of arguments, holding any type of argument.
   pop()	It removes and returns the last element of an array.
   push()	It adds one or more elements to the end of an array.
   reverse()	It reverses the elements of given array.
   reduce(function, initial)	It executes a provided function for each value from left to right and reduces the array to a single value.
   reduceRight()	It executes a provided function for each value from right to left and reduces the array to a single value.
   some()	It determines if any element of the array passes the test of the implemented function.
   shift()	It removes and returns the first element of an array.
   sort()	It returns the element of the given array in a sorted order.
   splice()	It add/remove elements to/from the given array.
   copywithin()	It copies the part of the given array with its own elements and returns the modified array.
   toString()	It converts the elements of a specified array into string form, without affecting the original array.
   unshift()	It adds one or more elements in the beginning of the given array.
   values()	It creates a new iterator object carrying values for each index in the array.
   slice()	It returns a new array containing the copy of the part of the given array.
   toLocaleString()	It returns a string containing all the elements of a specified array.
*/

// Object
var student = {
    name: "Darshan",
    age: 22,
    subjects: ["Maths", "Science", "History"],
    address: {
        city: "Malegaon",
        pincode: 423203
    },
    getName: function () { return this.name }
}
console.log(student);
console.log(student.name);
console.log(student['age']);
console.log(student.getName());


// Function

// Function without parameter
function change() {
    var changedHeading;
    changedHeading = "Hello, World";
    document.getElementById("heading").innerHTML = changedHeading;
}
// Function with parameter
function addition(num1, num2) {
    console.log(num1 + num2);
}

// Control Flow Statements
// IF Statement
var time = 4;
var greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// Switch Case Statement
let day = "Wednesday"
switch (day) {
    default:
        console.log("This is Friday");
        break;
    case "Sunday":
        console.log("This is Sunday!")
        break;
    case "Monday":
        console.log("This is Monday!")
        break;
    case "Tuesday":
        console.log("This is Tuesday!")
        break;
    case "Wednesday":
        console.log("This is Wednesday!")
        break;
    case "Thursday":
        console.log("This is Thursday!")
        break;
}

// For Loop Statement
table = document.getElementById("tab");
for (var i = 1; i <= 10; i++) {
    table.innerHTML += "3 x " + i + " = " + 3 * i + "</br>";

}

for (let p in student) {
    console.log(student.p);
}

for (let num of numList) {
    console.log(num);
}

userList.forEach(myfun);
function myfun(name) {
    console.log(name);
}

// While Loop Statement
let l = 1;
// let cond = prompt("Enter Number");
let cond = 5;
while (l < cond) {
    console.log("still less");
    l++;
}


// Type Conversion

console.log("1" + "2");
console.log(1 + "2");
console.log(5 * "3");
console.log(8 / "four");

console.log(typeof 23);
console.log(typeof String(23));
console.log(typeof Boolean(20));


// String datatype
console.log("************* String Manipulation ************")

var messge = "This is my message";
console.log(messge);
console.log(messge.length);

let fname = "Darshan";
let lname = "Khairnar";
let age = 20;

console.log(`My name is ${fname} ${lname}, and my age is ${age}`);

var str1 = "John";
var str2 = new String("John");
console.log(str1 == str2);
console.log(str1 === str2);


var sl = messge.slice(3, 8);
console.log(sl);

var sub1 = messge.substring(1, 12);
console.log(sub1);

var sub2 = messge.substr(8, 4);
console.log(sub2);

/*
   All string functions
   1) str.length : return length of string
   2) charAt()	: It provides the char value present at the specified index.
   3) indexOf()	: It provides the position of a char value present in the given string.
   4) charCodeAt()	: It provides the Unicode value of a character present at the specified index.
   5) lastIndexOf() : It provides the position of a char value present in the given string by searching a character from the  last position.
   6) search() :	It searches a specified regular expression in a given string and returns its position if a match occurs.
   7) match()	: It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
   8) replace() :	It replaces a given string with the specified replacement.
   9) substr()	: It is used to fetch the part of the given string on the basis of the specified starting position and length.
   10) substring()	:It is used to fetch the part of the given string on the basis of the specified index.
   11) slice()	: It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
   12) toLowerCase() : It converts the given string into lowercase letter.
   13) toLocaleLowerCase() : It converts the given string into lowercase letter on the basis of host?s current locale.
   14) toUpperCase() : It converts the given string into uppercase letter.
   15) toLocaleUpperCase() : It converts the given string into uppercase letter on the basis of host?s current locale.
   16) toString() : It provides a string representing the particular object.
   17) valueOf() : It provides the primitive value of string object.
   18) split() : It splits a string into substring array, then returns that newly created array.
   19) trim() : It trims the white space from the left and right side of the string.
   20) concat() : It provides a combination of two or more strings.
*/

// Math
console.log(Math.max(32,5,3,53,4,29,-123));
console.log(Math.pow(2,2));
console.log(Math.floor(4.8));
console.log(Math.ceil(3.2));
console.log(Math.round(4.3432));

console.log("Random Number Between 1 to 10 and 15 to 35");
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * (35 - 15)) + 15);

// Date
let currentDate = new Date();
console.log(currentDate);

let birthDate = new Date(2000,11,7,3,45,23,32);
console.log(birthDate);

let otherDate = new Date("Feburery 12,2003, 12:15:23");
console.log(otherDate);

console.log(currentDate.getTime());
console.log(currentDate.getMonth());
console.log(currentDate.getDay());
console.log(currentDate.getFullYear());

/*
    Date Methods

    Getter Methods
    getMonth()	Get the month as a number (0-11)
    getDate()	Get the day as a number (1-31)
    getHours()	Get the hour (0-23)
    getSeconds()	Get the second (0-59)
    getMilliseconds()	Get the millisecond (0-999)
    getTime()	Get the time (milliseconds since January 1, 1970)
    getFullYear()	Get the year as a four digit number (yyyy)
    getDay()	Get the weekday as a number (0-6)
    Date.now()	Get the time. ECMAScript 5.
    getMinutes()	Get the minute (0-59)

    Setter Methods
    setDate()	Set the day as a number (1-31)
    setHours()	Set the hour (0-23)
    setMilliseconds()	Set the milliseconds (0-999)
    setMinutes()	Set the minutes (0-59)
    setMonth()	Set the month (0-11)
    setSeconds()	Set the seconds (0-59)
    setTime()	Set the time (milliseconds since January 1, 1970)
    setFullYear()	Set the year (optionally month and day)
*/

// Set
let set = new Set([1,2,3,4,4,5,6,5,5]);
set.forEach(myfun);
set.add(12);
console.log(set.has(3));
set.delete(12);
console.log(set);

// Map
let map = new Map([
    ["Monday",1],
    ["Tuesday",2],
    ["Wednesday",3]
])
map.set("Thursday",4);
console.log(map);
console.log(map.get("Tuesday"));

/*
Document Object Model

document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
document.querySelector("query") find by tag and class name or css selectors
document.querySelectorAll("query") finds all by css selector 

element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

element.setAttribute(attribute, value)	Change the attribute value of an HTML element
Adding and Deleting Elements

document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream
*/

let ele = document.getElementById("lists")
console.log(ele);
let list = ele.getElementsByTagName("li");
console.log(list);
let heading2 = document.getElementsByClassName("h2");
console.log(heading2);

// ele.innerHTML = "<h2> This is changed </h2>";

let lk = document.getElementById("links");
lk.href = "http://www.google.com";
lk.target = "_blank";

let cont = document.querySelector("div.container");
console.log(cont);

let h1s = document.querySelectorAll("div.container h1");
console.log(h1s);

ele.style.cssText = "list-style-type:circle; background-color:pink;";

lk.style.textDecoration = "none";
lk.style.color = "red";

let button = document.getElementById("btn");
button.onmouseover = () => {
    button.innerHTML = "Click me";
}

button.onmouseout = () => {
    button.innerHTML = "got away";
}

button.addEventListener("click", () => {
    button.innerHTML = "you clicked";
})


// window.addEventListener("keyup",printkey);

// function printkey(event)
// {
//     console.log(event.key);
// }

let nameInput = document.getElementById("name");
console.log(nameInput);
var focusFun = () => {
    nameInput.style.backgroundColor = "pink";
}
var blurFun = () => {
    nameInput.style.backgroundColor = "white";
}
var chan = 
nameInput.addEventListener("focus",focusFun);
nameInput.addEventListener("blur",blurFun);
nameInput.addEventListener("change",function(){
    console.log(this.value);
});
