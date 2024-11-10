import React from 'react';
import Navbar from '@/components/Navbar';

function About() {
  return (
    <div id="about" className=" py-12 px-4 sm:px-6 md:px-8">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pt-8 text-center">
        About Me
      </h2>

      {/* Personal Info Section */}
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl text-white font-semibold">Personal Info:</h3>
        <p className="text-base sm:text-lg text-white mt-4">
          My name is Muhammad Huzaifa, a student at GIAIC. I am also a certified Graphics Designer & SEO Executive at Marketing Shore. I am passionate about technology, especially in AI.
        </p>
      </div>

      {/* Education Section */}
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl text-white font-semibold">Education:</h3>
        <p className="text-base sm:text-lg text-white mt-4">
          I am pursuing a degree in Computer Science at D.J Sindh Govt. Science College, which I will be completing in a few months.
        </p>
      </div>
    </div>
  );
}

export default About;
