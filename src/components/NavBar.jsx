import  { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/eicode.png'

export default function NavBar() {
    let Links =[
        {name:"SOBRE",link:"#AboutUs"},
        {name:"PROJETOS",link:"#Projetos"},
        {name:"PARCEIROS",link:"/#Parcerias"},
        {name:"CONTATOS",link:"/#contato"},
      ];
      let [open, setOpen] =useState(false);

      function handleContactUs() {
        const email = 'eicode@example.com';
        const mailtoLink = `mailto:${email}?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email`;
        window.location.href = mailtoLink;
      }

      return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-[#363636] py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src={logo} alt="logo" className='w-12 h-10' />
            </div>
            {/* Menu icon */}
            <div 
            onClick={()=>setOpen(!open)} 
            className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'
            >
                {
                    open ? <XMarkIcon color='#6A39D1' /> : <Bars3BottomRightIcon color='#6A39D1' />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#363636] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link, index) => (
                      <li 
                      key={index} 
                      className='md:ml-8 md:my-0 my-7 font-semibold'
                      >
                          <a 
                          onClick={()=>setOpen(!open)}   
                          href={link.link} 
                          className='text-white hover:text-blue-400 duration-500'
                          >{link.name}</a>
                      </li>
                  ))
                }
                <button 
                onClick={handleContactUs} 
                className='btn bg-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'
                >Fale Conosco</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
}