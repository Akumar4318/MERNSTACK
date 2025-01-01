import { useEffect } from "react";
import { useState } from "react"
import Cards from "./Components/Cards";
import Sppiner from "./Components/Sppiner";




const App = () => {

  const[products,setProducts]=useState(null);
  const[loading,setLoading]=useState(true);
  // const[searchquery,setSerachquery]=useState('');
  const[displaydata,setDisplaydata]=useState(null);


  async function getdata() {
    setLoading(true)

    try {

      let response=await fetch('https://dummyjson.com/products');
      let data=await response.json();
      setProducts(data.products)
      // console.log(data.products)
      setDisplaydata(data.products)
      
    } catch (error) {
      error('error hai')
    }
    
    setLoading(false)
  }

  useEffect(()=>{
    getdata()
  },[])


  return (
    <div className="bg-[#E7FBB4] flex flex-wrap gap-2 m-x-3 h-full    p-3 justify-center items-center mx-auto ">

     <div>
      
<input type="text" className="border border-green-950 rounded-lg" onChange={(e)=>{

let filterData=products.filter((item)=>{
  return item.title.toLowerCase().includes(e.target.value.toLowerCase())
})
setDisplaydata(filterData )

console.log(e.target.value)
}}/>

     </div>
     {/* {console.log(e.target.value)} */}

     <div className="flex flex-wrap gap-2 m-x-3  p-3 justify-center items-center">
     {
       loading ?(<div className="h-[300px] flex items-center justify-center "><Sppiner/></div>):(displaydata.map((item)=>{
        return <Cards key={item.id} item={item}/>
       }))
      }
     </div>

    </div>
  )
}

export default App