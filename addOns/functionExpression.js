// function declaration 
// define a reusable block of code that performs a specific task.

// function expression
// a way to define function as values or variables.

const hello = function () {
    console.log('hello');
}


setTimeout(function(){
    console.log(hello);
}, 3000);

