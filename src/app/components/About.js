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
            src='/aboutus.svg'
            alt='About Us'
            width={800}
            height={100}
            priority
            className='p-5'
            aria-label='About Us'
          />
        </div>
        <p className='mt-5 mb-2 text-center px-2'>
          Pixie is all about creating magical moments for everyone! We’re a family-owned shop bringing fun, accessible,{' '}
          <span className='font-bold text-primaryText'>DELICIOUS</span> vegan treats to little corners of New England.
        </p>
        <p className='mb-2 text-center px-5 text-primaryText'>★</p>
        <p className='mb-2 text-center px-3'>Follow us on Instagram for the latest.</p>
      </div>
    </div>
  );
};

export default About;
