//! MAP IS HOF 
//NOTE -  we can use index also by using map fn. 

// let arr=[-1,1,2,3,4,5,6,7,8];


// let narr=arr.map(function(item,index){
//     console.log(item,index)
//     return item*2 
    
// })
// console.log(narr)

// using arrow function

// let narr =arr.map((item,index)=>{
//     return item*2;
// })

// console.log(narr)




//! FILTER ---
// let arr=[-1,1,2,3,4,5,6,7,8];



// let Narr=arr.filter((item,index)=>{

//     // return item%2==0   // even 
//     return item<0  
//     return  
// })

// console.log(Narr)


// let str="aman kumar";

// let str1=str.filter((item)=>{
//     return item=a,e,i,o,u;
// })
// console.log(str1)



//! REDUCE

// let arr=[-1,1,2,3,4,5,6,7,8];

 
// let sum=arr.reduce((accumulator,item)=>{
//     return accumulator+item

// })



//? 2D ARRAYS

let arr2=[[1,2,3,4,5,6],[true,false],[{},function(){}]]


for(let i=0;i<arr2.length;i++){
    for(let j=0;j<arr2[i].length;j++){
        
        console.log(arr2[i][j])
    }
}