import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-12'>
      <div className='mx-auto my-8 p-4 max-w-4xl text-center'>
        <h3 className='text-2xl font-bold mb-1'>About Us</h3>
        <p className='mb-1'>
          Nostrud consequat sint amet mollit labore ullamco culpa consectetur id exercitation reprehenderit sint.
          Excepteur do proident commodo ea cillum mollit. Ut occaecat fugiat eu ea. Laborum commodo ea reprehenderit
          cillum sit.
        </p>
        <div className='flex justify-center my-8'>
          <Image src='/pixie_logo.png' alt='Pixie logo' width={200} height={167} priority className='p-4' />
        </div>
      </div>
    </div>
  );
};

export default About;
