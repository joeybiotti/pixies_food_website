import Head from 'next/head';
import Image from 'next/image';

const MainContent = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-start'>
      <Image src='/main_logo.svg' alt='Pixie logo' width={600} height={550} priority aria-label='Pixie logo' />
      <p className='text-lg font-bold text-center text-primaryText'>Vegan Treats & Sweets</p>
      <div className='w-screen bg-primaryText py-4'>
        <div className='text-xl font-bold text-center text-black'>
          <p>Come see us at Herbstalk on June, 7th 2025 in Somerville, MA.</p>{' '}
          <p>
            {' '}
            For more infomation, click{' '}
            <a className='underline text-white' href='https://www.herbstalk.org/'>
              here
            </a>{' '}
            or see our{' '}
            <a className='underline text-white' href='/Herbstalk menu_HC.pdf' target='_blank' rel='noopener noreferrer'>
              Special Menu
            </a>
          </p>
          <p>We can't wait to see you!</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
