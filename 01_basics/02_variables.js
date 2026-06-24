
const accountId = 542156 // use to declare constant, constant cant be change
let accountEmail = "abc@gmail.com" // use to declare variable
var accountPassword = "12345"
accountCity = "Jaipur" //do not use
let accountState; // declaration; output is undefined 

// accountId = 2 // not allowed

accountEmail = "xyz@zyz.com"
accountPassword = "121212"
accountCity = "Bengaluru" 

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and in functional scope
{} --> Scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// practice
const uid = '20BCS'
const name = 'Shivam Raj'
let section = 612
var block = 'A1'
university = 'CU'
let department
console.log(uid)
console.table([uid, name, section, block, university, department])
