import Head from 'next/head';
import Image from 'next/image';

const Catering = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-0'>
      <Head>
        <title>Pixie Food Company - Catering</title>
        <meta name='description' content='Pixie Food Company - Catering' />
      </Head>
        <div className='flex justify-center'>
          <picture>
            <source media='(max-width: 768px)' srcSet='/catering_2.svg' />
            <Image
              src='/catering_2.svg'
              alt='Catering Announcement'
              width={800}
              height={300}
              priority
              className='p-5 w-full h-auto'
              aria-label='Catering Announcement'
            />
          </picture>
        </div>
      </div>
  );
};

export default Catering;
