function add(a,b,fun)
{
    console.log(a + b);
    console.log(fun());
}

function sayHello()
{
    return "Hello";
}

function sayHi()
{
    return "Hi";
}

add(2,3,sayHello);
add(5,3,sayHi);

add(53,2,() => {
    return "this is from annonomous function";
})
