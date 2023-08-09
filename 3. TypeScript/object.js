/**
 * Object in Typescript
 */
// Old Function style Objects
function getObject(name, marks, isStudent) {
    this.name = name;
    this.marks = marks;
    this.isStudent = isStudent;
}
var obj = new getObject("Darshan", 63.88, true);
console.log(obj.name);
console.log(obj.marks);
console.log(obj['isStudent']);
// Object Literal
var student = {
    firstName: "Darshan",
    lastName: "Khairnar",
    email: "darshankhairnar72@gmail.com",
    age: 22,
    salary: 26092.25,
    isEmployee: true,
};
console.log(student);
console.log(student.firstName);
console.log(student['lastName']);
console.log(student.email);
console.log(student['isEmployee']);
