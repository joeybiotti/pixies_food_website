import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Head>
        <title>Pixie Food Company - Menu</title>
        <meta name='description' content='Pixie Food Company - Menu' />
      </Head>
      <div className='flex flex-col items-center justify-start pt-2'>
        <div className='w-full sm:w-3/4 md:w-1/2 mx-auto my-2 p-2 text-center'>
          <div className='flex justify-center mb-2'>
            <Image
              src='/ourmenu.svg'
              alt='Our Menu logo'
              width={800}
              height={100}
              priority
              className='p-2'
              aria-label='Contact Us'
            />
          </div>

          <div className='cursor-pointer' onClick={openModal}>
            <div className='w-full overflow-x-auto max-w-full'>
              <Image
                src='/Menu_Feb2025.svg'
                alt='Menu'
                width={1000}
                height={800}
                priority
                className='object-contain w-full h-auto'
                aria-label='Menu'
              />
            </div>
          </div>
        </div>
      </div>

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                className='bg-gray-500 p-4 w-full max-w-7xl h-4/5 relative rounded-md shadow-lg'
                onClick={(e) => e.stopPropagation()}
                style={{ overflow: 'hidden' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <button
                  className='absolute top-4 right-4 text-3xl text-black bg-primaryText p-3 rounded-full z-50 hover:text-white transition-colors duration-300'
                  onClick={closeModal}
                  aria-label='Close Modal'>
                  &times;
                </button>

                <div className='w-full h-full overflow-auto'>
                  <Image
                    src='/Menu_Feb2025.svg'
                    alt='Menu'
                    width={1200}
                    height={1000}
                    priority
                    className='object-contain w-full rounded-lg'
                    style={{
                      transform: 'scale(1.1)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    aria-label='Menu'
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
