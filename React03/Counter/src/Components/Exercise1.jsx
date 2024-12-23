import { useState } from "react"


const Exercise1 = () => {

    
    const[val,setVal]=useState('')
    
    const[displayval,setdisplayval]=useState('')
  return (



    <div>

        <input type="text"placeholder="Username" onChange={(e)=>{
setVal(e.target.value)
        }} />

        <button className="border rounded-lg p-3 text-white bg-black" onClick={()=>{
setdisplayval(val)
        }}>Click me</button>

        <button className="border rounded-lg p-3 text-white bg-black" onClick={()=>{
            setdisplayval("")
            setVal("")
        }}>Remove</button>

        <h1>{displayval}</h1>

    </div>
  )
}

export default Exercise1