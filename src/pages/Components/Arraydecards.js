import React from 'react'
import homefoto from '../../imagens/homefoto.jpg'
import arcada from '../../imagens/arcada.jpg'
import surgery from '../../imagens/surgery.jpg'

import CardsList from './CardsList'

export const CARDS = [
    {
        titulo: 'Cobrimos um gama extensa de planos',
        descrição: 'Cobrimos diversos planos para poder lhe atender melhor.',
        imagem: homefoto,
        alt: 'Foto de paciente e doutora fazendo checagem nos dentes',
        id: 1
    },
    {
        titulo: 'Atendimento personalizado',
        descrição: 'Abordamos cada caso pensando no melhor plano possível',
        imagem: surgery,    
        alt: 'Doutor e paciente em cirurgia',
        id: 2
    },
    {
        titulo: 'Clareza e comprometimento',
        descrição: 'comprometimento em tornar a sua experiência a melhor possível.',
        imagem: arcada,
        alt: 'Doutora mostrando prótese de arcada dentária',
        id: 3
    },
]


export default function Arraydecards() {

  return (
    <main className='border-none'>
      <CardsList items={CARDS}/>
        
    </main>
  )
}

