/*
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

// if (averageMarks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }
console.log(`Result : ${averageMarks >= 40 ? "Pass" : "Fail"}`);

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

employees.forEach( employees => console.log(employees.name));

const highSalaryEmployees = employees.filter( employees => employees.salary > 50000)
console.log(highSalaryEmployees);

const totalSalary = employees.reduce( (acc, curr) => acc + curr.salary, 0)
console.log(totalSalary);

const averageSalary = totalSalary/employees.length
console.log(averageSalary);

const highestSalary = employees.reduce( (highest, employee) => employee.salary > highest.salary ? employee : highest)
console.log(highestSalary);
console.log(highestSalary.salary);
*/

/*
// 4. Word Analyzer
const sentence = "JavaScript is Awesome and JavaScript is Powerful";

for (const characters of sentence) {
    console.log(`${characters}`);
}
console.log(`total characters : ${sentence.length}`);

const wordArray = sentence.split(" ");
for (const words of wordArray) {
    console.log(`${words}`);
}
console.log(`total words : ${wordArray.length}`);

const longestWord = wordArray.reduce( (max, word) => word.length > max.length ? word : max)
console.log(longestWord);

console.log(wordArray.includes("Awesome"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.replaceAll("JavaScript", "JS"));

// 5. Movie Database
const movies = [
 {title:"Inception", rating:9},
 {title:"Avatar", rating:7},
 {title:"Interstellar", rating:10},
 {title:"Jawan", rating:8}
]

movies.forEach( movie => console.log(movie.title))

const highRatedMovies = movies.filter(movie => movie.rating >= 8)
console.log(highRatedMovies);

const totalRating = movies.reduce( (total, movie) =>  total + movie.rating, 0 ) 
console.log(totalRating);
const avgRating = totalRating/movies.length
console.log(avgRating);

const highestRatedMovie = movies.reduce( (max, movie) => movie.rating > max.rating ? movie : max)
console.log(highestRatedMovie);
console.log(highestRatedMovie.title);

const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating)
console.log(sortedMovies);
*/

/*
// 6. Bank Account
const account = {
  holder: "Shivam",
  balance: 15000,
};

function checkBalance() {
  console.log(
    `Account Holder : ${account.holder} \nAccount Balance : ${account.balance}`,
  );
}
checkBalance();

function deposit(amount) {
  if (amount <= 0) {
    console.log("Please enter a valid amount.");
    return;
  }

  account.balance += amount;

  console.log(`${amount} deposited successfully.`);
  checkBalance()
}
deposit(5000);

function withdraw(amount) {
  if (amount <= 0) {
    console.log("Please enter a valid amount.");
    return;
  }
  if (account.balance >= amount) {
    account.balance -= amount;
    console.log(`${amount} withdrawn successfully.}`);
    checkBalance()
  } else {
    console.log(`Insufficient Balance!`);
  }
}
withdraw(10000);
*/

// Q7 – Library Management
const library = [
    { title: "Atomic Habits", available: true },
    { title: "Deep Work", available: false },
    { title: "Clean Code", available: true },
    { title: "The Pragmatic Programmer", available: true }
];

const availableBooks = library.filter( books => books.available === true)
console.log(availableBooks);

const unavailableBooks = library.filter(books => books.available === false)
console.log(unavailableBooks.length);

function bookExists(title) {
    return library.some(book => book.title.toLowerCase() === title.toLowerCase())
}
console.log(bookExists("atomic habits"));

function borrowBook(title) {
    const foundBook = ( book => book.title.toLowerCase() === title.toLowerCase())

    if (!bookExists) {
        console.log(`Book not found!`);
        return;
    }

    if(!foundBook.available){
        console.log(`Books is currently unavailable`);
        return;
    }

    foundBook.available = false;
    console.log(`Success! You have borrowed "${foundBook.title}".`);
}

borrowBook("clean code")