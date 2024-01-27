const accountId = 542156 // use to declare constant, constant cant be change
let accountEmail = "abc@gmail.com" // use to declare variable
var accountPassword = "12345"
accountCity = "Jaipur" //do not use
let accountState; // undefined 

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