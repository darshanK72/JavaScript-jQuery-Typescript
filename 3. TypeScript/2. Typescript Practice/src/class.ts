class Person1{
    private static count = 0;
    private firstName : string;
    private lastName : string;
    private age : number;
    private marks : number;
    private dateOfBirth : Date;

    public constructor(firstName:string,lastName:string,age:number,marks:number,dateOfBirth:Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.marks = marks;
        this.dateOfBirth = dateOfBirth;

        Person1.count++;
    }

    public getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    public getAge() : number{
        return this.age;
    }

    public getMarks() : number{
        return this.marks;
    }

    public getDateOfBirth() : Date{
        return this.dateOfBirth;
    }

    public getPersonDetails(): string{
        return `Full Name : ${this.getFullName()}\nDate Of Birth : ${this.getDateOfBirth()}`;
    }

    public static getCount(){
        return Person1.count;
    }
}

let darshan1 = new Person1("Darshan","Khairnar",23,88.00,new Date("07/12/2000"));

console.log(darshan1.getPersonDetails());

class Employee1 extends Person1{
    private employeeId : number;
    private department : string;

    public constructor(firstName:string,lastName:string,age:number,marks:number,dateOfBirth:Date,employeeId:number,department:string) {
       super(firstName,lastName,age,marks,dateOfBirth);
       this.employeeId = employeeId;
       this.department = department;
    }

    public getEmployeeDetails() : string {
        return `${this.getPersonDetails()}\nEmployee ID : ${this.employeeId}\nDepartment : ${this.department}`;
    }
}

let prasad = new Employee1("Prasad","Khairnar",23,72.23,new Date("25/06/2000"),101,"Mechanical");
console.log(prasad.getEmployeeDetails());

console.log(Person1.getCount());


abstract class Animal{
    public abstract makeSound() : string;
    public abstract move(): string;
    public abstract eat(): string;

    public getDetails(): string{
        return "This are details of animal";
    }
}

class Dog extends Animal{
    public makeSound(): string {
        return "Bow Bow";
    }
    public move(): string {
        return "Moving";
    }
    public eat(): string {
        return "Eating";
    }

}

let ani: Animal = new Dog();

console.log(ani.makeSound());


// Class Declaration
class person
{
    public first_name:string;
    public last_name:string;
    public roll_no:number;
    public marraied:boolean;

    constructor(f:string,l:string,r:number,m:boolean)
    {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }

    public isMarried():boolean 
    {
        return  this.marraied;
    }
    
    public greet():string 
    {
        return "Hello, Mr " + this.first_name + " " + this.last_name;
    }
    
}

// Object creation
let p2 = new person("Darshan","Khairnar",1232,false);
console.log(p2.greet());