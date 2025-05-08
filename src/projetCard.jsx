import imgCard from "./assets/uiui.png"
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'



const projets = [{
    id: 1,
    img: imgCard,
    title: "Projeto 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione beatae, commodi optio nobis asperiores accusamus."
},
{
    id: 2,
    img: imgCard,
    title: "Projeto 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione beatae, commodi optio nobis asperiores accusamus."
},
{
    id: 3,
    img: imgCard,
    title: "Projeto 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione beatae, commodi optio nobis asperiores accusamus. "
},
{
    id: 4,
    img: imgCard,
    title: "Projeto 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione beatae, commodi optio nobis asperiores accusamus."
},
{
    id: 5,
    img: imgCard,
    title: "Projeto 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione beatae, commodi optio nobis asperiores accusamus."
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
                                    href=""
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