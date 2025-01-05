console.log("2" > 1);
console.log("02" > 1);

// Here the "2" string is directly converted in number therefore shows true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0);//true

// The reason is that an equality check == and comparisons < , > , <=  and >= works differently. Comparisons convert the null to a number, treating it as zero. Thats why console.log(null>=0); shows true others as false

// When comparing undefined with one and zero then it a;ways shows false

// === : strict check, it also checks the data types
console.log("2" == 2); // true, as it is not stricter, it converts string to number
console.log("2" === 2); // false, as it checks datatypes and not converts it 
