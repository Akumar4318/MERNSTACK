// let n=Number(prompt("enter n"))
// for(let i=0;i<=3;i++){
//     let ans=" "
//     for(let j=0;j<=3;j++){
//         ans=ans+"* "
//     }
//     console.log(ans)
// }

//!
// let n1=prompt("enter n1")
// function print1ton(n1){
//     if(n1==0){

//         return 
//     }
    

//     print1ton(n1-1)
//     console.log(n1)
 
// }
// let n=0;
// print1ton(n1)

//! factorial
let n=prompt("enter n")
function factorial(n){
    if(n==1){
        return 1
    }
    if(n==0){
        return 1
    }
    
   return n*factorial(n-1)

}
factorial(n)

console.log(factorial(n))
// !reverse a string

let str=prompt("enter a string")
 
function reverse(str){
    let n=str.length;
    if(n==0){
        return str
    }
  
    return   str.at(n-1)*reverse(n-1)
   

}
reverse(str)