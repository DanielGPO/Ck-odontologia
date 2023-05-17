import React from 'react'

export default function CardContainer(props) {
  return (
    <div className='lg:mx-10 md:mx-2 py-5 md:py-0 '>
      <div className='md:w-[260px] lg:h-[530px] rounded-b-xl  lg:w-[327px]  sm:w-[340px] w-full bg-slate-900 border-none'>

        <img className=" h-[290px] rounded-t-xl  md:h-[360px] lg:h-[350px] w-full object-cover object-top "
          src={props.imagem} alt={props.alt} />

        <div className="p-5">

          <h5 className="mb-2 md:text-2xl text-lg lg:text-normal font-bold tracking-tight text-gray-900 dark:text-white"
          >{props.titulo}</h5>
          <p className="mb-3  text-lg lg:text-normal text-gray-700 dark:text-gray-400"
          >{props.descrição}</p>

        </div>
      </div>

    </div>
  )
}
