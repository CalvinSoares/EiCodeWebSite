import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Partners from './components/Partners'
import Projects from './components/Projects';
import project1 from './assets/project1.jpg'

function App() {

  return (
    <>
    <NavBar />
    <AboutUs />
    {/* <Team /> */}
    <Projects 
      id='Projetos'
      img={project1}
      title='Search Game'
      description="Um jogo mobile de caça palavras, com diferentes níveis de dificuldade e temas distintos."
    />
    <Partners />
    <Footer />
    </>
  )
}

export default App
