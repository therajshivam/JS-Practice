// 1. Student Report Card
const student = {
    name: "Shivam",
    marks: [78, 82, 91, 67, 88]
}

console.log(`Student Name : ${student.name}`);

const {marks} = student;
const totalMarks = marks.reduce( (acc, curr) => {
    return acc + curr;
},0)
console.log(`Total Marks : ${totalMarks}`);

const averageMarks = totalMarks/(marks.length)
console.log(`Average Marks : ${averageMarks.toFixed(2)}`);
const highestMarks = Math.max(...marks)
console.log(`Highest Marks : ${highestMarks}`);
const lowestMarks = Math.min(...marks)
console.log(`Lowest Marks : ${lowestMarks}`);

if (averageMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
    
}

// 2. Shopping Cart
const cart = [
    {name:"Keyboard", price:1200, quantity:2},
    {name:"Mouse", price:600, quantity:1},
    {name:"Monitor", price:8000, quantity:1}
]

for (const item of cart) {
    console.log(`${item.name} -> ${item.price * item.quantity}`);
}

const subTotal = 