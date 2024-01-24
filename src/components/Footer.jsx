import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import footer from '../assets/footer.png'



export default function Footer() {
  function handleClick() {
    const emailAddress = 'eicodepr@gmail.com';
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
      <div className="bg-cover h-52 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${footer})` }} id="contato">
        <div className="flex justify-around">
          <div className="flex items-center justify-center lg:mr-96 md:mr-80 sm:mr-60 lg:pt-20 md:pt-16 sm:pt-10 ">
            <a          
                href={`mailto:eicodepr@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaEnvelopeCircleCheck  className="text-white lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6"/>
            </a>
          <span onClick={handleClick} className="text-white p-2 cursor-pointer">eicodepr@gmail.com</span>
          </div>
          
            <div className="flex lg:ml-96 md:ml-32 sm:ml-20  lg:pt-16 md:pt-12 sm:pt-10 ">                           
                <a target="_blank"
                      rel="noopener noreferrer" href="https://www.linkedin.com/company/eiicode/"><FaLinkedin className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 lg:p-1 md:p-1 sm:p-1 text-white" /> </a>
                <a target="_blank"
                      rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61555603889661&mibextid=ZbWKwL"><FaFacebook className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 lg:p-1 md:p-1 sm:p-1   text-white"/></a>
                <a target="_blank"
                      rel="noopener noreferrer" href="https://github.com/CalvinSoares/word-search-game"><FaGithub className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 lg:p-1 md:p-1 sm:p-1  text-white"/></a>
            </div>
        </div>
      </div>
  );
}
