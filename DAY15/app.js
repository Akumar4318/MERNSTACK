

// var n=22;

// function outer(){

//    var a=10;
//     function inner(a){
//         var b=33;
//         return a+b;
//     }

//     return inner(a)
// }
// var ans=outer()
// console.log(ans)



// var n=32;
// function a(){
//     var a1=32;
//     console.log(a1)
//     return true
// }
// function b(n){
//     var a2=22;
//     console.log(a2)
//     return n>50
// }

// var ans1=a()
// console.log(ans1)
// var ans2=b(n)
// console.log(ans2)

// let car={
//     brand:"toyota",
//     model: "corolla",
//     year:2022,
//     meleaga:15000
// }

// console.log(car.brand,car.year)

// car.owner="abhishek"
// console.log(car)

// car.mileage="20000"
// console.log(car)

// delete car.year
// console.log(car)


// let student={
//     name:"john",
//     grade:[85,92,78,94],  

// }

// student.getaveragegrade=function(){
//      let sum=0;
//      for(let item of student.grade){
//         sum=sum+item;
//         average=sum/student.grade.length
//      }
//      console.log(`your average grades is:--${average}`)
// }

// student.getaveragegrade()


// let library={
//     books:[{title:"home alone",author:"aman",availablecopies:2},{title:"home alone2",author:"aman2",availablecopies:3},{title:"home alone3",author:"aman3",availablecopies:4}]
// }

//! wrong

/* let findbooks=function(books){
   for(let i=0;i<books.length;i++){
    for(title in books){
        if(title==tittle[i]){
            ans=title
            console.log("found",title)
        }
    }
   }

}

findbooks("homealone")*/

//!

// let library={
//     books:[{
//         author:"RD SHARMA",
//         title:"maths",
//         avilablecopies:100
//     },
//     {
//         author:"HC VERMA",
//         title:"PHY",
//         avilablecopies:100
//     },
//     {
//         author:"TRANSLATE",
//         title:"ENGLISH",
//         avilablecopies:30
//     }
// ]
// }

// findbook: function(title){
//     for(let item of this.books){

//     }
// }
             
let bankAccount={
    name:"david",
    balance:10000,

    deposit:function (amount){
        this.balance=this.balance+amount
       return bankAccount.balance;
    },
    
}
