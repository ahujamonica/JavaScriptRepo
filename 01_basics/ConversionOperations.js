
let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



/*
null => Object
"33" => 33
"33abc" => NaN not a number
true => 1, false => 0
*/

// let IsLoggedIn = ""
// let booleanIsLoggedIn = Boolean(IsLoggedIn)

// console.log(booleanIsLoggedIn);
// //1 => true
// //empty string => false ("")
// //"abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 is converted in string, it still appears as 33 tho
// typeof will give string