'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState('main'); // state to toggle between components

  const toggleContent = (content) => {
    setShowMainContent(content); // switch to the specified content directly
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
    <div className='flex flex-col min-h-screen p-8 gap-12 sm:p-16 font-[family-name:var(--font-geist-sans)]'>
      {/* Pass toggleContent as a prop to Navbar */}
      <Navbar toggleContent={toggleContent} />

      {/* Conditionally render MainContent, About, or Contact */}
      <div className='flex-grow'>{renderContent()}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
