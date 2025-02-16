import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}
