//array creation
const array1 = [];

const array2 = [1,2,3,4];
const fruits = ["apple", "orange"];

console.log(array2[4]);
console.log(array2.length);

//array methods

array2.push(5);
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift(0);
console.log(array2);

//array of objects (JSON)
const person1 = {
    name:"abc"
};

const person2 = {
    name: "abc1"
}

const person3 = {
    name:"abc2"
}

const people = [person1,person2,person3];

const people1 = [
    {
        name:"abc"

    },
    {
        name:"abc1"
    },
    {
        name:"abc2"
    }
]

console.log(people1[0].name);

//array iteration

for(let i=0; i< array2.length; i++){
    //console.log(array2[i]);
}

//
for(let x of array2){
    //console.log(x);
}

array2.forEach(function(number){
    //console.log(number);
});

//array2.forEach(number => console.log(number));

//array2.reverse();

//console.log(array2);

array2.reverse().forEach(num=>console.log(num));
