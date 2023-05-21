import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'

function HomeFooter() {
  return (
    <div className='lg:h-[200px] justify-around items-center flex-col flex lg:flex-row w-full bg-gradient-to-r from-slate-600 to-slate-950  '>
        <div>
            <p className='lg:text-4xl text-xl py-10 lg:py-0 text-white font-extrabold'>Ck Odontologia</p>
        </div>
        <div className='flex flex-col '>
            <p className='text-2xl text-white  font-bold pb-5'>Menu</p>
            <ul className='flex flex-col justify-start'>
                <li><a className='text-lg text-white' href='/'>Home</a></li>
                <li><a className='text-lg text-white' href='/serviços'>Serviços</a></li>
                <li><a className='text-lg text-white' href='/sobrenos'>Sobre nós</a></li>
            </ul>
        </div>
        <div className='flex flex-col pb-10 md:pb-0'>
        <p className='text-2xl text-white  font-bold pb-2 pt-3'>Contato</p>
        <ul>
            <li><p className='text-white flex flex-row items-center'><FaMapMarkerAlt className='text-orange-500 mr-2'/>Centro - Rio de Janeiro</p></li>
            <li><p className='text-white flex flex-row items-center'><FaMapMarkerAlt className='text-orange-500 mr-2'/>Rua Gonçalves Dias, 89 - Subsala 203</p></li>
            <li><p className='text-white flex flex-row items-center'><MdEmail className='text-yellow-500 mr-2'/> ckodontologia2@gmail.com</p></li>
            <li><p className='text-white flex flex-row items-center'><AiFillInstagram className='text-red-400 mr-2'/>@ckodontologia</p></li>
            <li><p className='text-white flex flex-row items-center'><BsTelephone className='mr-2 text-sky-500'/>(21) 2507-5365</p></li>
        </ul>
        </div>
    </div>
  )
}

export default HomeFooter