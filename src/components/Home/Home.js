import Guide from '../../Guide';
import Header from '../Header';
import Hero from '../Hero';
import Specials from '../Specials/Specials';

function Home() {
  return (
    <div className="font-[Karla]">
      <Guide>
        <img
          src="/preview.svg"
          alt="preview"
          className="w-[1440px] mt-10 mx-auto"
        />
      </Guide>
      <div className="absolute z-50 flex flex-col w-full h-full top-0 left-0">
        <Header />
        <Hero />
        <Specials />
      </div>
    </div>
  );
}

export default Home;
