// forEach()
const coding = ["js", "ruby", "java", "py", "cpp"]
const value = coding.forEach( (item) => {
    // console.log(item);
    // return item;
})

// console.log(value); // output : undefined
// forEach() doesnt return any value 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// filter
// filter returns the values
// filter() returns a NEW array containing only the elements that satisfy the condition.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4) 
// console.log(newNums);

// filter takes callback function inside it - each value is accessed in it and one condition is used to check, true condition values are returned else not
// The callback should return true or false.
// If true → element is included.
// If false → element is skipped.


// important thing to know
const newNums2 = myNums.filter( (num) => {
    return num > 4})         // explicit reurn : return keyword is necessary as because of curly braces it started block scope
// console.log(newNums2);


// without filter(), with forEach()
const newNums3 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
    }
}) 
// console.log(newNums3);
// We manually push matching elements.
// filter() does this automatically.


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'
} )

console.log(userBooks);
