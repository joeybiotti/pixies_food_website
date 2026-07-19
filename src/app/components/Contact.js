import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const honeypot = e.target.honeypot.value;
    if (honeypot) {
      setStatus('Bot detected.');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message, name, phone }),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setEmail('');
        setMessage('');
        setName('');
        setPhone('');
      } else {
        let msg = 'Unknown error';
        try {
          const errorData = await response.json();
          msg = errorData.message || msg;
        } catch {}
        setStatus(`Error: ${msg}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error sending email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-3 py-2 text-base border border-gray-200 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/40 dark:focus:ring-purple-400/40 focus:border-purple-700 dark:focus:border-purple-400 transition';

  return (
    <div className='flex flex-col items-center justify-start pt-2'>
      <Head>
        <title>Pixie Food Company - Contact</title>
        <meta name='description' content='Pixie Food Company - Contact' />
      </Head>
      <div className='w-full sm:w-1/2 mx-auto my-4 p-4 text-center'>
        <div className='flex justify-center my-4'>
          <Image
            src='/contact_us.png'
            alt='Contact Us'
            width={800}
            height={100}
            priority
            className='p-5'
            aria-label='Contact Us'
          />
        </div>
        <form onSubmit={handleSubmit} className='mt-6 space-y-3 max-w-sm mx-auto'>
          <div>
            <label htmlFor='name' className='block text-left text-sm font-medium text-purple-700 dark:text-purple-400 mb-1'>
              Name <span className='text-gray-400 font-normal'>(optional)</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              placeholder='Jane Doe'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-left text-sm font-medium text-purple-700 dark:text-purple-400 mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClasses}
              placeholder='jane@example.com'
            />
          </div>

          <div>
            <label htmlFor='phone' className='block text-left text-sm font-medium text-purple-700 dark:text-purple-400 mb-1'>
              Phone <span className='text-gray-400 font-normal'>(optional)</span>
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClasses}
              placeholder='(555) 555-5555'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-left text-sm font-medium text-purple-700 dark:text-purple-400 mb-1'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows='3'
              className={`${inputClasses} resize-none`}
              placeholder='Tell us what you need...'
            />
          </div>

          {/* Honeypot - hidden from real users */}
          <div className='hidden' aria-hidden='true'>
            <label htmlFor='honeypot'>Leave this field empty</label>
            <input type='text' id='honeypot' name='honeypot' tabIndex='-1' autoComplete='off' />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full py-2 text-base bg-purple-700 dark:bg-purple-400 text-white font-medium rounded-md hover:bg-purple-800 dark:hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p
              role='status'
              aria-live='polite'
              className={`text-center text-sm ${
                status.startsWith('Error') ? 'text-red-600 font-medium' : 'text-green-600 font-medium'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;