import React from 'react';
import aboutImage from '../assets/about-image.jpg';

const About = () => {
  return (
    <>
      <div className="flex px-10 py-10 ml-25  bg-white text-black">
        {/* Image */}
        <img
          src={aboutImage}
          alt="About us"
          className="rounded-full h-80 w-80 object-cover shadow-lg"
        />

        {/* Content */}
        <div className="flex flex-col justify-center ml-80 max-w-xl">
          <h1 className="underline font-bold text-3xl mb-4">ABOUT US</h1>
          <p className="text-lg leading-relaxed">
            At Coffee in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere,
            where guests can relax, unwind, and enjoy their time in comfort.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
