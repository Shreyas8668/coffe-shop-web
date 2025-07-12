import coffeeHero from '../assets/coffee-hero-section.png';

const Home = () => {
  return (
    <>
      <div className="bg-orange-950 text-white h-screen flex items-center px-8">
        {/* Left side content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Best Coffee</h1>
          <p className="text-xl mb-2">Make your day great with our special coffee!</p>
          <p className="mb-6 max-w-md">
            Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">Order Now</button>
            <button className=" cursor-pointer bg-transparent border border-yellow-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-black transition">Contact Us</button>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex-1 flex justify-end p-20">
          <img src={coffeeHero} alt="Coffee Hero" className="w-96 h-auto rounded shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default Home;
