'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const Navbar = ({ toggleContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleClickOutside = (event) => {
    if (
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 200);
    window.addEventListener('scroll', handleScrollDebounced);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: 'Home', value: 'main' },
    { label: 'About', value: 'about' },
    { label: 'Catering', value: 'catering' },
    { label: 'Contact', value: 'contact' },
    // TODO Finish the calendar component and then re-add
    // { label: 'Calendar', value: 'calendar' }, 
  ];

  const buttonStyle = 'font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none';

  return (
    <div className='pt-5'>
      <Head>
        <title>Pixie Food Company - Navbar</title>
        <meta name='description' content='Pixie Food Company - Navbar' />
      </Head>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'py-2 backdrop-blur-sm' : 'py-4'
        }`}>
        <div className='flex justify-between items-center px-6'>
          <ul className='hidden lg:flex gap-4 text-xl'>
            {menuItems.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => {
                    toggleContent(item.value);
                    handleLinkClick();
                  }}
                  className={buttonStyle}
                  aria-label={item.label}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className='block lg:hidden'>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-6 h-6 flex justify-center items-center text-3xl font-bold text-primaryText transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 scale-125' : 'scale-100'
              }`}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              aria-label='Menu'>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 scale-125' : 'scale-100'
                }`}>
                ★
              </span>
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          className={`lg:hidden mt-6 w-[35%] overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
          } bg-background`}>
          <ul className='space-y-4'>
            {menuItems.map((item) => (
              <li key={item.value} className='border-b-2 border-primaryText'>
                <button
                  onClick={() => {
                    toggleContent(item.value);
                    handleLinkClick();
                  }}
                  className={buttonStyle}
                  aria-label={item.label}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
