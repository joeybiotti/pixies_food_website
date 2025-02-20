'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faBluesky, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ toggleContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='pt-14'>
      <nav className='fixed top-0 left-0 w-full bg-black-800 z-50 py-4'>
        <div className='flex justify-between items-center px-6'>
          {/* Left side - Links */}
          <ul className={`lg:flex gap-6 text-lg ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <li>
              <Link
                href='#about'
                onClick={(e) => {
                  e.preventDefault();
                  toggleContent();
                }}
                className='font-semibold hover:text-text_color'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                onClick={(e) => {
                  e.preventDefault();
                  toggleContent();
                }}
                className='font-semibold hover:text-text_color'>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right side - Icons for desktop (always visible on desktop) */}
          <div className='hidden lg:flex gap-6'>
            <Link href='#Instagram' className='text-xl hover:text-blue-500'>
              <FontAwesomeIcon icon={faEnvelope} className='text-text_color' />
            </Link>
            <Link href='#Instagram' className='text-xl hover:text-blue-500'>
              <FontAwesomeIcon icon={faInstagram} className='text-text_color' />
            </Link>
            <Link href='#facebook' className='text-xl hover:text-blue-500'>
              <FontAwesomeIcon icon={faSquareFacebook} className='text-text_color' />
            </Link>
            <Link href='#facebook' className='text-xl hover:text-blue-500'>
              <FontAwesomeIcon icon={faBluesky} className='text-text_color' />
            </Link>
            <Link href='#facebook' className='text-xl hover:text-blue-500'>
              <FontAwesomeIcon icon={faTiktok} className='text-text_color' />
            </Link>
          </div>

          {/* Mobile Menu Button (Only visible on mobile) */}
          <div className='block lg:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-xl'>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu (collapsed) */}
        {isMenuOpen && (
          <div className='flex flex-col items-center mt-2 space-y-4 lg:hidden'>
            <div className='flex gap-4'>
              {/* Here we add flex and gap for horizontal icons */}
              <Link href='#Instagram' className='text-xl hover:text-blue-500'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <Link href='#Instagram' className='text-xl hover:text-blue-500'>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href='#facebook' className='text-xl hover:text-blue-500'>
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
              <Link href='#facebook' className='text-xl hover:text-blue-500'>
                <FontAwesomeIcon icon={faBluesky} />
              </Link>
              <Link href='#facebook' className='text-xl hover:text-blue-500'>
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
