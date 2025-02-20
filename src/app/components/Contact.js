import Image from 'next/image';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-12'>
      <div className='mx-auto my-8 p-4 max-w-4xl text-center'>
        <h3 className='text-2xl font-bold mb-1'>Contact Us</h3>
        <p className='mb-1'>
          Get in touch with us for any questions, feedback, or support. We&apos;d love to hear from you!
        </p>
        <div className='flex justify-center my-8'>
          <Image src='/pixie_logo.png' alt='Pixie logo' width={200} height={167} priority className='p-4' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
