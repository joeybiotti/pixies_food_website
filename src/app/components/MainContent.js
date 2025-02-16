import Image from 'next/image';

const MainContent = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-center'>
      <Image className='dark' src='/pixie_logo.png' alt='Pixie logo' width={600} height={550} priority />
      <p className='text-sm text-center'>Vegan Treats & Sweets</p>
    </main>
  );
};

export default MainContent;
