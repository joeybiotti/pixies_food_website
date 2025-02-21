'use client';

import { useState } from 'react';

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
                className='font-semibold text-primaryText hover:text-secondaryText pl-2'
                aria-label='Home'>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('about')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2'
                aria-label='About'>
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('contact')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2'
                aria-label='Contact'>
                Contact
              </button>
            </li>
          </ul>

          {/* <div className='hidden lg:flex gap-6'>
            <Link href='mailto:your-email@example.com' className='text-xl hover:text-blue-500' aria-label='Email'>
              <FontAwesomeIcon icon={faEnvelope} className='text-primarytext' />
            </Link>
            <Link
              href='https://www.instagram.com/yourprofile'
              className='text-xl hover:text-blue-500'
              aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} className='text-primarytext' />
            </Link>
            <Link
              href='https://www.facebook.com/yourprofile'
              className='text-xl hover:text-blue-500'
              aria-label='Facebook'>
              <FontAwesomeIcon icon={faSquareFacebook} className='text-primarytext' />
            </Link>
            <Link
              href='https://bsky.app/profile/yourprofile'
              className='text-xl hover:text-blue-500'
              aria-label='Bluesky'>
              <FontAwesomeIcon icon={faBluesky} className='text-primarytext' />
            </Link>
            <Link
              href='https://www.tiktok.com/@yourprofile'
              className='text-xl hover:text-blue-500'
              aria-label='TikTok'>
              <FontAwesomeIcon icon={faTiktok} className='text-primarytext' />
            </Link>
          </div> */}

          <div className='block lg:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-3xl font-bold text-primaryText'
              aria-label='Menu'>
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
                  className='font-semibold text-primaryText hover:text-secondaryText pl-2'
                  aria-label='Home'>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleContent('about')}
                  className='font-semibold text-primaryText hover:text-secondaryText pl-2'
                  aria-label='About'>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleContent('contact')}
                  className='font-semibold text-primaryText hover:text-secondaryText pl-2'
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
