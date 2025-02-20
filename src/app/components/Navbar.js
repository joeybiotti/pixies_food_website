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
          <ul className='hidden lg:flex gap-6 text-lg'>
            <li>
              <button
                onClick={() => toggleContent('main')}
                className='font-semibold hover:text-text_color pl-2'
                aria-label='Home'>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('about')}
                className='font-semibold hover:text-text_color pl-2'
                aria-label='About'>
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('contact')}
                className='font-semibold hover:text-text_color pl-2'
                aria-label='Contact'>
                Contact
              </button>
            </li>
          </ul>

          <div className='hidden lg:flex gap-6'>
            <Link href='#Email' className='text-xl hover:text-blue-500' aria-label='Email'>
              <FontAwesomeIcon icon={faEnvelope} className='text-text_color' />
            </Link>
            <Link href='#Instagram' className='text-xl hover:text-blue-500' aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} className='text-text_color' />
            </Link>
            <Link href='#Facebook' className='text-xl hover:text-blue-500' aria-label='Facebook'>
              <FontAwesomeIcon icon={faSquareFacebook} className='text-text_color' />
            </Link>
            <Link href='#Bluesky' className='text-xl hover:text-blue-500' aria-label='Bluesky'>
              <FontAwesomeIcon icon={faBluesky} className='text-text_color' />
            </Link>
            <Link href='#TikTok' className='text-xl hover:text-blue-500' aria-label='TikTok'>
              <FontAwesomeIcon icon={faTiktok} className='text-text_color' />
            </Link>
          </div>

          <div className='block lg:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-xl' aria-label='Menu'>
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden'>
            <ul className='space-y-4'>
              <li>
                <button
                  onClick={() => toggleContent('main')}
                  className='font-semibold hover:text-text_color pl-2'
                  aria-label='Home'>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleContent('about')}
                  className='font-semibold hover:text-text_color pl-2'
                  aria-label='About'>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleContent('contact')}
                  className='font-semibold hover:text-text_color pl-2'
                  aria-label='Contact'>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
