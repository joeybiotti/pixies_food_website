import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className='flex flex-col gap-4 items-center justify-start min-h-screen pt-6'>
      <Image src='/main_logo.svg' alt='Pixie logo' width={600} height={550} priority aria-label='Pixie logo' />
{/*      

     Commenting out until new menu is ready

     
      <a
        href='#'
        className='px-4 py-2 text-white rounded transition'
        style={{
          backgroundColor: 'var(--primary-purple-light)',
          transitionProperty: 'background-color',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-purple-light)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-purple)')}
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}>
        See our special Vegan Nite Market Menu!
      </a> */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key='modal-overlay'
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50'
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className='fixed inset-0 flex items-center justify-center z-50'
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                className='bg-white w-full max-w-6xl h-screen relative shadow-xl overflow-hidden'
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <button
                  className='absolute top-4 right-4 text-3xl text-black bg-white p-3 rounded-full z-50 hover:bg-black hover:text-white transition-colors duration-300'
                  onClick={closeModal}
                  aria-label='Close Modal'>
                  &times;
                </button>

                <div className='w-full h-full overflow-auto p-4'>
                  <Image
                    src='/nitemarketmenu.svg'
                    alt='Night Market Menu'
                    width={1200}
                    height={1500}
                    priority
                    className='object-contain w-full rounded-lg'
                    style={{
                      transform: 'scale(1)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    aria-label='Night Market Menu'
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MainContent;
