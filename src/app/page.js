'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Catering from './components/Catering';
import Footer from './components/Footer';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState('main');
  const toggleContent = (content) => {
    setShowMainContent(content);
  };

  const renderContent = () => {
    switch (showMainContent) {
      case 'main':
        return <MainContent />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'menu':
        return <Menu />;
      case 'catering':
        return <Catering />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className='flex flex-col min-h-screen p-8 gap-12 sm:p-16 font-[family-name:var(--font-geist-sans)]'>
      <Navbar toggleContent={toggleContent} />
      <div className='flex-grow'>{renderContent()}</div>
      <Footer />
    </div>
  );
}
