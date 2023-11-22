import Link from 'next/link'

import InputSearch from './InputSearch'

const Header = () => {
  return (
    <header className='flex justify-between items-center h-24 px-8 bg-merme-cream-bg dark:bg-merme-black border-b-4 border-merme-black dark:border-merme-cream-bg'>
      <Link href='/' className='flex justify-center items-center font-bold text-2xl text-merme-black dark:text-merme-cream-bg'>
        <span>LOGO</span>
        <h1 className='ml-2'>MermeTasker</h1>
      </Link>
      <div className='flex items-center gap-3'>
        <InputSearch />
        <button className="flex justify-center items-center bg-merme-orange hover:bg-orange-400 w-72 h-12 dark:bg-merme-skyblue border-2 border-merme-black dark:border-merme-cream-bg text-xl text-merme-cream-bg dark:text-merme-black font-semibold rounded-md transition-colors duration-300">
          <svg className="w-6 h-6 text-2xl mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <p>Crear tablero</p>
        </button>
      </div>
      <div className="relative w-10 h-10 overflow-hidden bg-merme-black dark:bg-merme-cream-bg rounded-full ">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
      </div>
    </header>
  )
}

export default Header