import img from '../assets/project1.jpg'

export default function Projects() {

  return (
    <div 
    className="bg-[#1F1F1F]"  
    id="Projetos"
    >
      <div className=" h-screen lg:flex md:flex sm:flex  xs:flex xs:flex-wrap sm:text-center justify-center items-center xs:justify-center xs:items-center ">
        <div className="mx-10 ">
          <a 
          href='https://github.com/CalvinSoares/word-search-game' 
          target='_blank' 
          rel='noopener noreferrer'
          >
            <img 
            src={img} 
            className="rounded-3xl border-white border-2 hover:opacity-40 duration-500 ease-in-out" 
            alt="projeto search game" 
            width="550" 
            height="450" 
            loading="lazy" 
            />
          </a>
        </div>
        <div className="  sm:text-center sm:items-center sm:justify-center xs:text-center lg:mt-[1px] md:mt-[1px] sm:mt-[1px] xs:mt-[-200px] xs:items-center xs:justify-center">
            <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl xs:text-3xl font-bold p-4">Search Game</h1>
            <p className="text-white lg:text-lg md:text-md sm:text-base lg:max-w-[500px] p-4">Um jogo mobile de caça palavras, com diferentes níveis de dificuldade e temas distintos.</p>
        </div>    

      </div>
    </div>
  )
}


