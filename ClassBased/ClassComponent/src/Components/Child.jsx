

import { useState,useEffect } from "react"


const Child = () => {

        let[counter,setCounter]=useState(0)

        useEffect(()=>{
            console.log('called from child')
        })

  return (
    <div>
        
        <h1>{counter} </h1>
        <button onClick={()=>{
            counter=counter+1;
            setCounter(counter)
        }}>Increment from child</button>
    </div>
  )
}

export default Child