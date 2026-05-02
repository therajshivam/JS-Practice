const accountId = 144553
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not prefereable
let accountState;

// accountId = 2  -- const cant be changed

accountEmail = "abc@abc.com"
accountPassword = "21321"
accountCity = "Hyd"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// {
//     // scope
// }

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/