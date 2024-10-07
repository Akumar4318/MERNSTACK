

//! --- key value pair called property

// let obj={
//     name: "abhishek",
//     age: 45,
//     SaysHi: function abc (){
//         console.log(" abhishek say hi")
//     },
//     girlfriend:["suman","aarti","shanti"],
//     jobs:{
//         first: "accenture"
//     }
// }

// console.log(obj.name)
// console.log()
// console.log(obj.SaysHi())
// console.log()

// console.log(obj.girlfriend[0])


// let obj={
//    "name":"ABHISHEK ",
//     age:23,
//     location:"dhanbad"

// }


// console.log(obj.name)


//! SPREAD OPERATOR

//  ON ARRAY

// let arr=[1,2,3,4,5]
// let arr1=[6,7,8,9,10]


// let arr2=[...arr, ...arr1]

// console.log(arr2)

// ON OBJECT

// let obj={
//     name: "aman",
//     age: 34
// }
// let obj1={
//     name:"abhishek",
//     location:"dhanbad"
// }
// let newobj1={
//     ...obj,...obj1,fullname:"kumar"
// }
// console.log(newobj1)

//  let obj={

//     name:"aman",
//     age:34

//  }

//  let obj2={...obj}

//  obj2.name="abhishek"

//  console.log(obj)
//  console.log(obj2)


// 

 var userinfo={
    name:"aman",
    age:24,
    social:{
        facebook:{
            acc1:"akumar@gmail.com",
            acc2:"akumar@gmail.com"
        },

        twitter:{
            free:{
                acc1:"a@gmail.com"
            }, 
            paid:{
                acc2:"akumar@gmail.com"
            }
        }


    }
 }

function makedeepcopy(obj1){

    if(typeof obj1 !=="object" || obj1 === null){
        return obj1;
    }
        
    var copiedval=Array.isArray(obj1) ? []:{};
    var keys=Object.keys(obj1);
    
    for(var i =0;i<keys.length;i++){
        copiedval[keys[i]]=makedeepcopy(obj1[keys[i]])
    }
    return copiedval;
}
var ans=makedeepcopy(userinfo) 
 
// console.log(ans)

ans.social.facebook.acc1={name:"abhay pal",age:34}
console.log(userinfo.social.facebook.acc1)
console.log(ans.social.facebook.acc1)