
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


let datafromapi=[
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
  {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
   {
    name:"aman",
    img:"https://shorturl.at/2y23Y",
    d:"developer"
  },
]


function App() {
  
  return(
    <div>
      <Navbar/>

      <div style={{gridTemplateColumns:"1fr 1fr 1fr 1fr"}} className='d-grid'>
       { datafromapi.map((item)=>{

// eslint-disable-next-line react/jsx-key
return <Card name={item.name} image={item.img } d={item.d}/>

})}
      </div>
    </div>
   

   
  )
}

export default App
