"use strict";
// function
function greet(name) {
    console.log(`Welcome, ${name} !`);
}
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(523, 63));
// Anonomnys Function
let multiply1 = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply1(25, 74));
// Default Parameters 
let hello = function (num1 = 420, num2 = 88) {
    return num1 % num2;
};
console.log(hello());
let addRange = function (...arr) {
    let sum = 0;
    for (i = 0; i > arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(addRange(653, 6, 34, 7, 3, 4, 5, 35, 63, 45));
