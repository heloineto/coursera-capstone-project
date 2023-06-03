import About from '../../components/About';

import Hero from '../../components/Hero';
import Specials from '../../components/Specials';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}

export default Home;
