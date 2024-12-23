import { useState } from "react"


const Events = () => {

    const[val,setVal]=useState('')
  return (

    
    <div>

        <input type="text" value={val}  onChange={(e)=>{
            setVal(e.target.value)
        }}/>
        <h1>{val}</h1>
    </div>
  )
}

export default Events