import img from '../assets/project1.jpg'

export default function Projects() {

  return (
<div className="bg-[#1F1F1F] ">
    <div className=" h-screen flex justify-center items-center flex-col ">
    <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Search Game</h1>
        <p className="lead">Um jogo mobile de caça palavras, com diferentes níveis de dificuldade e temas distintos.</p>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
      <a href='https://github.com/CalvinSoares/word-search-game' target='_blank' rel='noopener noreferrer'>
        <img src={img} className="d-block mx-lg-auto img-fluid projectsImg" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </a>
      </div>

    </div>
    {/* <div className='shape3'></div> */}
  </div>
  )
}


