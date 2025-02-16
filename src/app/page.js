import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[90vh] p-12 pb-28 gap-20 sm:p-28 font-[family-name:var(--font-geist-sans)]'>
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <MainContent />
      <Footer />
    </div>
  );
}
