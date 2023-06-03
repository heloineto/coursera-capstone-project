import { NavLink } from 'react-router-dom';

export const specials = [
  {
    image: '/assets/greek-salad.jpg',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.',
  },
  {
    image: '/assets/bruschetta.jpg',
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.',
  },
  {
    image: '/assets/lemon-dessert.jpg',
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <div className="px-4 lg:px-0 lg:mx-auto lg:w-[858px] mt-[130px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[40px] font-medium">Specials</h2>
        <NavLink to="#">
          <button
            className="font-bold bg-[#F4CE14] py-[15px] px-[35px] text-[18px] rounded-md hover:tracking-wider transition-all"
            type="button"
          >
            Online Menu
          </button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[34px] mt-[54px]">
        {specials.map((special) => (
          <div
            key={special.title}
            className="bg-[#EDEFEE] rounded-xl overflow-hidden flex flex-col shadow"
          >
            <img
              className="h-[185px] w-full object-cover shadow-xl hover:scale-105 transition-all"
              src={special.image}
              alt="restaurant food"
            />
            <div className="px-[25px] py-5 grow flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-bold font-[Markazi]">
                  {special.title}
                </h3>
                <p className="text-[16px] text-[#EE9972] font-bold">
                  {special.price}
                </p>
              </div>
              <p className="text-[16px] mt-5 leading-6 mb-10">
                {special.description}
              </p>
              <button
                className="mt-auto text-left flex items-center gap-4"
                type="button"
              >
                Order a delivery
                <img src="/assets/cart.svg" alt="cart" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specials;
