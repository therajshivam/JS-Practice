// passing parameters in js

// in situations like shopping cart, user will add the number, and we dont know the number of items will come
// when we dont know the how many arguments will come, we have to design the parameters:

// rest operator => ... ; three dots; to packing the individual items into a bundle
// this will give an array of different items
function calculateCartPrice(...num1) {
    return num1
} 

// console.log(calculateCartPrice(200, 300, 400, 500, 2000))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// objects and function

const user = {
    username: "shivam",
    price: 199   // if object name is not matched then the value will come undefined
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleObject(user)

// another way
handleObject({
    username: "sam",
    price: 399
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// arrays and function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));

