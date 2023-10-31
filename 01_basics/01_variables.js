const accountId = 155223
let accountEmail = "mohd123@gmail.com"
var accountPassword = "123456"
accountCity = "Hyderabad"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "789"
accountCity = "Jaipur"
let accountState;  
/* new challenge (if we create variable without giving value it will be undefined) */

console.log(accountId);

/*
prefer  not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])