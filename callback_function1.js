//without callback
function serverRequest(){
    setTimeout(function(){
        let data = "Data from server";
        return data;
    }, 2000);
}

function printData(data){
    console.log(data);
}

//let data = serverRequest();
//printData(data);

//with callback
function serverRequest1(x){
    setTimeout(function() {
        let data = "Data from server";
        x(data);        
    }, 2000);
}
function printData1(data){
    console.log(data);
}
//one way of writing
//serverRequest1(printData1);

//second way
serverRequest1(function printData1(data){
    console.log(data);
});

//third way with anonymous callback function
serverRequest1(function(data){
    console.log(data);
});