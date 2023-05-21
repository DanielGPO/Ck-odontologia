import React from 'react'
import homesmile from '../imagens/homesmile.jpg'
import {FaTooth} from 'react-icons/fa'
import Arraydecards from './Components/Arraydecards'
import {CARDS} from './Components/Arraydecards'
import HomeFooter from './Components/HomeFooter'
import Testimonials from './Testimonials'

function Home() {
  const phoneNumber = '2125075365'; 
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return (
   <div className="flex flex-col overflow-x-hidden">
  <div className="lg:h-[600px] pt-2 bg-blue-400/75 flex justify-center">
    <div className="md:h-[550px] lg:h-[520px] h-[460px] sm:max-w-[900px] lg:max-w-[1230px] relative rounded-xl drop-shadow-2xl bg-white md:w-[1200px] px-auto flex flex-col md:flex-row md:mt-10 lg:mt-[18px] md:justify-between">
      <div className="md:w-[560px] lg:w-full md:bg-gradient-to-r md:from-blue-300/50 md:to-transparent relative p-[4px] md:p-10">
        <h4 className="md:text-slate-950 lg:text-black text-white text-[32px] md:text-[48px] lg:text-[62px] relative antialiased font-extrabold">
          A Clínica Dentária que cuida de você
          <div className="md:absolute w-full hidden md:flex h-full top-0 bg-gradient-to-r from-transparent to-white/50" />
        </h4>
        <div className="mt-[150px] mx-2 lg:mt-[30px] md:mt-[40px]">
          <p className="md:italic md:text-blue-600 text-white font-extrabold text-[20px] md:text-[16px] flex flex-row items-center">
            <FaTooth className="hidden lg:flex md:text-blue-500 text-[42px] md:text-[34px] m-2" />
            Entre em contato através do Whatsapp e agende uma consulta
          </p>
          <div className="ml-2 md:ml-0 lg:mt-10 mt-[50px]">
            <div className="lg:w-[172px]">
              <a
                href={`https://wa.me/${encodedPhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-4 px-4 rounded hover:bg-green-600"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full  absolute md:relative mt-[-8px] md:mt-0 z-[-10] md:z-0 md:h-full h-[470px] ">
          <img loading='lazy' className="h-full w-full md:rounded-xl md:rounded-l-none object-cover" src={homesmile} alt=" dentista e paciente" />
          <div className="absolute  bg-gradient-to-t to-transparent from-black/75 right-0 bottom-0 h-[300px] md:h-[120px] w-full md:rounded-r-xl">
          </div>
        </div>
      </div>
    </div>
      <div className='lg:mt-0  bg-blue-950 w-full pt-10 '>
      <div className=" mx-auto md:py-0 lg:pb-14 pb-2  py-2 lg:px-4">
      <p className='text-white text-2xl mt-[-20px] mx-2  lg:mx-24 font-bold  right-0 md:w-[390px]'>
        Atendemos a uma variedade de planos <span className='text-sky-300'>odontológicos</span></p>        
    <div className='lg:mx-10'>
      <Arraydecards items={CARDS}/>
    </div>
    </div>

    <div>
      <Testimonials/>
    </div>
         <footer>
           <HomeFooter/>
          </footer>
      </div>
    </div>
  );
}
export default Home
