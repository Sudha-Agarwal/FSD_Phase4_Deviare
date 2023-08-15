function one(){
    //console.log("one");
    //some code for fetching data from server
    //simulate the delay with setTimeout
    setTimeout(function(){
        console.log("one");
    },2000);
}
function two(){
    console.log("two");
}
//one();
//two();


//callback functions

function first(x){
    //console.log(x);
    x();//function calling
    console.log("first");
}

function second(){
    console.log("second");
}

first(second);

