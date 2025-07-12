import React from 'react';
import hotBeverages from '../assets/hot-beverages.png';

const Mennuu = () => {
  // Dummy array for repeat (you can later change to different images or names)
  const menuItems = Array(8).fill({
    title: 'Hot Beverages',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enjoy our freshly brewed hot beverages!',
    image: hotBeverages,
  });

  return (
    <div className="py-10 px-6 bg-red-200 text-black">
      <h1 className="text-4xl font-bold text-center mb-10 underline">OUR MENU</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-orange-100 p-6 rounded-lg shadow-lg max-w-xs"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-64 h-64 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
            <p className="text-center text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mennuu;
