
//  *! Data Types
// ! Primitive data types      -> string, boolean, number, null, undefined, symbol
// *! Non-Primitive data types -> array, functions, objects

const { getActiveResourcesInfo } = require("node:process");

// const { log } = require("node:console");

//  *? string
// let name = "suman kathayat";
// let fname = `hello, my name is ${name}`
// console.log(fname)
// let nname = 'suman';

//  *? number
// let num = 23;

//  *? boolean
// let isTrue = false;

//  *? bigint
//  *? undefined
// let firstname;
// let lname = undefined;  // we defined its undefined
// console.log(firstname)  // value not defined so its undefined

//  *? null
// let names = null;   // null is defined here


//  *? symbol
// let sm1 = Symbol("value");
// let sm2 = Symbol("value");


//  *? Objects
// let users = ["suman", "bibek", "aayush", "manish"];
// let user = {fname: "Suman", lname: "Kathayat"};


// *! Operators
// * &&     -> and
// * \\     -> or 
// * !      ->  not 



// *! Non-Primitive Data types
// *? Objects
// let username = {
//     firstName: "Suman",
//     isLoggedin: true
// };

// * Accessing objects
// username.firstName
// username[firstname]

// *! Array
// let superHeroes = ["superman", "batman", "spiderman", "iron-man", "hulk", true];

// *? Hard copy of the array
let names = ["suman", "biek", "rabi", "manish", "rohan"]
let hardCopynames = [...names];
names.pop();
console.log(hardCopynames)  // here we poped from names but we still have our copy in hardcopynames



// *! Conditions
// num1 = 4;
// num2 = 5;
// *? if else
    // if (num1 > num2) {
//     console.log("Num 1 is greather than num2");
// }else {
    //     console.log("Num 2 is greather than num2");
    
    // }
    

// *! Loops
// *? while
// *? do while
// *? for in/of/each


// *! Functions
function funName(parameter) {
    return parameter
}
// *? Arrow Function
// function greet() {}      // regular function
// const greet = () => {}   // arrow function

    const add = (a, b) =>{
        return a + b;
    };


// *? High order function


// *? Nested functions
