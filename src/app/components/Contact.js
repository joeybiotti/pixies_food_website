import Image from 'next/image';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-start pt-2'>
      <div className='w-full sm:w-1/2 mx-auto my-4 p-4 text-center'>
        <div className='flex justify-center my-4'>
          <Image
            src='/contact.svg'
            alt='Pixie logo'
            width={600}
            height={400}
            priority
            className='p-2'
            aria-label='Contact Us'
          />
        </div>
        <p className='mb-1 text-ce'>
          Get in touch with us for any questions, feedback, or support. We&apos;d love to hear from you!
        </p>
        <a
          href='mailto:joey@withthepixies.com'
          className='text-primaryText font-extrabold hover:underline'
          aria-label='Email us'>
          Email us!
        </a>
      </div>
    </div>
  );
};

export default Contact;
