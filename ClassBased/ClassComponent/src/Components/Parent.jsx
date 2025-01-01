
import  { useState,useEffect } from "react"
import Middle from "./Middle"


const Parent = (
    () => {

        let[counter,setCounter]=useState(0)

        useEffect(()=>{
            console.log('called from parent')
        })

  return (
    <div>
        
        <h1>{counter} </h1>
        <button onClick={()=>{
            counter=counter+1;
            setCounter(counter)
        }}>Increment from parent</button>

        <Middle/>
    </div>
  )
}

) 
export default Parent