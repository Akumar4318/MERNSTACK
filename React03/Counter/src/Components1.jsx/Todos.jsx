import { useEffect, useState } from "react";



const Todos = () => {

    let api="https://jsonplaceholder.typicode.com/todos";

    const[apiData,setapiData]=useState([])

  useEffect(()=>{
    async function getalldata() {
        let response=await fetch(api)
        let data=await response.json();
        // console.log(data)
        setapiData(data)
        
    }

    getalldata()
  },[])


  return (
    <div>
        
        
        {apiData  && apiData.map((item)=>{

            return (
                <div key={item.id}>
                    <ul className="m-2 text-2xl border border-black p-4">
                    <li className="list-disc m-4">
                        {item.title}
                    </li>
                </ul>
                </div>
            )
        })
    }
    </div>
  )
}

export default Todos