import Head from 'next/head';
import Image from 'next/image';

const MainContent = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-start'>
      <Head>
        <title>Pixie Food Company - Main Content</title>
        <meta name='description' content='Pixie Food Company - Main Content' />
      </Head>
      <Image src='/main_logo.svg' alt='Pixie logo' width={600} height={550} priority aria-label='Pixie logo' />
      <p className='text-lg font-bold text-center text-primaryText'>Vegan Treats & Sweets</p>
    </main>
  );
};

export default MainContent;
