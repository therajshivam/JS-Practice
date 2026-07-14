// Promise
// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise is an object.

// 3 states of promises :
//     1. pending
//     2. fulfilled
//     3. rejected

// promises are : created and consumed.

// Creating a promise :
// "new" keyword is used to create a new instance.
// Promises takes a callback inside it and reduce callback hell.
// Promise callback function have two parts : resolve and reject.

const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptography, network calls

  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // connects with .then()
  }, 1000);
});

// Consuming a promise :
// .then() have direct relation with the "resolve".
// .then() have a callback in it, this function automatically recieves argument from the promise creation and returns in the promise consumption.

promiseOne.then(function () {
  console.log("Promise consumed");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// without storing in a variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing values in resolve()
// data can be passed in resolve() parameters
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing error in promise
// error based checking : suppose accessing file - if file access then resolve , if error not access then reject
// Reject() gives error
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "chai", password: "123" });
    } else {
      reject("ERROR! Something went wrong.");
    }
  }, 2000);
});

// .then() : return the values.
// .catch() : return the error.

// avoiding Callback Hell
// imp for DB connection
// .then() chaining : value returned from the first .then() will come into the next .then()
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// handling promise using async-await
// async-await works like .then() & .catch(), waits sometimes till the work is done, if work is completed then it will move else it will give error.
// async-await cant handle errors directly, for this we use try & catch.
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR! JS went wrong.");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// .then() & .catch() or async-await use any syntax to consume promises.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// activity : using an real api
// fetch() will return a promise

// try-catch syntax
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    // json parsing takes time to convert, hence wait using await
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// .then() & .catch() syntax
fetch("https://api.github.com/users/therajshivam")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// github data comes before the earlier promises
