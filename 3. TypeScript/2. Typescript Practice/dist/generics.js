"use strict";
// Class Generics
class Stack {
    constructor(size) {
        this.elements = [];
        this.size = size;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.isFull()) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('The stack is empty!');
        }
        else {
            var out = this.elements.pop();
            return out !== undefined ? out : null;
        }
    }
}
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');
let wordStack = new Stack(words.length);
// push words into the stack
words.forEach(word => wordStack.push(word));
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
// Function Generics
let merge = function (obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
};
console.log(merge({ firstName: "darshan" }, { lastName: "khairnar" }));
