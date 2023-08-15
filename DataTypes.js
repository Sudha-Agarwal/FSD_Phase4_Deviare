let x = 10;
console.log(10);

//object creation
//1. by object literal
//2. by creating instance of object directly(using new keyword)
//3. by using constructor functions

//1.
emp1 = {
    id:1,
    name:"Sudha",
    sal:10000
};
emp2 = {
    id:2,
    name:'Sudha1',
    sal:20000,
    age:30
}

//constructor function
function Person(name, age){
    this.name = name;
    this.age = age;

    this.print = function(){
        console.log("Name is: " + this.name);
    }
}

//object creation
let person1 = new Person("Sudha", 30);
let person2 = new Person("ABC", 25);


//accessing properties of the object
console.log(person2.name);

//
person1.print();


//function definition
function sum(num1, num2){
    let num3 = num1 + num2;
    //return num3;    
}

//function calling
let result = sum(2,3);
console.log(result);


