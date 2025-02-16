import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-black-800 text-white py-4 mt-auto'>
      <div className='text-center'>
        <p className='text-xs'>&copy; {new Date().getFullYear()} Pixie. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
