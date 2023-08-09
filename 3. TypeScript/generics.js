var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Class Generics
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.elements = [];
        this.size = size;
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.isFull()) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error('The stack is empty!');
        }
        else {
            var out = this.elements.pop();
            return out !== undefined ? out : null;
        }
    };
    return Stack;
}());
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
// Function Generics
var merge = function (obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
};
console.log(merge({ firstName: "darshan" }, { lastName: "khairnar" }));
