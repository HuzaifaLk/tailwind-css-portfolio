import React from 'react';
import Navbar from '@/components/Navbar';


function Hero() {
  return (
    
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-right bg-cover"
      style={{
        backgroundImage: "url(/profile-png.png)",
        backgroundSize: "35%",
        backgroundPosition: "right 100px top 100px",
      }}
    >
        <Navbar />  
    
      <div className="flex items-center justify-center h-[calc(100vh-60px)] px-4 sm:px-8">
        {/* Text Section */}
        <div className="w-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-4 lg:space-y-6">
          <div className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-white">
            <p className="text-white">I am</p>
            <p className="text-white">Muhammad</p>
            <p className="text-white">Huzaifa</p>
            
          </div>
          <p>Creative Graphics Designer & SEO Executive | Aspiring Digital Strategist at GIAIC

</p>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
