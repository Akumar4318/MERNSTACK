
import { Link } from "react-router-dom"
// import React from "react"
import { FaCat } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaCommentSolid } from "react-icons/lia";
import { IoLogoGoogle } from "react-icons/io5";



const Navbar1 = () => {
  return (
    <div className="bg-blue-500 flex justify-between items-center">
      
      <Link to={'/Home'}>
      <h3 className="text-white mx-3 text-3xl p-3 hover:scale-110">
      <IoLogoGoogle />
        </h3>
        </Link>

      <div className="mx-3 flex items-center justify-self-center">

        <Link className="text-white m-3 flex gap-x-1 items-center justify-center hover:scale-105" to={'/Cat'}> <FaCat /> Cat</Link>
        <Link className="text-white m-3 flex flex-wrap gap-x-1 items-center justify-center hover:scale-105" to={'/Comments'}><LiaCommentSolid />  Comments</Link>
        <Link className="text-white m-3 flex  gap-x-1 items-center justify-center hover:scale-105" to={'/Users'}>  <HiOutlineUsers /> Users</Link>
      </div>

       
        
        
    </div>
  )
}

export default Navbar1