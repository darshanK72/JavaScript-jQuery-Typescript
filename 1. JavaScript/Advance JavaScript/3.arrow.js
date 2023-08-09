function add(a,b)
{
    return a + b;
}

let addA = (a,b) =>{
    return a + b;
};

let addA2 = (a,b) => a+b;

let rand = () => Math.floor(Math.random()*10 + 1);

console.log(add(1,3));
console.log(addA(23,53));
console.log(addA2(23,56));
console.log(rand());