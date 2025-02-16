'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='pt-16'>
      <nav className='fixed top-0 left-0 w-full bg-gray z-50 py-4'>
        <div className='flex justify-between items-center px-6'>
          <div className='block lg:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-xl'>
              ☰
            </button>
          </div>
          <ul className={`lg:flex gap-6 text-lg ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <li>
              <Link href='#home' className='hover:text-blue-500'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#about' className='hover:text-blue-500'>
                About
              </Link>
            </li>
            <li>
              <Link href='#contact' className='hover:text-blue-500'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
