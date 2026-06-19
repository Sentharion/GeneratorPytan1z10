import Link from 'next/link';

const PanelProwadzacego = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full py-10 overflow-x-hidden' >
      <Link href="\"> <span className="absolute top-4 left-4 sm:top-10 sm:left-10 text-xl font-bold p-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-110 duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Powrót</span></Link>
      <h2 className='text-2xl sm:text-4xl font-bold mb-7 text-transform: uppercase'>
        Wybierz etap
      </h2>
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-14 justify-center items-center'>
        <Link href="/etap1" className='font-semibold bg-gradient-to-br from-[#ebd197] via-[#b48811] to-[#a2790d] w-48 h-48 sm:w-60 sm:h-60 border-4 border-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 duration-300 hover:rotate-3'>
          Etap I
        </Link>
        <Link href="/etap2" className='font-semibold bg-gradient-to-br from-[#ebd197] via-[#b48811] to-[#a2790d] w-48 h-48 sm:w-60 sm:h-60 border-4 border-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 duration-300 hover:rotate-3'>
          Etap II
        </Link>
        <Link href="/final" className='font-semibold bg-gradient-to-br from-[#ebd197] via-[#b48811] to-[#a2790d] w-48 h-48 sm:w-60 sm:h-60 border-4 border-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 duration-300 hover:rotate-3'>
          Finał
        </Link>
      </div>
    </div>
  );
}

export default PanelProwadzacego;

