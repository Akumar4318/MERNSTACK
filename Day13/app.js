//! MAP IS HOF 
//NOTE -  we can use index also by using map fn. 

let arr=[1,2,3,4,5,6,7,8];


let narr=arr.map(function(item,index){
    console.log(item,index)
    return item*2 
    
})
console.log(narr)

using arrow function
let narr =arr.map((item,index)=>{
    return item*2;
})

console.log(narr)




//! FILLTER ---
