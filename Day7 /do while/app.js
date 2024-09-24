// let n=0;

// let i=0;

// do{
//     console.log("aman")
//     i++
// }

// while(i<=n)
    


    //! guess the ans
    

    let ans=Math.floor(Math.random()*10)
    // console.log(ans)
    let  tries=3;

    do {
        let guess=Number(prompt("enter the no."))
        
        if  (guess==ans){
            
            alert("win")
            break;
        }

        tries--
        if(tries==0){
            alert("gaem over")
        }

    } while (true && tries>0);
