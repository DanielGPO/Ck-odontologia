import React from "react";

export default function CardContainer(props) {
  return (
    <div className="lg:mx-5 xl:mx-10 md:mx-2 py-5 md:py-0 ">
      <div className="flex flex-col  flex-grow rounded-b-xl rounded-t-xl md:h-[560px] xl:h-[520px] lg:h-[516px] lg:w-[340px] bg-gradient-to-r from-slate-800 to-slate-950 border-none">
        <img
          loading="lazy"
          className=" h-[290px] rounded-t-xl  md:h-[360px] lg:h-[350px] w-full  object-cover object-top "
          src={props.imagem}
          alt={props.alt}
        />

        <div className="p-5">
          <h5 className="mb-2 md:text-2xl text-lg lg:text-normal font-bold tracking-tight text-white">
            {props.titulo}
          </h5>
          <p className="mb-3  text-lg lg:text-normal text-white md:text-gray-700 md:dark:text-gray-400">
            {props.descrição}
          </p>
        </div>
      </div>
    </div>
  );
}
