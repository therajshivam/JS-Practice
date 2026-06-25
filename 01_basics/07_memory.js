// Two types of memory : Stack (primitive) and Heap (non-primitive)

// STACK : STACK stores primitive values. Copying creates a new value.
// - Used for Primitive Data Types.
// - Stores the actual value.
// - Faster access.
// - When copied, a new copy of the value is created.

let myYoutubeName = "hiteshchaudhary";
let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(myYoutubeName); // The original value remains unchanged.
console.log(anotherName);


// HEAP : HEAP stores objects. Variables store references (addresses) to those objects. Copying shares the same reference, so changes affect the original object.
// - Used for Non-Primitive Data Types.
// - The actual object is stored in the Heap.
// - Variables store a reference (address) to that object.
// - When copied, the reference is copied, not the object.

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne;
userTwo.email = "two@google.com";

console.log(userOne.email); // Both variables point to the same object.
console.log(userTwo.email); // Both variables point to the same object.

