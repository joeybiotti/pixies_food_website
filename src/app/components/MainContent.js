import Head from 'next/head';
import Image from 'next/image';

const MainContent = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-start'>
      <Image src='/main_logo.svg' alt='Pixie logo' width={600} height={550} priority aria-label='Pixie logo' />
    </main>
  );
};

export default MainContent;
