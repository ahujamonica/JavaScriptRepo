const accountId = 144553
let accountEmail = "ahujamonica9321@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2 -- not allowed
accountEmail = "ma@ma.com"
accountPassword = "23234"
accountCity = "Gujarat"
let accountState;

// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountId, accountState ])

/*
Prefer not to use var because of its scope issue 
*/