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
import { AnimatePresence, motion } from 'framer-motion';
import { calendarEvents } from './components/Events';

// FullCalendar imports
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// Constants for content types
const CONTENTS = {
  MAIN: 'main',
  ABOUT: 'about',
  CONTACT: 'contact',
  MENU: 'menu',
  CATERING: 'catering',
  CALENDAR: 'calendar',
};

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(CONTENTS.MAIN);

  const toggleContent = (content) => {
    setShowMainContent(content);
  };

  const renderContent = () => {
    switch (showMainContent) {
      case CONTENTS.MAIN:
        return <MainContent />;
      case CONTENTS.ABOUT:
        return <About />;
      case CONTENTS.CONTACT:
        return <Contact />;
      case CONTENTS.MENU:
        return <Menu />;
      case CONTENTS.CALENDAR:
        return (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            events={calendarEvents}
            firstDay={1}
            height='65vh'
            width='75vh'
          />
        );
      case CONTENTS.CATERING:
        return <Catering />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className='flex flex-col min-h-screen p-8 gap-12 sm:p-16' style={{ fontFamily: 'Gothic A1, sans-serif' }}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Pixie Food Company - Vegan Pastries in Boston</title>
        <meta
          name='description'
          content='Boston’s Pixie Food Company: Delicious Vegan Treats & Sweets available at farmers markets and pop-ups.'
        />
        <meta
          name='keywords'
          content='Pixie, Vegan, Treats, Sweets, Food, Company, Boston, Vegan Pastries Boston, Farmers Market Vegan Treats'
        />
        <meta name='author' content='Pixie Food Company' />
        <meta property='og:title' content='Pixie Food Company - Boston Vegan Pastries' />
        <meta
          property='og:description'
          content='Handmade vegan treats and sweets from Boston’s Pixie Food Company. Catch us at local farmers markets and pop-ups!'
        />
        <meta property='og:image' content='https://www.withthepixies.com/images/main_logo.svg' />
        <meta property='og:url' content='https://www.withthepixies.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Pixie Food Company - Boston Vegan Pastries' />
        <meta
          name='twitter:description'
          content='Handmade vegan treats and sweets from Boston’s Pixie Food Company. Catch us at local farmers markets and pop-ups!'
        />
        <meta name='twitter:image' content='https://www.withthepixies.com/images/main_logo.svg' />
        <link rel='icon' href='/favicon.ico' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Pixie Food Company',
            url: 'https://www.withthepixies.com',
            logo: 'https://www.withthepixies.com/images/main_logo.svg',
            sameAs: ['https://www.instagram.com/pixie.food.co/', 'https://bsky.app/profile/pixiefood.bsky.social'],
            description:
              'Boston’s Pixie Food Company: Delicious Vegan Treats & Sweets available at farmers markets and pop-ups.',
          })}
        </script>
      </Head>

      <Navbar toggleContent={toggleContent} />
      <div className='flex-grow'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={showMainContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Only render Analytics and SpeedInsights in production */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
      <Footer className='mt-auto' />
    </div>
  );
}
