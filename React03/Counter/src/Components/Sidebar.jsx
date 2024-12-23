
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { GoFileSubmodule } from "react-icons/go";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { MdBluetoothAudio } from "react-icons/md";
import { BsAmazon } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsAmd } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { useState } from "react";
const Sidebar = () => {

  const [toggle,setToggle]=useState(true)

  return (
    <div className="border border-red-300">
      <button onClick={()=>{
        setToggle(!toggle)
        console.log(toggle)
      }}><BsLayoutTextSidebarReverse  className="text-5xl ml-3 mt-2 "/></button>
      <div className={`h-lvh bg-[#D9EAFD] ml-3 p-1  ${toggle ? "w-[4.5%] rounded-lg":"w-[13%] rounded-lg"}`}>
    

      <div className="flex m-2 p-2 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300"><button className="text-3xl  "><FaHome /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Home</button></div>

      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><GoFileSubmodule /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Module</button></div>

      <div className="flex m-2 p-3 gap-4 items-center  justify-center border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><MdOutlineRoundaboutLeft /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>About</button></div>


      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><MdBluetoothAudio /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Bluetooth</button></div>


      <div className="flex m-2 p-3 gap-4 items-center  justify-center border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsAmazon /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Amazon</button></div>
      


      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsAndroid2 /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Android</button></div>


      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsAmd /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Amd</button></div>


      <div className="flex m-2 p-3 gap-4  items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsBank /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Bank</button></div>


      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsBagFill /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>Bag</button></div>


      <div className="flex m-2 p-3 gap-4 items-center justify-center  border border-blue-300 rounded-lg  hover:scale-110 bg-blue-300 "><button className="text-3xl"><BsAmd /></button><button className={`text-2xl ml-3 ${toggle ? "hidden" :"block"}`}>AMD</button></div>
      </div>


    </div>
  )
}

export default Sidebar