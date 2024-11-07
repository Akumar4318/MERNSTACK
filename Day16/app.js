// // let arr=[1,2,3,4,5,5]

// // let Narr=arr.splice(0,4,10)
// // console.log(Narr)
// // console.log(arr)

// let str='ajkfha'

// let ans=str.toUpperCase()

// console.log(ans)
// console.log(str)

// let target=10

let arr = [22, -1, 33, 10, 11, 4];

// function findindex(target){

//     for(let i=0;i<arr.length;i++){

//     if(arr[i]===target){

//         return i
//     }

// }
// return -1
// }

// let ans=findindex(4)
// console.log(ans)

//! using for of method

// function findtarget(target){

//     let index=0
//     for(let item of arr){
//         if(item==target){
//             return index
//         }
//         index++
//     }
//     return -1
// }

// let ans=findtarget(-1)
// console.log(ans)




function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
   
        let mid = Math.floor((left + right) / 2);

       
        if (arr[mid] === target) {
            return mid;


        if (arr[mid] < target) {
            left = mid + 1;
        }
    
        else {
            right = mid - 1;
        }
    }

}
    return -1;
}

let sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let target = 23;

let result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found in the array");
}

