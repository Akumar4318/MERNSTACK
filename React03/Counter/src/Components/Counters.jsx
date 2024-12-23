import { useState } from 'react';
import './Counters.css'

const Counters = () => {
    // let count=0;
    let [count,setCount]=useState(0)
  return (
    <div>
        <div className='flex justify-center  text-[6rem]'>{count}</div>


        <button onClick={()=>{
           // count++;
           setCount(++count)
            console.log(count)
        }}>Increment</button>
        <button onClick={()=>{
            // count=0;
            setCount(0)
            console.log(count)
        }}>Reset</button>
        <button onClick={()=>{
            // count--;
            if(count==0){
                return
            }
            setCount(--count)
            console.log(count)
        }}>Decrement</button>
    </div>
  )
}

export default Counters