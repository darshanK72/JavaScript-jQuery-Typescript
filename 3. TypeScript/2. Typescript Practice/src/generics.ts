// Class Generics
class Stack<T> {
    private size;
    private elements: T[] = [];

    constructor(size: number) {
        this.size = size;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.isFull()) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.isEmpty()) {
            throw new Error('The stack is empty!');
        }
        else{
            var out =  this.elements.pop()
            return out !== undefined ? out : null as any;
        }
    }
}


let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}

// Function Generics
let merge = function<U extends object, V extends object>(obj1 : U, obj2 : V){
    return {
        ...obj1, // Destructucturing Object
        ...obj2
    }
}

console.log(merge({firstName : "darshan"},{lastName : "khairnar"}));

