/*
function increment(){
    let count = 0;
    count ++;   
    console.log(count);
}
increment();
increment();
increment();

*/
//console.log(count);
//count ++;
//console.log(count);

//

function add(){
    let counter = 0;

    function plus(){
        counter++;
        console.log(counter);
    }
    return plus;
}

let increment = add();
increment();
increment();
increment();

