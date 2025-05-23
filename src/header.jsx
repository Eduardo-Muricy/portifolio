
import Logo2 from './assets/logo2.png'
function Header() {
     
    return (
       
        <header className='bg-[#121212] border-b-1 border-[#D4AF37]' >
             {/* */}
            <nav className=" flex justify-center md:items-center md:justify-around md:gap-310 ">
                <div>
                    <img data-aos="fade-right" src={Logo2} className=' hidden md:block h-20  '   alt="" />
                
                </div >
                
                <ul className="flex flex-row font-semibold text-xl justify-between gap-12 py-3 md:py-6 text-[#E0E0E0]  "  data-aos="fade-left">
                    <li className='relative group '><a href="#about" className="hover:text-[#D4AF37] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D4AF37] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">Sobre</a></li>
                    <li className='relative group'><a  href="#projets" className="hover:text-[#D4AF37] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D4AF37] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">Projetos</a></li>
                    <li className='relative group'><a href="#contact" className="hover:text-[#D4AF37] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#D4AF37] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header