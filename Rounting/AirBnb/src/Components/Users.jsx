//! full name and last name  and image

import { useEffect, useState } from "react"
import Lodder from "./Lodder"




const Users = () => {

  const[user,setUser]=useState(null)
  const[loading,setLoading]=useState(true)

  async function getuserdetails(){

    setLoading(true)

    try {
      let response=await fetch('https://dummyjson.com/users')
      let data=await response.json();
      setUser(data.users)
      // console.log(data.users)
    } catch (error) {
      
      error('kuch gadbad hai bhai')
    }
    setLoading(false)
  }

  useEffect(()=>{
    getuserdetails()
  },[])

  return (
    <div className="flex flex-wrap h-lvh justify-center items-center">
      {
        loading ? (<p> <Lodder/> </p>):(

          user.map((item)=>{
           
          return (
          <div key={item.id} className="flex flex-wrap justify-center items-center flex-col border border-violet-600 p-3 m-3 bg-green-100 rounded-lg ">
            <img src={item.image} alt="" />
              <h1 className="text-lg ">FullName:-{item.firstName + " " + item.lastName}</h1>
              <h3>Phone no:{item.phone}</h3>
              
          </div>
         
          )  
          })

        )
      }

    </div>
  )
}

export default Users