import partner from '../assets/bymind.jpg'

export default function Partners() {

  return (
    <div className="bg-[#1F1F1F] h-screen flex justify-center items-center" id='Parcerias'>
      <div className="p-5 text-center">
        <div className=" py-5">
          <h1 className="text-white text-6xl font-bold pb-20">Parceiros</h1>
          <div className=''>
          <img src={partner} className='w-96 h-24 rounded-3xl' alt='by mind image logo'/>
          </div>
        </div>
      </div>
    </div>

  )
}
