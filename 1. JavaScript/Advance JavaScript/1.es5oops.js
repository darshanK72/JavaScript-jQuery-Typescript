var person = {
    firstName: "Darshan",
    lastName : "Khairnar",
    age : 22,

    greet : function()
    {
        return `Hello, Good Morning ${this.firstName}`;
    }
}

console.log(person.age);
console.log(person.greet());


var p1 = {}
p1.name = "Darshan Khainrar";
p1.greet = function(){
    return `Hello, Good Morning ${this.name}`;
}
console.log(p1);
console.log(p1.greet());



function Person(fname,lname,age)
{
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;

}

Person.prototype.greet =  function()
{
        return `Hello, Good Morning ${this.firstName}`;
}

var p2 = new Person("Abhishek","Khairnar",20);
var p3 = new Person("Aakash","Khairnar",22);

console.log(p2);
console.log(p3);

console.log(p2.greet());
console.log(p3.greet());