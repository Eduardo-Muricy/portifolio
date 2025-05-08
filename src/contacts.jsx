import { WhatsappLogo } from '@phosphor-icons/react'
import { GithubLogo } from '@phosphor-icons/react'
import { LinkedinLogo } from '@phosphor-icons/react'
import { MicrosoftOutlookLogo } from '@phosphor-icons/react'

function Contacts() {
    return (
        <footer className="bg-[#121212] text-[#E0E0E0] md:px-10 border-t-1 border-[#D4AF37]">
           

            <div id='contact' className='flex flex-col md:justify-around  items-center md:flex-row py-3'>

                <div>
                    <h1 className='text-4xl font-bold pb-1 md:text-5xl'>Eduardo Muricy</h1>
                    <h6 className='text-center text-xl font-semibold pb-2'>Desenvolvedor Frontend</h6>
                    <a
                        target='_blank'
                        href={`https://wa.me/5587988561908?text=Oi, vim pelo seu portifólio e gostaria de saber mais sobre o seu trabalho`}
                        className='flex items-center justify-center border-1 border-[#D4AF37] gap-2 text-[#E0E0E0] hover:border-[#121212] hover:bg-green-500  py-2 rounded-md duration-300'
                    >
                        <WhatsappLogo className='w-5 h-5' />
                        Entrar em contato
                    </a>
                </div>


                <div className='pt-4 flex flex-col items-center'>
                    <h2 className='text-center text-xl font-semibold md:text-2xl'>Contatos</h2>

                    <div className='flex flex-col items-center pt-3'>
                        <WhatsappLogo size={32} />
                        <p>(87) 9 8856-1908</p>
                    </div>

                    <div className='flex flex-col items-center pt-2'>
                        <MicrosoftOutlookLogo size={32} />
                        <p> Eduardo-Muricy@hotmail.com</p>
                    </div>


                </div>


                <div className='pt-5 flex flex-col items-center'>
                    <h2 className='text-center text-xl font-semibold md:text-2xl'>Redes</h2>
                    <div className='flex flex-col items-center pt-3'>

                        <LinkedinLogo size={32} />
                         <a href="https://www.linkedin.com/in/eduardo-muricy/ " target='_blank' className='underline decoration-solid'>Eduardo Muricy</a>
                    </div>
                    <div className='flex flex-col items-center pt-3'>
                        <GithubLogo size={32} />
                        <a href="https://github.com/Eduardo-Muricy" target='_blank' className='underline decoration-solid'>Eduardo-Muricy</a> 
                    </div>


                </div>
            </div>
        </footer>
    )
}


export default Contacts