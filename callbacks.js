// high order function and callbacks

// high order function -> a function that takes a function as an argument.

// normal function
function add(a, b){
    return a + b
}

console.log(add(2, 4))

// performing it with high order function perspective or callback 
// lets assume that add(2, 4) is a task which takes some time to execute, may be api call.
// we can say that when add(2, 4) will happen u can run another function 

function addition(a, b, cb){
    let result = a + b;
    cb(result)
} // this is a high order function because it is accepting another function as an argument.
// cb is called as callback 

// addition(2, 4, function(val){
//     console.log(val);
// })

addition(2, 4, val => console.log(val))


// a function can return another function
function sumNum(a, b, cb){
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

let funcResult = sumNum(2, 4, ()=>{})
funcResult()


// Callback Hell
// Situation in js, here callbacks are nested within another callbacks to the degree where the code is difficult to read.
// It is an old pattern to handle asynchronous functions.
// In modern js, we use Promises and async/await to avoid Callback Hell.


function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 complete");
        callback()
    }, 2000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 complete");
        callback()
    }, 1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 complete");
        callback()
    }, 3000)
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 complete");
        callback()
    }, 1500)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks complete"); 
            })
        })
    })
})
