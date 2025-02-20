import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faBluesky, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-black-800 text-white py-4 mt-auto'>
      <div className='flex flex-col items-center'>
        <p className='text-xs'>&copy; {new Date().getFullYear()} Pixie Food Company. All rights reserved.</p>
        <div className='flex gap-4 mt-2'>
          <Link href='mailto:your-email@example.com' className='text-lg hover:text-blue-500'>
            <FontAwesomeIcon icon={faEnvelope} className='text-text_color' />
          </Link>
          <Link href='https://www.instagram.com/yourprofile' className='text-lg hover:text-blue-500'>
            <FontAwesomeIcon icon={faInstagram} className='text-text_color' />
          </Link>
          <Link href='https://www.facebook.com/yourprofile' className='text-lg hover:text-blue-500'>
            <FontAwesomeIcon icon={faSquareFacebook} className='text-text_color' />
          </Link>
          <Link href='https://bsky.app/profile/yourprofile' className='text-lg hover:text-blue-500'>
            <FontAwesomeIcon icon={faBluesky} className='text-text_color' />
          </Link>
          <Link href='https://www.tiktok.com/@yourprofile' className='text-lg hover:text-blue-500'>
            <FontAwesomeIcon icon={faTiktok} className='text-text_color' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
