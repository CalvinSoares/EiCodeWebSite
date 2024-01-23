import {  useEffect } from 'react';
import logo from '../assets/eicode.png';

export default function NavBar() {

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 998);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // function handleMenu() {
  //   console.log('click');
  //   setIsMenuOpen(!isMenuOpen);
  // }

  function handleContactUs() {
    const email = 'eicode@example.com';
    const mailtoLink = `mailto:${email}?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email`;
    window.location.href = mailtoLink;
  }

  return (
      <div className="bg-[#1F1F1F] scroll-smooth w-screen h-20">
        <header className="flex justify-center items-center h-36">
          <div className=" flex items-center justify-center h-24 m-auto ">
            <a
              href="/"
            >
              <img src={logo} alt="Logo" className="md:w-[40px] lg:w-[95px] md:h-[40px] lg:h-[70px]" />
            </a>
          </div>

          <div className='m-auto '>
            <a href="#AboutUs" className='m-5 text-lg text-white  hover:text-[#6A39D1] hover:underline'>Sobre</a>
            <a href="#Projetos" className='m-5 text-lg text-white hover:text-[#6A39D1] hover:underline'>Projetos</a>
            <a href="#Parcerias" className='m-5 text-lg text-white hover:text-[#6A39D1] hover:underline'>Parcerias</a>       
           <a href="#contato" className='m-5 text-lg text-white hover:text-[#6A39D1] hover:underline'>Contato</a>
          </div>

          <div className=" flex items-center justify-center h-24  m-auto ">
            <button className="bg-white w-36 h-8 rounded-3xl" onClick={handleContactUs}>
              Fale com a gente!
            </button>
          </div>
        </header>
      </div>
  );

}
