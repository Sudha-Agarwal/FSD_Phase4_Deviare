let y = 10; //global variable
function outerFunction(){
    const outerVariable = "Outer";

    function innerFunction(){
        let x;
        x= 10;
        console.log(outerVariable);
    }
    x = 20;
    return innerFunction;
}

let closure = outerFunction(); //the inner function is being returned
closure();
console.log(outerVariable);

//closures allow data encapsulation, private variables.

/*
class Person{
    int id;//state
    String name;

    //behaviour
void print(){
    sysout(id);
}
}*/




