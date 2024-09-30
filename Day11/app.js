// let arr=[1,"hello",function(){console.log("hello"); let ans=10;return ans},{},[1,2,3,4,5,[false,"ans",["aman",true]]]]
// console.log(arr)
// console.log(arr[2]())//return hai hi nhi --> thats why it return undefined

// console.log(arr[4][5][2][1])

//! flat--mean removing nested but upto  nest(if we give the level we nested upto that level)
let arr=[0,1,2,[3,4],[5,6]]
let arr1=[0,1,2,[[3,4],[5,[6,7]]]]
console.log(arr1.flat());

console.log(arr1.flat(1));

console.log(arr1.flat(2));

console.log(arr1.flat(3));

console.log(arr1.flat(4));

console.log(arr1.flat(5));


console.log(arr1.flat(7));








