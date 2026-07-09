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

const subTotal = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity) 
}, 0)
console.log(`Sub Total : ${subTotal.toFixed(2)}`);

const gst = subTotal*0.18
console.log(`GST : ${gst.toFixed(2)}`);

const finalAmount = subTotal + gst
console.log(`Final Amount : ${finalAmount.toFixed(2)}`);

// 3. Employee Database
const employees = [
 {name:"Rahul", salary:50000},
 {name:"Shivam", salary:70000},
 {name:"Aman", salary:45000},
 {name:"Riya", salary:80000}
]

const employeeNames = employees.forEach( employees => console.log(employees.name));

const highSalaryEmployees = employees.filter( employees => employees.salary > 50000)
console.log(highSalaryEmployees);

const totalSalary = employees.reduce( (acc, curr) => acc + curr.salary, 0)
console.log(totalSalary);

const averageSalary = totalSalary/employees.length
console.log(averageSalary);

const highestSalary = employees.forEach()
