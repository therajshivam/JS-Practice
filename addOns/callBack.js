/*
callback : a function that is passes as an argument to another function.

            used to handle asynchronous operations:
            1. Reading a file
            2. Network Requests
            3. Interacting with databases

            'hey, when you are done, call this next'
*/

hello(goodbye);
function hello(callback){
    console.log('hello');
    callback();
}
function goodbye(){
    console.log('goodbye');
}

sum(calculateResult, 1, 2);
function sum(callback, x, y) {
    let result = x + y
    callback(result)
}
function calculateResult(result) {
    console.log(result);
}

