import { useEffect } from "react"


const Home = () => {

    useEffect(()=>{
        console.log('Home ka use effect on hai')
    },[])
  return (
    <div>Home</div>
  )
}

export default Home