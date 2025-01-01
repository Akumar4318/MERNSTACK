import { useEffect } from "react"
import { useState } from "react"
import Child from "./Child"


const Middle = () => {

        let[counter,setCounter]=useState(0)

        useEffect(()=>{
            console.log('called from middle')
        })

  return (
    <div>
        
        <h1>{counter} </h1>
        <button onClick={()=>{
            counter=counter+1;
            setCounter(counter)
        }}>Increment from middle</button>

        <Child/>
    </div>
  )
}

export default Middle