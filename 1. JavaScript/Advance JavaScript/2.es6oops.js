class Student{

    constructor(fname,lname,age,address)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
    }

    static college = "DYP";

    greet()
    {
        return `Hello Mr. ${this.fname} ${this.lname} !!`;
    }

}

let s1 = new Student("Darshan","Khairnar",22,"Anand Nagar, Malegaon");
console.log(s1);
console.log(Student.college);
console.log(s1.greet());

let Greetings = {

    normalGreet(){
        return "Hello";
    },

    goodMoringGreet()
    {
        return "Good Morning";
    }
}

Object.assign(Student.prototype,Greetings);

let s2 = new Student("Abhishek","Khairnar",20,"Talegaon");
console.log(s2.goodMoringGreet());

class Moniter extends Student{

    #moniter_id = 0;
    constructor(fname,lname,age,address,id)
    {
        super(fname,lname,age,address);
        this.#moniter_id  = id;
    }

    getID(){
        return this.#moniter_id;
    }

}



let m1 = new Moniter("Aakash","Khairnar",22,"Joyti Nagar, Malegaon",123);
console.log(m1);
console.log(m1.getID());