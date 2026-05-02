import Head from 'next/head';
import Image from 'next/image';

const Catering = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-2'>
      <Head>
        <title>Pixie Food Company - Catering</title>
        <meta name='description' content='Pixie Food Company - Catering' />
      </Head>
      <div className='w-full sm:w-3/4 lg:w-1/2 mx-auto my-4 p-4 text-center'>
        <div className='flex justify-center mb-2'>
          <Image
            src='/catering.svg'
            alt='Catering'
            width={800}
            height={100}
            priority
            className='p-5'
            aria-label='Catering'
          />
        </div>
        <div className='flex justify-center'>
          {/* <picture>
            <source media='(max-width: 768px)' srcSet='/catering.svg' />
            <Image
              src='/catering_announcement.svg'
              alt='Catering Announcement'
              width={1200}
              height={300}
              priority
              className='p-5 w-full h-auto'
              aria-label='Catering Announcement'
            />
          </picture> */}
        </div>
      </div>
    </div>
  );
};

export default Catering;
