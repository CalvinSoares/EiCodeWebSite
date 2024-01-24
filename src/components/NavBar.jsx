import logo from '../assets/eicode.png';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";



export default function NavBar() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  function handleContactUs() {
    const email = 'eicode@example.com';
    const mailtoLink = `mailto:${email}?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email`;
    window.location.href = mailtoLink;
  }

  return (
      <div className="bg-[#1F1F1F] scroll-smooth h-20">
        <header className="flex justify-center items-center h-36">
          <div className=" flex items-center justify-center lg:h-24 md:h-20 sm:h-12 lg:m-auto md:m-auto sm: m-20 ">
            <a
              href="/"
            >
              <img src={logo} alt="Logo" className="sm:w-[50px] md:w-[60px] lg:w-[95px] sm:h-[30px] md:h-[40px] lg:h-[70px]" />
            </a>
          </div>

          <div className='m-auto hidden md:flex'>
            <a href="#AboutUs" className='m-5 lg:text-lg md:text-base sm:text-sm text-white  hover:text-[#6A39D1] hover:underline'>Sobre</a>
            <a href="#Projetos" className='m-5 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline'>Projetos</a>
            <a href="#Parcerias" className='m-5 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline'>Parcerias</a>       
           <a href="#contato" className='m-5 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline'>Contato</a>
          </div>

          <div className=" flex items-center justify-center h-24  m-auto ">
            <button className="bg-white lg:w-40 lg:h-8 lg:rounded-3xl md:w-40 md:h-6 md:rounded-2xl lg:text-base md:text-base hidden md:flex items-center justify-center" onClick={handleContactUs}>
              Fale com a gente!
            </button>
          </div>
          <div onClick={handleNav} className='block md:hidden m-5'>
            {nav ? <IoClose size={30}/> : <TiThMenu size={30} />}
            
          </div>

          <div className={nav ? 'absolute mt-40 mr-72 w-[60%] border-r border-r-gray-900 bg-[#1f1f1f] ease-in-out duration-500' : 'fixed left-[-100%]'}>
             <a
              href="/"
            >
              <img src={logo} alt="Logo" className="sm:w-[50px] md:w-[60px] lg:w-[95px] sm:h-[30px] md:h-[40px] lg:h-[70px]
              m-4" />
            </a>
            <div className='p-4 uppercase flex flex-col  '>    
              <a href="#AboutUs" className='p-4 border-b border-gray-600 lg:text-lg md:text-base sm:text-sm text-white  hover:text-[#6A39D1] hover:underline cursor-pointer'>Sobre</a>
              <a href="#Projetos" className='p-4 border-b border-gray-600 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline cursor-pointer'>Projetos</a>
              <a href="#Parcerias" className='p-4 border-b border-gray-600 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline cursor-pointer'>Parcerias</a>       
              <a href="#contato" className='p-4 lg:text-lg md:text-base sm:text-sm text-white hover:text-[#6A39D1] hover:underline cursor-pointer'>Contato</a>      
            </div>
          </div>

        </header>
      </div>
  );

}
