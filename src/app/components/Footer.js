import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-black-800 text-white py-4'>
      <div className='flex flex-col items-center'>
        <p className='text-xs mb-2'>&copy; {new Date().getFullYear()} Pixie Food Company. All rights reserved.</p>
        <div className='flex gap-4'>
          <Link
            href='https://www.instagram.com/pixie.food.co/'
            className='text-lg hover:text-blue-500'
            aria-label='Instagram'>
            <FontAwesomeIcon icon={faInstagram} className='text-primaryText' />
          </Link>
          <Link
            href='https://bsky.app/profile/pixiefood.bsky.social'
            className='text-lg hover:text-blue-500'
            aria-label='Bluesky'>
            <FontAwesomeIcon icon={faBluesky} className='text-primaryText' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
