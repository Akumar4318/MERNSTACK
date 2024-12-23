import { useEffect, useState } from "react"

 let api='https://hp-api.onrender.com/api/characters';

const UseEffects = () => {
   const[apiData,setapiData] =useState([])

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
    <div className="grid grid-cols-4 m-4 gap-3">
        


            {apiData && apiData.map((item)=>{
                return (
                    <div key={item.id} className=" border border-black p-4 flex items-center justify-center flex-col">
                        <img src={item.image ? item.image : "https://shorturl.at/7666H"} alt=""  className="w-[300px] h-[300px] rounded-[100%]"/>
                        <h1 className="text-2xl">{item.name}</h1>
                    </div>
                )
            })}


            {/* {apiData ? (apiData.map((item)=>{
                
                return(<div>
                    <img src="{item.image}" alt="" />

                </div>)
            })): " "} */}

        
    </div>
  )
}

export default UseEffects