import Photo from "./assets/Photo.jpg"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

function About() {
    return (
        <div className="flex flex-col md:flex-row md:px-50 md:justify-center md:gap-20 bg-[#121212]">
            {/* " */}
            <div className="flex justify-center items-center pt-5 flex-col">
                <img data-aos="fade-down"  src={Photo} id="about" className="rounded-full w-70 md:w-100 border-[#D4AF37] border-2" />
                <div>
                    <h1 className="text-4xl font-bold text-center pt-4 text-[#E0E0E0]">Eduardo Muricy</h1>
                <h6 className="text-center text-xl font-semibold text-[#E0E0E0]"> Desenvolvedor Frontend </h6>
                </div>
                
            </div>
            <div  data-aos="fade-up" className="flex flex-col items-center justify-center ">
                
                <div className="flex flex-col  ml-2 ">
                    <h1 className="text-3xl font-bold text-center pt-6 text-[#E0E0E0]">Sobre mim</h1>
                    <p className="px-3 mt-2 text-xl md:w-210 md:text-2xl  text-[#E0E0E0]">Oi, bem vindo ao meu portifólio. Meu nome é Eduardo Muricy, tenho 21 anos e sou desenvolvedor Frontend. Curioso sobre como funcionava a web e o desenvolvomento de sites, apps e sistemas, aos 17 anos comecei a estudar programação, e desde então me apaixonei por essa área.
                        Crio sites para negócios, sites para empresas e  projetos pessoais. Da uma olhada em meus projetos abaixo! Se quiser criar o seu, entra em contato comigo pelo Whatsapp.
                    </p>
                </div>
                <button className="hover:bg-green-600 hover:border-none border-1 mt-10  mb-5 w-70  border-[#D4AF37] flex justify-center text-md duration-300 text-[#E0E0E0]  items-center cursor-pointer h-13 rounded-xl "><WhatsappLogo className="text-xl mr-1 "/> <a  target='_blank' href={`https://wa.me/5587988561908?text=Oi, vim pelo seu portifólio e gostaria de saber mais sobre o seu trabalho`}>Entrar em contato</a> </button>
            </div>
        </div>
    )

}

export default About