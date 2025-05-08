
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Mj from './assets/capturas/MJ refrigeracaoeeletrica-captura.png'
import Todo from './assets/capturas/todo-list-captura.png'
import Conversor from './assets/capturas/conversor-de-moedas.png'
import Jokenpo from './assets/capturas/jokenpo-captura.png'
import Iphone from './assets/capturas/iphone-captura.png'

const projets = [{
    id: 1,
    img: Mj,
    link: "https://mjrefrigeracaoeeletrica.netlify.app/",
    title: "Site MJ Refrigeração e Elétrica",
    desc: "landing page criada em NextJs e Tailwind para uma empresa no ramo de refrigeração e Elétrica na qual já trabalhei."
},
{
    id: 2,
    img: Todo,
    link: "https://toodo-liist.netlify.app/" , 
    title: "Todo list",
    desc: "Projeto pessoal de lista de afazeres feito em React e utilizando uma API que eu mesmo fiz para criar, vizualizar e apagar as tarefas."
},
{
    id: 3,
    img: Conversor,
    link: "https://eduardo-muricy.github.io/conversor-de-moedas/",
    title: "Conversor de moedas",
    desc: "Projeto pessoal de conversor de moedas feito em Javascript utilizando API para cotação em tempo real das moedas.  "
},
{
    id: 4,
    img: Jokenpo,
    link: "https://jookeenpoo.netlify.app/",
    title: "Jokenpo",
    desc: "Game de Pedra, papel e tesoura criado em HTML, CSS e Javascript."
},
{
    id: 5,
    img: Iphone,
    link: "https://eduardo-muricy.github.io/AppleStore/",
    title: "Iphone 14 page",
    desc: "Lading page inspirada na Apple. Criada em HTML, CSS e Javascript. O intuito dela foi dar os primeiros passos na manipulação do DOM."
}
]
function ProjetCard() {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap  ">
            

            {projets.map((projeto, index) => (
                <div id="projets" key={projeto.id}  className={`flex-[0_0_100%] flex-col px-3 py-3  min-w-0 md:flex-[0_0_calc(100%/4)]   ${index === 3 ? 'md:flex-basis-full' : ''
                    }}`}>
                    <article data-aos="zoom-in"  className=" space-y-4 h-full flex flex-col  bg-[#2E2E2E] rounded-md border-1  border-[#D4AF37] ">
                        <div className="flex-1 flex  justify-between  ">
                            
                                <img src={projeto.img} alt="" className=" rounded-t-md border-t-1   border-[#D4AF37] " />


                            


                        </div>



                        <div className='   flex  flex-col   '>

                            <div className=" pb-2">
                                <h3 className='font-bold text-xl text-center my-1 select-none text-[#E0E0E0]'>{projeto.title} </h3>
                                <p className=' text-lg ml-3 select-none px-3 text-[#E0E0E0]'> {projeto.desc}</p>
                            </div>



                            <div className='flex border-t border-[#6C757D]  py-3 justify-center gap-8 md:gap-25 '>

                                <a
                                    target='_blank'
                                    href={projeto.link}
                                    className='flex items-center justify-center border-1  border-[#D4AF37]  text-[#E0E0E0]  hover:border-[#121212] hover:bg-[#121212] px-3 py-2 rounded-md duration-300'
                                >

                                    Visitar projeto
                                </a>

                                <a
                                    target='_blank'
                                    href={`https://wa.me/5587988561908?text=Oi, vim pelo seu portifólio e gostaria de saber mais sobre o seu trabalho`}
                                    className='flex items-center justify-center border-1 border-[#D4AF37] gap-2 text-[#E0E0E0] hover:border-green-500 hover:bg-green-500 px-3 py-2 rounded-md duration-300'
                                >
                                    <WhatsappLogo className='w-5 h-5' />
                                    Entrar em contato
                                </a>
                            </div>


                        </div>

                    </article>
                </div>
            ))
            }


        </div >


    )
}


export default ProjetCard