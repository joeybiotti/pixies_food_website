'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState('main'); // state to toggle between components

  const toggleContent = () => {
    setShowMainContent((prev) => {
      switch (prev) {
        case 'main':
          return 'about';
        case 'about':
          return 'contact';
        default:
          return 'main';
      }
    });
  };

  const renderContent = () => {
    switch (showMainContent) {
      case 'main':
        return <MainContent />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null; // or a default component
    }
  };

  return (
    <div className='grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[80vh] p-8 pb-20 gap-12 sm:p-16 font-[family-name:var(--font-geist-sans)]'>
      {/* Pass toggleContent as a prop to Navbar */}
      <Navbar toggleContent={toggleContent} />

      {/* Conditionally render MainContent, About, or Contact */}
      {renderContent()}

      {/* Footer */}
      <Footer />
    </div>
  );
}
