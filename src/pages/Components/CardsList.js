import React from 'react'
import CardContainer from './CardContainer'
import {motion} from 'framer-motion'

export default function CardsList(props) {

  return (
    <motion.div
            initial={{
            x:500,
            opacity:0,
        }}
        animate={{  x: 0,
          opacity:1,}}
          transition={{ duration: 1.5 }}
          
      className='flex lg:m-4 flex-col  lg:max-w-full md:flex-row  bg-transparent border-none'>
        {props.items.map((items) => <CardContainer key={items.id}
        id={items.id}
        titulo={items.titulo}
        imagem={items.imagem}
        descrição={items.descrição}
        alt={items.alt}
        />)}
       
    </motion.div>
  )
}

