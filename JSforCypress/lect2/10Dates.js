// JS Date object represents a single moment in time in a platform-independent format.
// Date objects encapsulates an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.

// Temporal Api - in future 

// date instance
let myDate = new Date()
console.log("Raw Date: ", myDate);

console.log("Typeof Date: ", typeof myDate); // date is an object in JS

// conversion of date
console.log("String: ", myDate.toString()); // conversion into string
console.log("DateString: ", myDate.toDateString()); 
console.log("LocaleString: ", myDate.toLocaleString()); 

console.log("ISOString: ", myDate.toISOString()); 
console.log("JSON: ", myDate.toJSON()); 
console.log("LocaleDateString: ", myDate.toLocaleDateString()); 
console.log("LocaleTimeString: ", myDate.toLocaleTimeString()); 
console.log("TimeString: ", myDate.toTimeString()); 
console.log("UTCString: ", myDate.toUTCString()); 

console.log("+++++++++++++++++++ specific date +++++++++++++++++");

// declaring specific date
let myCreatedDate = new Date(2026, 0, 19) // months start with 0 in JS
console.log("myCreatedDate: ", myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDateAndTime = new Date(2023, 0, 23, 5, 3, 20) 
console.log("myCreatedDateAndTime: ", myCreatedDateAndTime.toLocaleString());

console.log("+++++++++++++++++++ date format changing +++++++++++++++++");


// date format changing
let dateFormat = new Date("2023-01-14") // yy-mm-dd
console.log(dateFormat.toLocaleString());

let newDateFormat = new Date("01-14-2023") // mm-dd-yy
console.log(newDateFormat.toLocaleString());

// time stamp (quizes, polls)
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(dateFormat.getTime());

console.log(Date.now()); 
console.log(Math.floor(Date.now()/1000)); // into seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);

// `${newDate.getDate()} and the time is`

// internationalisation
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));
