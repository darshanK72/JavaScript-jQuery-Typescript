function greet(name:string){
    console.log(`Welcome, ${name} !`)
}

function add(num1: number, num2: number): number{
    return num1 + num2;
}


export function welcome(name:string){
    console.log(`Welcome to word Mr. ${name}, This is Sparta `);
}

export default interface Pair<K,V> {
    key : K;
    value : V;
}

export {greet,add};

