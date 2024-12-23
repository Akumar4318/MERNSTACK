import { useState } from "react"


const Exercise2 = () => {
const[isdiv,setIsdiv]=useState(false)


  return (
    <div>

        <button className="bg-red-400 rounded-lg p-3" onClick={()=>{
            setIsdiv(!isdiv)
            console.log(isdiv)
        }}> {isdiv ? "hide":"show"}</button>

<div
        className={`mt-4 ${
          isdiv ? "block h-[100px] w-[100px] border border-red-900" : "hidden"
        }`}
      >
        aman1
      </div>

    </div>
  )
}

export default Exercise2