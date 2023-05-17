import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import HomeFooter from './Components/HomeFooter';

function Serviços() {

    const planos = [
        {
            titulo: 'Bradesco',
            descrição: "Como prestadores credenciados do plano Bradesco, oferecemos atendimento completo aos nossos pacientes, incluindo tratamentos preventivos, restaurações, tratamentos de canal, extrações e próteses. Além disso, os beneficiários do plano Bradesco podem realizar exames radiográficos e receber orientações sobre a melhor forma de manter a saúde bucal.",
        },
        {
            titulo: 'Odonto Prev',
            descrição: "A Odonto Prev é uma das principais seguradoras do mercado odontológico e, Oferecemos aos nossos pacientes uma ampla gama de tratamentos e procedimentos. Entre os serviços oferecidos pelo plano, destacamos as consultas de rotina, tratamentos de canal, restaurações, limpezas e colocação de próteses dentárias.",
        },
        {
            titulo: 'Rede Unna',
            descrição: "O plano Rede Unna é um dos mais abrangentes em termos de cobertura odontológica e, como prestadores credenciados, oferecemos aos nossos pacientes todo o suporte necessário para manter uma boa saúde bucal. Entre os serviços cobertos pelo plano, destacamos as consultas, tratamentos de canal, colocação de próteses dentárias, limpezas e orientações sobre higiene oral.",
        },
        {
            titulo: 'Amil',
            descrição: "O plano Amil oferece cobertura completa em odontologia, incluindo consultas de rotina, restaurações, tratamentos de canal, extrações, colocação de próteses dentárias e muito mais. Garantimos aos nossos pacientes um atendimento de qualidade, com todo o suporte necessário para manter uma boa saúde bucal.",
        },
        {
            titulo: 'Golden Cross',
            descrição: "Como prestadores credenciados do plano Golden Cross, oferecemos aos nossos pacientes uma ampla gama de serviços odontológicos, incluindo consultas, limpezas, tratamentos de canal, restaurações, próteses e orientações sobre higiene oral.",
        },
    ]

  return (
    <div className='bg-slate-800  w-full'>
      <p className='text-2xl font-bold text-white p-10'>Serviços & Planos</p>
     
     <div className=' flex relative flex-col'>

        <div className=' m-6'>
            <p className='text-white text-xl mx-10 pb-4'>Cobrimos os planos</p>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                {planos.map(plano => 
                    <li className=' p-5'>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                      >{plano.titulo}</h5>
                       <p className="text-[18px] text-white dark:text-gray-300">
                     {plano.descrição}
                      </p>
                  </div>
                </li> )}
            </ul>
        </div>


        <div className='flex flex-col lg:flex-row '>

            <div className=' text-center p-10'>
                <p className='dark:text-gray-300 text-lg p-2'>
                    Como prestadores credenciados das principais seguradoras do mercado, estamos empenhados em oferecer um atendimento odontológico de qualidade aos nossos pacientes. Se você é beneficiário de algum desses planos, não hesite em entrar em contato conosco para agendar uma consulta. Estamos à disposição para ajudá-lo a manter a saúde bucal em dia!
                </p>
            </div>

      <div className=' lg:w-[880px] '>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                       <SwiperSlide>
                    <img
                        className="object-contain w-full h-96"
                        src="https://banco.bradesco/assets/classic/img/linkedin.png"
                        alt="Bradesco"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-96"
                        src="https://sintaemasp.org.br/wp-content/uploads/2021/07/sintaema-odontoprev-beneficio-saude.jpg"
                        alt="Odontoprev logo"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-96"
                        src="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/e0/c5/c4/e0c5c4e2-6ddb-b2a6-1ae7-c5f45e272bb6/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
                        alt="Rede unna"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-96"
                        src="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/amil-dental1.jpg"
                        alt="Amil"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-96"
                        src="https://www.conveniomedicoempresarial.com.br/img/noticias/convenio-medico-golden-cross-pme.jpg"
                        alt="Golden Cross"
                    />
                </SwiperSlide>
            </Swiper>

      </div>
        </div>
     </div>
     
     <footer>
      <HomeFooter/>
    </footer>

    </div>
  )
}

export default Serviços