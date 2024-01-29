// Basic types
let num:number = 20;
let str:string = "Darshan";
let bool:boolean = false;


console.log(num);
console.log(str);
console.log(bool);

//num = "hello"; will give error

let str1 = "hello" // autometically infer


// Any
let temp:any;

temp = 23;
console.log(temp);

temp = "Hello, world"; //will not give any error
console.log(temp);

// Array
let nums:number[] = [1,2,3,4,5,5,23,2];
console.log(nums);

// Touple
let tup:[number,string,boolean] = [123,"hello",true];
console.log(tup);

// Object
let student:{name:string,age:number} = 
{
    name:"Darshan",
    age:23
}

console.log(student.name);
console.log(student.age);

// Enum
enum days {
    monday=1,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sonday

}

console.log(days.monday);
console.log(days.friday);

// Allises
type int = number;
type str = string;
let date:int = 235;
console.log(date);

// interface
interface complex {
    real:number,
    imag : number
}

let c1:complex = {
    real:23,
    imag:21
}

console.log(c1);

// function

function multiply(num1:number,num2:number):number{
    return num1*num2;
}
console.log(multiply(23,42));

class Person{
    private name:string
    private age:number
    private dob:string

    public constructor(name,age,dob)
    {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }

    public greet():string
    {
        return `Hello, ${this.name}`;
    }

    public getAge():number{
        return this.age;
    }

    public getDob():string{
        return this.dob;
    }
}

class Employee extends Person{

    private emp_id:number;

    public constructor(name,age,dob,id)
    {
        super(name,age,dob);
        this.emp_id = id;
    }

    public getId():number{
        return this.emp_id;
    }
    
}

let p1 = new Person("Darshan",22,"07/12/2000");
let e1 = new Employee("Aakash",22,"01/01/2001",101);

console.log(p1);
console.log(e1);
