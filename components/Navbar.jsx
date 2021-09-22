import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive)

  };

  return (
    <nav className="border-b border-gray-200 bg-principal">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
        
        </div>
        <div className="flex items-center -mr-2">
          <button type="button" onClick={()=> handleClick()} className="inline-flex items-center justify-center p-2 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            { !isActive?
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              :
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
            </button>
          </div>
        </div>
      </div>
  
      <div className={isActive?"open":null} id="mobile-menu">
        <div className="flex flex-col pt-2 pb-3 space-y-1">
            <Link href='/clients'>
              <a onClick={()=> handleClick()} className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-white '>
                Clients
              </a>
            </Link>
            <Link href='/reservation'>
              <a onClick={()=> handleClick()} className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-white'>
                Réservations
              </a>
            </Link>
        </div>
      </div>
  </nav>

  );
};