import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const honeypot = e.target.honeypot.value;

    if (honeypot) {
      setStatus('Bot detected.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-start pt-2'>
      <Head>
        <title>Pixie Food Company - Contact</title>
        <meta name='description' content='Pixie Food Company - Contact' />
      </Head>
      <div className='w-full sm:w-1/2 mx-auto my-4 p-4 text-center'>
        <div className='flex justify-center my-4'>
          <Image
            src='/contactus.svg'
            alt='Contact Us'
            width={800}
            height={100}
            priority
            className='p-5'
            aria-label='Contact Us'
          />
        </div>
        <p className='mt-5 mb-2 text-center'>
          Get in touch with us for any questions, feedback, or support. We&apos;d love to hear from you!
        </p>
        <a
          href='mailto:joey@withthepixies.com'
          className='text-primaryText font-extrabold hover:underline'
          aria-label='Email'>
          Shoot us an Email!
        </a>

        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          <div>
            <label htmlFor='email' className='block text-left font-semibold'>
              Your Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full p-2 border border-gray-300 rounded-md text-black'
              placeholder='Your Email'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-left font-semibold'>
              Your Message:
            </label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='w-full p-2 border border-gray-300 rounded-md text-black'
              rows='5'
              placeholder='Your Message'
            />
          </div>
          <div className='hidden'>
            <label htmlFor='honeypot' className='block text-left font-semibold'>
              Leave this field empty:
            </label>
            <input
              type='text'
              id='honeypot'
              name='honeypot'
              className='w-full p-2 border border-gray-300 rounded-md text-black'
              placeholder='Leave this field empty'
            />
          </div>
          <button type='submit' className='w-full p-2 bg-primaryText text-white rounded-md hover:bg-primaryText/80'>
            Send Message
          </button>
          {status && (
            <p className={`mt-2 text-center ${status.startsWith('Error') ? 'text-red-600 font-bold' : ''}`}>{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
