import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

function Navbar() {

  const [toggle, settoggle] = useState(false)

  function addtoggle(){
    settoggle(!toggle)
  }


  
  const phoneNumber = '2125075365'; 
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);


  return (
    <div className='md:px-16 w-full px-2  items-center bg-slate-100/50 py-8 flex flex-row justify-between'>
        
        <div className='mx-2 md:mx-0'>
        <h2 className='md:text-[26px] md:font-bold text-[22px] text-gray-700'
        ><span className=' font-bold text-blue-800'
        >CK</span> Odonto<span
        >logia</span></h2>
        </div>

        <div>
            <ul className='hidden md:flex flex-row items-center'>
            <Link to={'/'}>
                <li className='nav_item hov'>Home</li>
                </Link>
                <Link to={'/serviços'}>
                <li className='nav_item hov'>Serviços</li>
                </Link>
                <Link to={'/sobrenos'}>
                <li className='nav_item hov'>Sobre nós</li>
                </Link>
    
                <li className='nav_item border-blue-400 hover:bg-gray-200 p-2 px-4 md:ml-2 hover:font-bold  hover:border-blue-600 rounded-lg border-[1px]'>
             <a className='flex flex-row items-center'  href={`https://wa.me/${encodedPhoneNumber}`}
                   target="_blank"
                    rel="noopener noreferrer">
                      Agendar
                      <BsWhatsapp className=' text-green-400 text-lg ml-2'/>
                    </a>
                </li>
            </ul>
           {toggle ? 
          <p onClick={addtoggle} className='md:hidden mx-2'><AiOutlineClose className='text-black text-2xl'/> </p>
           : 
           <p onClick={addtoggle} className='md:hidden'><FaBars className='text-black text-2xl'/></p>}
        </div>

        {toggle 
        
        ?
        
        <div className='absolute md:hidden z-10 top-20 right-0 bg-gray-400 w-full'>
            <ul className='flex flex-col items-center '>

              <Link className='font-semibold text-black h-[52px] hover:bg-gray-200 px-auto flex items-center justify-center w-full text-[16px] hover:whote' to={'/'}>
                Home        
              </Link>
                  <Link className='font-semibold text-black h-[52px] hover:bg-gray-200 px-auto flex items-center justify-center w-full text-[16px] hover:whote' to={'/serviços'}>
                  Serviços        
                  </Link>
                  <Link className='font-semibold text-black h-[52px] hover:bg-gray-200 px-auto flex items-center justify-center w-full text-[16px] hover:whote' to={'/sobre'}>
                  Sobre nós
                  </Link>
            </ul>
        </div> 
        
        : <div className='absolute'/>}

        
    </div>
  )
}

export default Navbar