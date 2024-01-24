import img from '../assets/project1.jpg'

export default function Projects() {

  return (
<div className="bg-[#1F1F1F]"  id="Projetos">
    <div className=" h-screen flex justify-center items-center ">
      <div className="mx-10">
      <a href='https://github.com/CalvinSoares/word-search-game' target='_blank' rel='noopener noreferrer'>
        <img src={img} className="rounded-3xl border-white border-2 hover:opacity-40 duration-500 ease-in-out" alt="projeto search game" width="550" height="450" loading="lazy" />
        </a>
      </div>
    <div className="">
        <h1 className="text-white text-6xl font-bold p-4">Search Game</h1>
        <p className="text-white text-lg max-w-[500px] p-4">Um jogo mobile de caça palavras, com diferentes níveis de dificuldade e temas distintos.</p>
      </div>    

    </div>
    {/* <div className='shape3'></div> */}
  </div>
  )
}


