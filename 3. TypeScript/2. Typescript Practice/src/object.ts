/**
 * Object in Typescript
 */

// Old Function style Objects
// function getObject(name : string, marks : number, isStudent : boolean){
//     this.name = name;
//     this.marks = marks;
//     this.isStudent = isStudent;
// }
// var obj = new getObject("Darshan",63.88,true);
// console.log(obj.name);
// console.log(obj.marks);
// console.log(obj['isStudent']);


// Object Literal
var student2 = {
    firstName: "Darshan",
    lastName : "Khairnar",
    email : "darshankhairnar72@gmail.com",
    age : 22,
    salary : 26092.25,
    isEmployee : true,
}
console.log(student2);
console.log(student2.firstName);
console.log(student2['lastName']);
console.log(student2.email);
console.log(student2['isEmployee']);

// for in
for(var item in student2){
    console.log(item);
}