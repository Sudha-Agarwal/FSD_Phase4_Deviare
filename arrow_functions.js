function sum(num1, num2){
    let num3 = num1 + num2;
    return num3;
}

let func = (num1, num2) => num1 + num2;    

let sqr = num => num * num;

let print = () => "Hello";

console.log(func(2,3));
console.log(sqr(2));
console.log(print());