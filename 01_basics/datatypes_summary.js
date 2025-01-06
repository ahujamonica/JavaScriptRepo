// primitive 
// 7 types: strings, number, boolean, null, undefined, symbol(used to make something unique), bigInt

const score = 100
const valueScore = 100.4 
// theres no float in here, both are categorized in number only
// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const id = Symbol('123')
const anotherid = Symbol('123')

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// reference type (non primitive)
// array, objects, functions

const heros = ["Jesus, Holy_father, Holy_Spirit"]; // array

let myObj = {
    name:"monica",
    age: 19,
} // object

const myFunction = function(){
    console.log("Hellooooo");
}

console.log(typeof myFunction);

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/