import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Header from "./header"
import About from "./about"
import Projets from "./projets"
import Contacts from "./contacts"
function App() {


  return (
    <div className='bg-[#6C757D] '>
      <button className="bg-green-600 z-10 fixed backface-hidden flex justify-center items-center cursor-pointer w-15 h-15 rounded-full mt-180 ml-78 md:ml-455 md:mt-210 "> <a  target='_blank'
                        href={`https://wa.me/5587988561908?text=Oi, vim pelo seu portifólio e gostaria de saber mais sobre o seu trabalho`}><WhatsappLogo className='text-white' size={40} /></a>
        
      </button>
      <Header />
      <About />
      <Projets />
      <Contacts />
    </div>
      
     
      )
}

      export default App
