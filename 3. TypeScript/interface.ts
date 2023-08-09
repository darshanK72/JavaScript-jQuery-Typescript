// Object Interface
interface Employee{
    name : string,
    employeeId : number,
    department : string,
    salary : number
}

let emp1: Employee = {
    name : "Darshan",
    employeeId : 101,
    department : "CFMG",
    salary : 26092
}

console.log(emp1);

// Function Interface

interface StringOperation {
    (input : string) : string
}

let toUpper : StringOperation = function(input:string){
    return input.toUpperCase();
}

let toLower : StringOperation = function(input:string){
    return input.toLowerCase();
}

console.log(toLower("Hello world, this is sparta"));

// Class Interface

interface JsonResult{
    toJson(): string;
    toObject() : object;
}

class Person implements JsonResult{
    name : string;
    dateOfBirth : Date;
    age : number;
    jsonString : string;

    public constructor(name:string,dateOfBirth:Date,age:number){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
    }
    

    public toJson() : string {
        this.jsonString = JSON.stringify(this)
        return this.jsonString;
    }

    public toObject(): object {
        if(this.jsonString == null){
            return this;
        }
        return JSON.parse(this.jsonString);
    }
}

let darshan = new Person("Darshan Khairnar",new Date("07/12/2000"),22)

console.log(darshan.toJson());
console.log(darshan.toObject());


// Generic Interface

interface Pair<K, V> {
    key: K;
    value: V;
}

let point : Pair<string,string> = {
    key : "x",
    value : "y"

}

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items :  T[] = [];

    public add(o: T) : void{
        this.items.push(o);
    }

    public remove(o: T): void {
        let i = this.items.indexOf(o);
        if(i > -1){
            this.items.splice(i,1);
        }
    }

    public display(){
        console.log(lst);
    }
}

let lst = new List<number>();
lst.add(10);
lst.add(20);
lst.add(30);

lst.remove(10);

lst.display();

interface person{
    first_name:string;
    last_name:string;
    roll_no:number;
    marraied:boolean;

    isMarrid():boolean;
    greet():string;
}


class employee implements person
{
    public first_name: string;
    public last_name: string;
    public roll_no: number;
    public marraied: boolean;

    constructor(f:string,l:string,r:number,m:boolean)
    {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    public isMarried(): boolean {
        throw new Error("Method not implemented.");
    }

    public isMarrid(): boolean {
        return this.marraied
    }

  
    public greet(): string {
        return "Hello " + this.first_name +  " " + this.last_name ;
    }

}

let e1 = new employee("Darshan","Khairnar",124,true);

console.log(e1.isMarrid());