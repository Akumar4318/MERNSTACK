import { useState } from "react"



// import React from 'react'

const Calci = () => {

const[val,setVal]=useState(0)

function clickHandler(e){
    if(val==0){
        setVal(e.target.innerText)
    }else{
        setVal(val+e.target.innerText)
    }
}

function equaltoHandler(){
    if(!val){
        return
    }
    else{
        setVal(eval(val))
    }
}


  return (

    <div className="border bg-[#FFE893] border-black rounded-lg w-[30%] h-[60%] p-3 flex flex-col items-center  ">

        <div >
            <input type="text" className="border border-black rounded-lg slef-end w-[100%] h-[4rem] text-4xl bg-white text-right " disabled  value={val} />
        </div>

        <div className="grid grid-cols-4   h-[90%] mt-4 w-[80%]  ">
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={()=>{
                setVal(0)
            }}>AC</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={()=>{
                setVal(val.slice(0,-1))
            }}>X</button> 
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >%</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={clickHandler}>/</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={clickHandler}>7</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >8</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >9</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >*</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >4</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={clickHandler}>5</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >6</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={clickHandler}>-</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >1</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >2</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >3</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >+</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >**</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={clickHandler} >0</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium"  onClick={clickHandler}>.</button>
            <button className="border rounded-[100%] border-none bg-[#FBB4A5] m-2 p-2 text-3xl font-medium" onClick={equaltoHandler} >=</button>
            
        </div>


    </div>
  )
}

export default Calci