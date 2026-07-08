// 1. Student Report Card
/*
const student = {
    name: "Shivam",
    marks: [78, 82, 91, 67, 88]
}

const {marks} = student;

console.log(student.name);

const total = marks.reduce((acc, curr) => acc+curr, 0)
console.log(total);

const length = marks.length
console.log(length);
const avg = total/length
console.log(avg);

const highestMarks = Math.max(...marks)
console.log(highestMarks);

const lowestMarks = Math.min(...marks)
console.log(lowestMarks);

if(avg >= 40) {
    console.log(`result = pass`);
} else {
    console.log(`result = fail`);
}
*/

// 2. Shopping Cart
/*
const cart = [
    {name:"Keyboard", price:1200, quantity:2},
    {name:"Mouse", price:600, quantity:1},
    {name:"Monitor", price:8000, quantity:1}
]

for (const item of cart) {
    console.log(`${item.name} : ${item.price}`);
}

const subTotal = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
},0)
console.log(`Subtotal : ${subTotal}`);

const gstAmount = subTotal * 0.18
console.log(`GST(18%) : ${gstAmount}`);

const grandTotalAmount = subTotal + gstAmount
console.log(`Final amount to pay : ${grandTotalAmount}`);
*/

// 3. Employee Database
const employees = [
 {name:"Rahul", salary:50000},
 {name:"Shivam", salary:70000},
 {name:"Aman", salary:45000},
 {name:"Riya", salary:80000}
]
