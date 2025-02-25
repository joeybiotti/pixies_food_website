import Image from 'next/image';

const MainContent = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-start'>
      <Image
        // className='dark'
        src='/main_logo.svg'
        alt='Pixie logo'
        width={600}
        height={550}
        priority
        aria-label='Pixie logo'
      />
      <p className='text-sm text-center'>Vegan Treats & Sweets</p>
    </main>
  );
};

export default MainContent;
