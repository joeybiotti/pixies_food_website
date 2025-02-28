import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faBluesky, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-black-800 text-white py-4'>
      <div className='flex flex-col items-center'>
        <p className='text-xs mb-2'>&copy; {new Date().getFullYear()} Pixie Food Company. All rights reserved.</p>
        <div className='flex gap-4'>
          <Link href='mailto:your-email@example.com' className='text-lg hover:text-blue-500' aria-label='Email us'>
            <FontAwesomeIcon icon={faEnvelope} className='text-primaryText' />
          </Link>
          <Link
            href='https://www.instagram.com/yourprofile'
            className='text-lg hover:text-blue-500'
            aria-label='Instagram'>
            <FontAwesomeIcon icon={faInstagram} className='text-primaryText' />
          </Link>
          {/* <Link
            href='https://www.facebook.com/yourprofile'
            className='text-lg hover:text-blue-500'
            aria-label='Facebook'>
            <FontAwesomeIcon icon={faSquareFacebook} className='text-primaryText' />
          </Link> */}
          <Link
            href='https://bsky.app/profile/yourprofile'
            className='text-lg hover:text-blue-500'
            aria-label='Bluesky'>
            <FontAwesomeIcon icon={faBluesky} className='text-primaryText' />
          </Link>
          {/* <Link href='https://www.tiktok.com/@yourprofile' className='text-lg hover:text-blue-500' aria-label='TikTok'>
            <FontAwesomeIcon icon={faTiktok} className='text-primaryText' />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
