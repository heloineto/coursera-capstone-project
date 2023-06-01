import Guide from '../../Guide';
import About from '../About';
import Footer from '../Footer';
import Header from '../Header';
import Hero from '../Hero';
import Specials from '../Specials';
import Testimonials from '../Testimonials';

function Home() {
  return (
    <div className="font-[Karla]">
      <Guide>
        <img
          src="/preview.svg"
          alt="preview"
          className="w-[1440px] mt-[220px] mx-auto"
        />
      </Guide>
      <div className="absolute z-50 flex flex-col w-full top-0 left-0">
        <Header />
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
