// Two types of momory : Stack (primitive) and Heap (non-primitive)

// STACK gives copy value
// HEAP gives reference value; changes will be affect original value

let myYoutubeName = "one"
let anotherName = "two"

console.log(myYoutubeName);
console.log(anotherName);  

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "two@google.com"

console.log(userOne.email);
console.log(userTwo.email);


