import { useEffect } from "react"


const About = () => {


    useEffect(()=>{
        console.log('About ka use effect on hai')

        return()=>{
            console.log('unmounted')
        }
    },[])
  return (
    <div>
        <h2>about</h2>
    </div>
  )
}

export default About