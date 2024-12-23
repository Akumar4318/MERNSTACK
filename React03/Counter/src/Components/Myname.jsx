import { useState } from "react"



const Myname = () => {
    const[name,setName]=useState("")
  return (
    <div >
   


        {name? <h1>My Name is:-{name}</h1>:""}


        <label className="m-4  gap-4 flex flex-col" htmlFor="">
        <input type="text"  placeholder="UserName" onChange={(e)=>{
            // console.log(e.target.value)
            setName(e.target.value)

        }}/>
        <input type="Password" placeholder="Password" onChange={(e)=>{
            // console.log(e.target.value)
            setName(e.target.value)
        }} />
        </label>
       
    </div>
  )
}

export default Myname