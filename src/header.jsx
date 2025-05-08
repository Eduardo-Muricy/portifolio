
import Logo from './assets/logo.png'
import Logo2 from './assets/logo2.png'
function Header() {
     
    return (
       
        <header className='bg-[#121212] border-b-1 border-[#D4AF37]' >
             {/* */}
            <nav className=" flex justify-center md:items-center md:justify-around md:gap-310 ">
                <div>
                    <img data-aos="fade-right" src={Logo2} className=' hidden md:block w-18 '  alt="" />
                
                </div>
                
                <ul className="flex flex-row font-semibold text-xl justify-between gap-12 py-3 md:py-6 text-[#E0E0E0]"  data-aos="fade-left">
                    <li><a href="#about">Sobre</a></li>
                    <li><a  href="#projets">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header