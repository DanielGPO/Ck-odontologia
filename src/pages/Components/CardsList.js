import React from 'react'
import CardContainer from './CardContainer'

export default function CardsList(props) {

  return (
    <div
           
      className='flex lg:m-4 flex-col  lg:max-w-full md:flex-row  bg-transparent border-none'>
        {props.items.map((items) => <CardContainer key={items.id}
        id={items.id}
        titulo={items.titulo}
        imagem={items.imagem}
        descrição={items.descrição}
        alt={items.alt}
        />)}
       
    </div>
  )
}

