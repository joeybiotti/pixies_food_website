import { useState } from 'react';
import Image from 'next/image';

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className='flex flex-col items-center justify-start pt-2'>
        <div className='w-full sm:w-1/2 mx-auto my-4 p-4 text-center'>
          <div className='flex justify-center my-4'>
            <Image
              src='/our_menu.svg'
              alt='Our Menu logo'
              width={600}
              height={400}
              priority
              className='p-2'
              aria-label='Contact Us'
            />
          </div>

          <div className='cursor-pointer' onClick={openModal}>
            <div className='w-full overflow-x-auto max-w-full'>
              <Image
                src='/Menu.png'
                alt='Menu'
                width={1000}
                height={800}
                priority
                className='object-contain'
                aria-label='Menu'
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='lg:block'>
          <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={closeModal}></div>

          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-white p-4 w-4/5 h-4/5 max-w-5xl max-h-5xl relative'>
              <button
                className='absolute top-2 right-2 text-2xl text-white bg-black p-2 rounded-full'
                onClick={closeModal}
                aria-label='Close Modal'>
                &times;
              </button>

              <div className='w-full h-full flex justify-center items-center'>
                <div className='w-full h-full overflow-y-scroll max-h-full'>
                  <Image
                    src='/Menu.png'
                    alt='Menu'
                    width={1000}
                    height={800}
                    priority
                    className='object-contain'
                    aria-label='Menu'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
