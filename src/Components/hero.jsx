import React, { useEffect } from 'react';
import heroImage from '../assets/images/section imgae.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F5F7FA] pt-32 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#263238] mb-4">
              Lessons and insights
              <span className="block text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="bg-[#4CAF4F] text-white px-8 py-3 rounded-md hover:bg-[#429c45] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Register →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1" data-aos="fade-left">
            <img 
              src={heroImage} 
              alt="Hero Illustration" 
              className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;