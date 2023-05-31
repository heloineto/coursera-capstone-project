const testimonials = [
  {
    rating: 10,
    name: 'John Doe',
    image: '/assets/john-doe.jpg',
    review:
      'I love this place! The food is amazing and the service is excellent. I have been here several times and will keep coming back.',
  },
  {
    rating: 10,
    name: 'Alex Smith',
    image: '/assets/alex-smith.jpg',
    review:
      'The food is delicious and the service is great. I highly recommend this place to anyone who loves good food.',
  },
  {
    rating: 10,
    name: 'Jane Doe',
    image: '/assets/jane-doe.jpg',
    review:
      "I've been coming here for years and I'm never disappointed. The food is always delicious and the service is great.",
  },
  {
    rating: 10,
    name: 'John Smith',
    image: '/assets/john-smith.jpg',
    review:
      'Everything is always delicious and the service is great. I highly recommend this place to anyone who loves good food.',
  },
];

function Testimonials() {
  return (
    <div className="w-full flex flex-col mt-[76px] pt-[122px] pb-[181px] bg-[#495E57]">
      <h2 className="mx-auto font-bold text-[36px] font-[Markazi] text-white">
        Testimonials
      </h2>
      <div className="mx-auto w-[858px] gap-5 grid grid-cols-4">
        {testimonials.map(({ image, name, rating, review }) => (
          <div
            key={name}
            className="bg-white py-[25px] flex flex-col mt-[54px] px-[24px] gap-2.5"
          >
            <p className="text-bold">Rating: {rating} / 10</p>
            <div className="flex items-center gap-[12px]">
              <img
                className="w-[46px] h-[46px] rounded-full"
                src={image}
                alt={`${name} profile`}
              />
              {name}
            </div>
            <p className="text-sm ">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
