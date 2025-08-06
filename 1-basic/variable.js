const accountId = 4556
let accountEmail = "nitish@gmail.com"
var accountPassword = "12334"
accountCity = "Delhi"
let accountDetail;

//account_Id = 2
accountEmail = "nitish@gmail.com"
accountPassword = "123334"
accountCity = "Mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountDetail]);
