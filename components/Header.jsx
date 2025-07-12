const Header = () => {
  return (
   <div className="flex items-center justify-between bg-red-950 p-4 ">
      <h1 className="text-3xl text-white font-bold">☕ Coffee</h1>
      <div className="flex gap-10 text-xl mr-6">
        <a href="#Home" className="text-white hover:text-yellow-300 transition">Home</a>
        <a href="#About" className="text-white hover:text-yellow-300 transition">About</a>
        <a href="#Menu" className="text-white hover:text-yellow-300 transition">Menu</a>
        <a href="#Testimonials" className="text-white hover:text-yellow-300 transition">Testimonials</a>
        <a href="#Gallery" className="text-white hover:text-yellow-300 transition">Gallery</a>
        <a href="#Contact" className="text-white hover:text-yellow-300 transition">Contact</a>
      </div>
    </div>
  );
};

export default Header;
