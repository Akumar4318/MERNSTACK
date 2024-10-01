//  const arr=[];

//  arr.push("aman")
//  console.log(arr)


 //! FOR OFF--

//  const arr=[1,2,4,5,6,3,1,6,4,2,6,8,5];

//  let sum=0;
//NOTE -  here value is used as variable to store the array item  one by one and put in e variable
//  for(let value of arr){
    // console.log(value);
    
//     sum=sum+value;
    
    
//  }

//  console.log(sum)


 //! swap two no.
// M1
//  let a =1;
//  let b=100;


//  temp=a;
//  a=b;
//  b=temp;

//  console.log(`value of a:-${a}`);
//  console.log(`value of b:-${b}`)


//  M2
// let a=10;
// let b=100;

// a=a+b;
// b=a-b;
// a=a-b;

//  console.log(`value of a:-${a}`);
//  console.log(`value of b:-${b}`)



//! reverse ans array

// let arr=[1,2,3,4,5,6,7]
// let n=arr.length;

// let s=0
// let e=n-1;

// while(s<=e){
//     let temp=arr[s];
//     arr[s]=arr[e];
//     arr[e]=temp;
//     s++;
//     e--;
// }

// console.log(arr)


//! SEARCHING AND SORTING


function search (arr,target){

    for(let value of arr){
        if(value===target){

            return true;
        }
       
    }
    return false;
   
}

let arr=[1,2,4,5,6,7,8,9,];
let target=4
console.log(search (arr,target))