// creating promises

// promise is an object
// new is used to create a new instance
// promises take callback in it , it also reduce the callback hell

// promises have two parts : resolve and reject


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()  // connects with .then
    }, 1000)
    
})

// consuming promises
// .then have direct relations with resolve

promiseOne.then(function(){
    // returns the value from above 
    console.log("Promise consumed");    
})

// always "async task is comsumed will come  " ; because first the task is completed then the task is resolved then the "promise consumed " part will come

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// without storing in an function

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // we can pass data in resolve parameters 
        resolve({username: "Chai", email: "chai@example.com"})
    })
}) 

promiseThree.then(function(user){
    console.log(user);
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('ERROR: SOETHING WENT WRONG')
        }
    }, 1000)
})

// avoiding callback hell
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS WENT WRONG')
        }
    }, 1000)
});

async function consumePromiseFive () {
    // const response = await promiseFive 
    // console.log(response);    
    
    try {
        const response = await promiseFive 
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// try-catch syntax

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // .jason also takes time to get converted; therefore we have to wait using await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// .then .catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


