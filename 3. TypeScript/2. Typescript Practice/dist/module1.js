"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.greet = exports.welcome = void 0;
function greet(name) {
    console.log(`Welcome, ${name} !`);
}
exports.greet = greet;
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
function welcome(name) {
    console.log(`Welcome to word Mr. ${name}, This is Sparta `);
}
exports.welcome = welcome;
