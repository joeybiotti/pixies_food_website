'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const Navbar = ({ toggleContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleScrollDebounced = debounce(handleScroll, 200);

  const handleClickOutside = (event) => {
    if (
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false); // Close the menu if clicked outside
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
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
    { label: 'Our Menu', value: 'menu' },
    { label: 'Catering', value: 'catering' },
    { label: 'Contact', value: 'contact' },
  ];

  const buttonStyle = 'font-semibold text-primaryText hover:text-secondaryText pl-2 focus:outline-none'; // Removed text-shadow-outline

  return (
    <div className='pt-5'>
      <Head>
        <title>Pixie Food Company - Navbar</title>
        <meta name='description' content='Pixie Food Company - Navbar' />
      </Head>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'py-2' : 'py-4'
        } ${isScrolled ? 'backdrop-blur-sm' : ''}`}>
        <div className='flex justify-between items-center px-6'>
          <ul className='hidden lg:flex gap-4 text-xl'>
            {menuItems.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => {
                    toggleContent(item.value);
                    handleLinkClick(); // Close the menu when a link is clicked
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
              className={`relative w-6 h-6 flex flex-col justify-between items-center menu-button ${
                isMenuOpen ? 'open' : ''
              }`}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
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
          ref={menuRef}
          className={`lg:hidden mt-6 bg-gray-800 w-[35%] h-screen overflow-hidden transition-all duration-500 ease-in-out menu ${
            isMenuOpen ? 'opacity-100' : 'h-0 opacity-0'
          }`}>
          <ul className='space-y-4'>
            {menuItems.map((item) => (
              <li key={item.value} className='border-b-2 border-primaryText'>
                <button
                  onClick={() => {
                    toggleContent(item.value);
                    handleLinkClick(); // Close the menu when a link is clicked
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
