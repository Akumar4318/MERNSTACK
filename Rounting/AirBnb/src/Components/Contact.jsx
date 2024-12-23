import { useEffect } from "react"

const Contact = () => {



      useEffect(()=>{
            console.log('contact ka use effect on hai')

            const ID=setInterval(() => {

                console.log('hi')
                
            }, 2000);

            return()=>{
                clearInterval(ID)
            }


        },[])
  return (
    <div>
        <h2>contact</h2>
    </div>
  )
}

export default Contact