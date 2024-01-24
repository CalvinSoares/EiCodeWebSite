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
          <div className="flex items-center justify-center mr-96 pt-20">
            <a          
                href={`mailto:eicodepr@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaEnvelopeCircleCheck  className="text-white w-10 h-10"/>
            </a>
          <span onClick={handleClick} className="text-white p-2 cursor-pointer">eicodepr@gmail.com</span>
          </div>
          
            <div className="flex ml-96 pt-16">                           
                <a target="_blank"
                      rel="noopener noreferrer" href="https://www.linkedin.com/company/eiicode/"><FaLinkedin className="w-12 h-12 p-1 text-white" /> </a>
                <a target="_blank"
                      rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61555603889661&mibextid=ZbWKwL"><FaFacebook className="w-12 h-12 p-1 text-white"/></a>
                <a target="_blank"
                      rel="noopener noreferrer" href="https://github.com/CalvinSoares/word-search-game"><FaGithub className="w-12 h-12 p-1 text-white"/></a>
            </div>
        </div>
      </div>
  );
}
