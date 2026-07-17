// ques : the value of pi is 3.14 in js, how can u change it into 4?

// object related topic

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

// getOwnPropertyDescriptor

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


// const mynewObject = Object.create(null)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log(`error, chai nahi bani`);
    }
}
console.log(chai);
// check desciptor protperty
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// changing descriptor protperty
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
    console.log(`${value} : ${key}`);
    }
}