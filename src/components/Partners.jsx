import partner from '../assets/bymind.jpg'

export default function Partners() {

  return (
    <div className="bg-[#1F1F1F] h-screen flex justify-center items-center" id='Parcerias'>
      <div className="p-5 text-center">
        <div className=" py-5">
          <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl font-bold pb-20">Parceiros</h1>
          <a href='http://bymind-ai.com/'>
          <img src={partner} className='lg:w-96 lg:h-24 md:w-80 md:h-20 sm:w-70 sm:h-16 rounded-3xl' alt='by mind image logo'/>
          </a>
        </div>
      </div>
    </div>

  )
}
