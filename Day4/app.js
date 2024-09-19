// let age =45
// let isStudent = true;

// if (age >18){
//     if(isStudent == true){
//         console.log(" your are eligible")
//     }
//     else {
//         console.log("your not eligible ")
//     }
// }
// else {
//     console.log("your not eligible")
// }

//? which type of number it is?

// let num=Number(prompt("enter value for num"))

// if(num>0){
//     console.log("num is positive")
//     alert("num is positive")

// }
// else if(num===0)
// {
//     alert("num is zero")
//     console.log("num is zero")
// }
// else {
    
//     console.log("num is negative")
//     alert("num is negative")
// }

// ! check odd and even

// let num=Number(prompt("Enter the value"))

// let ans=num%2;


// if(num===0){
//     alert("num is zero")
// }
// else if(ans==0){
//     alert("num is even")
// }
// else{
//     alert(" num is odd")
// }

//* grading marks problem 1- 5 sub 2- avg 3- grad on the basis marks




//! discount problem price<500 give discount of 5% and price>500 give 15%

let price= Number(prompt("enter the total price"))

if(price<500){
   // alert((price*5)/100)

    alert(" toatal discount on your product " + (price*5)/100)
}
else{
    alert((price*15)/100)
}