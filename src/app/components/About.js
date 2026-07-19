import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-2'>
      <Head>
        <title>Pixie Food Company - About</title>
        <meta name='description' content='Pixie Food Company - About' />
      </Head>
      <div className='w-full sm:w-3/4 lg:w-1/2 mx-auto my-4 p-4 text-center'>
        <div className='flex justify-center mb-2'>
          <Image
            src='/about_us.png'
            alt='About Us'
            width={800}
            height={100}
            priority
            className='p-5'
            aria-label='About Us'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
