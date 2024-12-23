import { useEffect, useState } from "react"
import Lodder from "./Lodder"
import { CiHeart } from "react-icons/ci";

//! username and full name as well body
const Comments = () => {
  
     const[comments,setCommnets]=useState(null)
     const[loading,setLoading]=useState(true)

     async function getcomments(){
   setLoading(true)

   try {
    let response=await fetch('https://dummyjson.com/comments')
    let data=await response.json();
    setCommnets(data.comments);
    
   } catch (error) {
    
    error('network dikat de rha ')
   }
   setLoading(false)
     }

useEffect(()=>{
  getcomments()
},[])

  return (
    <div className="flex flex-wrap items-center justify-center h-lvh">

      {
        loading ? (<p> <Lodder/>  </p>):(
          comments.map((item)=>{
            return(
              <div key={item.id} className="flex border-2 flex-col  gap-2 bg-red-200 m-3 rounded-lg p-3 w-[30%] flex-wrap">

                  <h1>{item.body}</h1>
                  <p>{item.postId}</p>
                  <div className="flex items-center gap-1 cursor-pointer ">
                  <CiHeart className="text-2xl  text-red-600   hover:scale-125  " />
                    {item.likes}
                  </div>

              </div>
            )
          })
        )
      }



    </div>
  )
}

export default Comments