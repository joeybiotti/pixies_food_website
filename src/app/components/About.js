import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h3>About Us</h3>
      <p>
        Nostrud consequat sint amet mollit labore ullamco culpa consectetur id exercitation reprehenderit sint.
        Excepteur do proident commodo ea cillum mollit. Ut occaecat fugiat eu ea. Laborum commodo ea reprehenderit
        cillum sit.
      </p>
      <Link href='/' className='font-semibold hover:text-text_color'>
        Go to Home
      </Link>
    </div>
  );
};

export default About;
