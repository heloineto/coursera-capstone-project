function About() {
  return (
    <div className="mx-auto w-[858px] mt-[64px]">
      <div className="grid grid-cols-[0.75fr_1fr] gap-[50px]">
        <div>
          <h1 className="text-[50px] font-[Markazi] font-bold">Little Lemon</h1>
          <p className="text-[30px] font-[Markazi] font-bold -mt-2.5">
            Chicago
          </p>
          <p className="text-[20px] font-bold mt-8 leading-6 text-justify">
            Mario and Adrian are the owners of the Little Lemon restaurant. They
            are two brothers who have been working in the restaurant business
            for over 10 years. They have worked in many restaurants and have
            learned a lot about the business. They have always wanted to open
            their own restaurant and now they have finally done it. They are
            very excited to be able to share their passion for food with the
            world.
          </p>
        </div>
        <div className="relative">
          <img
            className="w-[276px] h-[338px] absolute -bottom-12 object-cover object-right rounded-lg"
            src="/assets/mario-and-adrian-laughing.jpg"
            alt="Mario and Adrian laughing"
          />
          <img
            className="w-[276px] h-[338px] absolute top-0 right-0 object-cover rounded-lg"
            src="/assets/mario-and-adrian-talking.jpg"
            alt="Mario and Adrian talking"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
