// let userInput= Number(prompt("Enter the vlaue from 1 to 7"))

// switch(userInput){

//     case 1: 
//     alert("Monday")
//     break;

//     case 2: 
//     alert("Tue")
//     break;

//     case 3: 
//     alert("wed")
//     break;

//     case 4: 
//     alert("thur")
//     break;

//     case 5: 
//     alert("friday")
//     break;

//     case 6: 
//     alert("sat")
//     break;

//     case 7: 
//     alert("sun")
//     break;
    
//     default :
//     alert("invalid input")
// }

//? calulator

// let num1=Number(prompt("enter the value for num1"))
// let num2= Number (prompt("enter the value for num2"))
// let mathematicaltool= prompt("enter the what do you want to do")

// switch(mathematicaltool){
//     case "+":

//          alert("addition" + Number(num1+num2));

//         break;
//         case "-":
//             alert("division" + num1-num2)
//             break;  
            
//             case "*":
//                 alert("multiplication" + num1*num2)
//                 break;  
            
//                 case "/":
//                     alert("division"+ num1/num2)
//                     break;  
            
                    
       
//             default :
//             alert("invalid input")
            

// }

//! greading system

// let n1 = Number(prompt("Enter number 1"))
// let n2 = Number(prompt("Enter number 2"))
// let n3 = Number(prompt("Enter number 3"))
// let n4 = Number(prompt("Enter number 4"))
// let n5 = Number(prompt("Enter number 5"))

// let avg=(n1+n2+n3+n4+n5)/5;


// // switch(avg) --> not use 
// switch(true){  
//     case avg>90:    //! if 98 ==avg>90 -> 98 == true which is not correct we comparing a no. with boolean 
//     //! we have to compare boolean with boolean that is why we have to pass "true " insted of avg in switch
//         alert("A")
//         break;
        
        
//         case avg>80:
//             alert("B")
//             break;
        
//         case avg>70:
//             alert("c");
//             break; 
           
//             case avg>60:
//                 alert("D");
//                 break;

      
//                 case avg>50:
//                     alert("fail");
//                     break;
            
//                     default:
//                         alert("invalid")
            

// }

// ! traffic light

// let signal=prompt("give the signal")
// let newsignal=signal.toLowerCase()

// switch(newsignal){

//     case "red":
//         alert("STOP")
//         break;


//         case "yellow":
//             alert("wait")
//             break;
            

//             case "green":
//                 alert("go")
//                 break;

//                 default:
//                     alert("invalid")
// }


// //! calender problem

// let month= Number(prompt("enter the month"))

// switch(month){
//     case 1:
//         alert("jan")
//         break;

//         case 2:
//             alert("feb"+29)
//             break;
   
//             case 3:
//                 alert("march"+31)
//                 break;


//                 case 4:
//                     alert("apr"+30)
//                     break;
           
   
//                 case 5:
//                     alert("may"+31)
//                     break;
           
//                     case 6:
//                         alert("jun"+30)
//                         break;
               
//                         case 7:
//                             alert("july"+31)
//                             break;
   
//                             case 8:
//                                 alert("aug"+31)
//                                 break;
                       
//                                 case 9:
//                                     alert("sep"+30)
//                                     break;
   
//                                     case 10:
//                                         alert("oct"+31)
//                                         break;
                               
//                                         case 11:
//                                             alert("nov"+30)
//                                             break;
   
//                                             case 12:
//                                                 alert("dec" +31)
//                                                 break;
   
                                                

// }
//? 2nd method

 let month=Number(prompt("enter the month"))

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("31")
        break;
    
    case 11:
    case 4:
    case 6: 
    case 9 :   
    
     alert("30")
     break;

     case 2:
        alert("28/29")
        break;
     
}



