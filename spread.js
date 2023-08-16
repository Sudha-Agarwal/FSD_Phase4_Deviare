const num1 = [1,2,3];
const num2 = [4,5,6];

const array3 = [...num1, ...num2];

console.log(Math.min(1,2,3));

console.log(Math.min(...num1));

//default
function sum(num1, num2=0){
    return num1 + num2;
}

console.log(sum(1));
console.log(sum(2,3));


//rest parameters
function sum(...numbers){
    console.log(numbers);
}

sum(1);
sum(1,2);
sum(1,2,3);
sum(1,2,3,4);