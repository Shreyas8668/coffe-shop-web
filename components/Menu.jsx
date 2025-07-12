import React from 'react';
import hotBeverages from '../assets/hotBeverages.png'; // Check path and file name

const Menu = () => {
  return (
    <div className="py-10 px-6 bg-red-200 text-black">
      <h1 className="text-4xl font-bold text-center mb-10 underline">OUR MENU</h1>

      <div className="flex flex-col items-center bg-orange-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <img
          src={hotBeverages}
          alt="Hot Beverages"
          className="w-64 h-64 object-cover rounded mb-4"
        />
        <h4 className="text-2xl font-semibold mb-2">Hot Beverages</h4>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enjoy our freshly brewed hot beverages!
        </p>
      </div>
    </div>
  );
};

export default Menu;
