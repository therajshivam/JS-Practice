// Dates
// JS Date objects represent a single moment in time
// represents in milliseconds since midnight at the beginning of January 1, 1970, UTC

// let myDate = new Date() // date instance(object)
// console.log(myDate);
// console.log(typeof myDate); // date is an object in JS
// console.log(myDate.toString()); // conversion into string
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON()); 
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.toLocaleTimeString()); 
// console.log(myDate.toTimeString()); 
// console.log(myDate.toUTCString()); 

// declaring specific date
// let myCreatedDate = new Date(2023, 0, 23) // months start with 0 in JS
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 20) ;
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:20 AM

// date format changing
let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 5:30:00 AM

// time stamp (quizes, polls)
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()); // millisecond
console.log(Math.floor(Date.now()/1000)); // into seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDat()} and the time is`

// internationalisation
newDate.toLocaleString('default',{
    weekday: "long",

})   
