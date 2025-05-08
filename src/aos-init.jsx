import { useEffect } from "react"
import Aos from 'aos'
import  'aos/dist/aos.css'
function AosInit() {


    useEffect(() => {
        Aos.init(   {
            duration: 1100,
            
            once: true,
           
        })
      
    }, [])
    return null
}

export default AosInit