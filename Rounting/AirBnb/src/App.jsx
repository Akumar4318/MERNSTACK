// import About from "./Components/About"
// import Contact from "./Components/Contact"
// import Home from "./Components/Home"
// import Navbar from "./Components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Navbar1 from "./Components/Navbar1"
import Cat from "./Components/Cat"
import Comments from "./Components/Comments"
import Users from "./Components/Users"





const App = () => {
  return (
    <div>
      <Navbar1/>
      {/* <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes> */}


      <Routes>
        <Route path="/Cat" element={<Cat/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Comments" element={<Comments/>}/>
      </Routes>
    </div>
  )
}

export default App