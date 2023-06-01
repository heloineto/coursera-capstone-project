import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-[#495E57] w-full h-[700px] lg:h-[450px] flex justify-center lg:items-center">
      <div className="px-4 my-5 lg:my-0 lg:px-0 lg:mx-auto lg:w-[858px] grid grid-cols-1 lg:grid-cols-2 mb-5 gap-x-5">
        <div>
          <header className="font-[Markazi]">
            <h1 className="text-[60px] font-bold text-[#F4CE14]">
              Little Lemon
            </h1>
            <p className="text-[30px] text-white font-bold -mt-4">Chicago</p>
          </header>
          <p className="font-medium text-xl mt-4 text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <NavLink to="/reservations">
            <button className="mt-5 lg:mt-20 font-bold bg-[#F4CE14] py-[15px] px-[35px] text-[18px] rounded-md hover:tracking-wider transition-all">
              Reserve a Table
            </button>
          </NavLink>
        </div>
        <div className="relative h-[430px] mt-5">
          <img
            className="h-[430px] w-full lg:h-[430px] lg:w-[450px] object-cover absolute top-5 right-0 rounded-lg shadow-xl"
            src="/assets/restaurant-food.jpg"
            alt="restaurant food"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
