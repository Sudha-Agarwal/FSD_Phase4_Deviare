class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    sayHello(){
        console.log("Hello " + this.name);
    }

    get name(){
        console.log("getter");
        return this._name;
    }
}

let person1 = new Person("Sudha", 30);
let person2 = new Person("Sudha1", 40);

person1.sayHello();
person2.sayHello();

class Student extends Person{
    constructor(name, age, rollNo){
       super(name,age);
        this.rollNo = rollNo;
    }
     print(){
        super.sayHello();        

    }
}

let student1 = new Student("Sudha", 20, 1);
student1.print();

