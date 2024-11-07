//ERROR


//! IIFE -

//* An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed right away. It helps to create a private scope, preventing variables and functions from polluting the global namespace. The typical syntax of an IIFE is:


// SYNTAX

//? normal function call inside the parenthesis

// (function(){
//     console.log("hello aman")
// }())
//? in arrow function the call should be outside the parenthesis

// (()=>{console.log("aman")})();

//* Use Cases of IIFE

//* Avoiding Global Scope Pollution:

//* IIFEs are commonly used to prevent variables from leaking into the global scope, especially in JavaScript files that may be included in larger projects with many global variables.

//! HOF

/* 1. Higher-Order Functions (HOF) 
  
A Higher-Order Function (HOF) is a function that either:

Takes one or more functions as arguments, or
Returns a function as its result. 
 


2.--> Callback Functions
A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed or when it is explicitly called.

In JavaScript, callback functions are used in many built-in functions, event handling, and asynchronous programming (e.g., setTimeout, fetch, or when working with Promises).

*/

function calculator(operator){
    if(operator=="+"){
        return function(a,b)
        {
            console.log(a+b)
        }
    }

    if(operator=="-"){
        return function(a,b)
        {
            console.log(a-b)
        }
    }
}

let sum=calculator("+")
sum(1,1)
let min=calculator("-")
min(1,1)

