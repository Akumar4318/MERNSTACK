// let arr=[1,"hello",function(){console.log("hello"); let ans=10;return ans},{},[1,2,3,4,5,[false,"ans",["aman",true]]]]
// console.log(arr)
// console.log(arr[2]())//return hai hi nhi --> thats why it return undefined

// console.log(arr[4][5][2][1])

//! flat--mean removing nested but upto  nest(if we give the level we nested upto that level)
// let arr=[0,1,2,[3,4],[5,6]]
// let arr1=[0,1,2,[[3,4],[5,[6,7]]]]
// console.log(arr1.flat());

// console.log(arr1.flat(1));

// console.log(arr1.flat(2));

// console.log(arr1.flat(3));

// console.log(arr1.flat(4));

// console.log(arr1.flat(5));


// console.log(arr1.flat(7));
// let a=arr1.flat();


//! METHODS IN ARRAY

//* push distructive 

// let arr=[1,2,3,4,5,6,7,8]

// arr.push("aman","abhishek",true," @","#")


//* pop --distrucutive method

// arr.pop();
// arr.pop();


// console.log(arr);


//* UNSHIFT--add     SHIFT---remove

// let arr1=[1,2,3,4,5];

// // console.log(arr);
// arr.unshift(0);
// console.log(arr1)

// arr.shift(0)
// console.log(arr1)

// let arr=[]
// arr.unshift(0);
// arr.unshift(1);
// arr.unshift(2);
// arr.unshift(3);
// arr.unshift(4);
// console.log(arr)

// arr.shift(0)
// console.log(arr)


//* CONCAT---non distructive method (This method returns a new array without modifying any existing arrays.)


let a1=[1,2,3,4,5,6];
let a2=['a','b','c','d','e'];
let a3=[true,false]
let a4=["+","-"]

console.log(a2.concat(a1.concat(a3.concat(a4))))








