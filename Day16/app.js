// // let arr=[1,2,3,4,5,5]

// // let Narr=arr.splice(0,4,10)
// // console.log(Narr)
// // console.log(arr)


// let str='ajkfha'


// let ans=str.toUpperCase()

// console.log(ans)
// console.log(str)


// let target=10



let arr=[22,-1,33,10,11,4]

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


function findtarget(target){

    let index=0
    for(let item of arr){
        if(item==target){
            return index
        }
        index++
    }
    return -1
}

let ans=findtarget(-1)
console.log(ans)

