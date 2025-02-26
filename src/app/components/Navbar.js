'use client';

import { useState, useEffect } from 'react';

const Navbar = ({ toggleContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check if the user has scrolled past the navbar
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Close the menu when clicking outside the navbar
  const handleClickOutside = (event) => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    if (menuButton && !menuButton.contains(event.target) && menu && !menu.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Listen for scroll and click events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='pt-10'>
      <nav
        className={`fixed top-0 left-0 w-full bg-black-800 z-50 py-4 transition-all duration-300 ease-in-out ${
          isScrolled ? 'backdrop-blur-sm' : ''
        }`}>
        <div className='flex justify-between items-center px-6'>
          <ul className='hidden lg:flex gap-6 text-xl'>
            <li>
              <button
                onClick={() => toggleContent('main')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Home'>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('about')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='About'>
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('contact')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Contact'>
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('menu')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Our Menu'>
                Our Menu
              </button>
            </li>
          </ul>
          <div className='block lg:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-6 h-6 flex flex-col justify-between items-center menu-button ${
                isMenuOpen ? 'open' : ''
              }`}
              aria-label='Menu'>
              <div
                className={`w-full h-0.5 bg-primaryText transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
              <div
                className={`w-full h-0.5 bg-primaryText transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
              <div
                className={`w-full h-0.5 bg-primaryText transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden mt-6 bg-gray-800 w-1/4 overflow-hidden transition-all duration-500 ease-in-out menu ${
            isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
          }`}>
          <ul className='space-y-4'>
            <li>
              <button
                onClick={() => toggleContent('main')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Home'>
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('about')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='About'>
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('contact')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Contact'>
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleContent('menu')}
                className='font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none text-shadow-outline'
                aria-label='Our Menu'>
                Our Menu
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
