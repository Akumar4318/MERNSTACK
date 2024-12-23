
import { Link } from "react-router-dom"
// import React from "react"




const Navbar = () => {
  return (
    <div className="bg-blue-500 flex justify-between items-center">
      
      <Link to={'/Home'}>
      <h3 className="text-white mx-3">
        Logo
        </h3>
        </Link>

      <div className="mx-3">

        <Link className="text-white m-3" to={'/Home'}>Home</Link>
        <Link className="text-white m-3" to={'/About'}>About</Link>
        <Link className="text-white m-3" to={'/Contact'}>Contact</Link>
      </div>

       
        
        
    </div>
  )
}

export default Navbar