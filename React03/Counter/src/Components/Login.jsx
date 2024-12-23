import { useState } from "react"


const Login = () => {

    const[Uval,setUval]=useState('')
    const[Pval,setPval]=useState('')
    const[Gval,setGval]=useState('')


  return (
    <div className="gap-3 border border-red-300 flex ">

       
        
        <div >
            <input type="text" placeholder="Username" value={Uval}  onChange={(e)=>{
                setUval(e.target.value)

            }} />
            <h1>{Uval}</h1>
        </div>

        <div>
            <input type="text" placeholder="Password" value={Pval} onChange={(e)=>{
                setPval(e.target.value)
            }} />
            <h1>{Pval}</h1>
        </div>

        <div>
            <input type="text" placeholder="Gmail" value={Gval} onChange={(e)=>{
                setGval(e.target.value)
            }} />
            <h1>{Gval}</h1>
        </div>
    </div>
  )
}

export default Login