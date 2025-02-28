'use client';

import { useState } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Catering from './components/Catering';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <Head>
        <title>Pixie Food Company</title>
        <meta name='description' content='Pixie Food Company - Vegan Treats & Sweets' />
        <meta name='keywords' content='Pixie, Vegan, Treats, Sweets, Food, Company' />
        <meta name='author' content='Pixie Food Company' />
        <meta property='og:title' content='Pixie Food Company' />
        <meta property='og:description' content='Pixie Food Company - Vegan Treats & Sweets' />
        <meta property='og:image' content='/main_logo.svg' />
        <meta property='og:url' content='https://www.withthepixies.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Pixie Food Company' />
        <meta name='twitter:description' content='Pixie Food Company - Vegan Treats & Sweets' />
        <meta name='twitter:image' content='/main_logo.svg' />
      </Head>
      <Navbar toggleContent={toggleContent} />
      <body>
        <div className='flex-grow'>{renderContent()}</div>
      </body>
      <Analytics />
      <SpeedInsights />
      <Footer />
    </div>
  );
}
