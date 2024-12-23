import { useState } from "react"



const Darkmode=()=>{

  const[isDark,setisDark]=useState(true)


  return(
    <div className={`p-4 h-lvh  ${isDark ? "bg-white":"bg-black"}`}>
      <button className={" p-3 rounded-lg m-4"+ isDark ?"bg-white text-black p-3 rounded-lg m-4 border  border-black":"bg-black text-white p-3 rounded-lg m-4"} onClick={()=>{
        setisDark(true)
        console.log(isDark)

      }}>Light mode</button>
      <button className={" p-3 rounded-lg m-4 " + isDark ? "bg-black text-white p-3 rounded-lg m-4":"bg-white p-3 rounded-lg m-4"}onClick={()=>{
        setisDark(false)
      }}>Dark mode</button>

      <div className={`${isDark ? "text-black":"text-white"}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ratione mollitia nemo iusto odit, saepe fuga provident deserunt ab eveniet excepturi porro temporibus quos exercitationem rem. Alias, assumenda sunt! Vitae maiores quam sed autem qui necessitatibus sit, maxime, dolore reprehenderit officia modi laboriosam quis. Officia maiores pariatur nisi ducimus debitis!
      </div>
    </div>
  )
}
export default Darkmode