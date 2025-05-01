import React from "react";
import tesla from "../assets/images/image 9.svg";
import caring1 from "../assets/images/image 18.svg";
import caring2 from "../assets/images/image 19.svg";
import caring3 from "../assets/images/image 20.svg";
import logo1 from "../assets/images/client-1.svg";
import logo2 from "../assets/images/client-2.svg";
import logo3 from "../assets/images/client-3.svg";
import logo4 from "../assets/images/client-4.svg";
import logo5 from "../assets/images/client-5.svg";
import logo6 from "../assets/images/client-6.svg";

const Section4 = () => {
  return (
    <div className="md:px-0 max-w-screen-2xl">
      {/* Tesla Section */}
      <div className="bg-[#F5F7FA] py-8 md:py-12 px-4 md:px-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Tesla Image */}
          <div className="md:w-1/3 w-full flex justify-center" data-aos="fade-right" data-aos-delay="200">
            <img
              src={tesla}
              alt="Tesla Logo"
              className="max-w-[100px] md:max-w-[150px] transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right: Text Content */}
          <div className="md:w-2/3 w-full text-center md:text-left" data-aos="fade-left" data-aos-delay="400">
            <p className="text-neutralGrey text-sm mb-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam at elementum ex. Maecenas faucibus sapien a odio
              varius, in facilisis dui accumsan. Donec mattis, metus nec
              fringilla aliquam, justo nulla sollicitudin lorem, vitae tincidunt
              sapien risus a quam.
            </p>

            <h3 className="text-neutralDGrey font-semibold text-lg mb-1">
              Tim Smith
            </h3>
            <p className="text-sm text-neutralGrey mb-6">
              British Dragon Boat Racing Association
            </p>

            {/* Logos */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center mb-6">
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
                <img 
                  key={index}
                  src={logo} 
                  alt="client logo" 
                  className="h-5 md:h-6 transform hover:scale-110 transition-transform duration-300" 
                />
              ))}
            </div>

            <button className="text-[#4CAF4F] font-semibold hover:text-[#429c45] transition-all duration-300 transform hover:scale-105">
              Meet all customers →
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="text-center mt-10 md:mt-13 mb-8 md:mb-12 max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-xl md:text-3xl font-semibold text-neutralDGrey">
          Caring is the new marketing
        </h2>
        <p className="text-neutralGrey mt-4 text-sm md:text-base">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and tips. See how others joining the community, and
          how our Community are increasing their membership income and impact.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 md:mt-14 px-4 md:px-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
          <img src={caring1} alt="" className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
          <div className="px-4 md:px-5 py-3 md:py-4">
            <h4 className="text-neutralDGrey font-semibold text-sm md:text-base mb-3 line-clamp-2 hover:text-[#4CAF4F] transition-colors">
              Creating Streamlined Safeguarding Processes with OneRen
            </h4>
            <button className="text-brandPrimary text-sm font-bold hover:text-[#429c45] transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
              Readmore <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
          <img src={caring2} alt="" className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
          <div className="px-4 md:px-5 py-3 md:py-4">
            <h4 className="text-neutralDGrey font-semibold text-sm md:text-base mb-3 line-clamp-2 hover:text-[#4CAF4F] transition-colors">
              What are your safeguarding responsibilities and how can you manage them?
            </h4>
            <button className="text-brandPrimary text-sm font-bold hover:text-[#429c45] transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
              Readmore <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto transform hover:scale-105" data-aos="fade-up" data-aos-delay="600">
          <img src={caring3} alt="" className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300" />
          <div className="px-4 md:px-5 py-3 md:py-4">
            <h4 className="text-neutralDGrey font-semibold text-sm md:text-base mb-3 line-clamp-2 hover:text-[#4CAF4F] transition-colors">
              Revamping the Membership Model with Triathlon Australia
            </h4>
            <button className="text-brandPrimary text-sm font-bold hover:text-[#429c45] transition-all duration-300 transform hover:scale-105 flex items-center gap-1">
              Readmore <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pellentesque Section */}
      <div className="text-center py-10 md:py-15 mt-8 md:mt-9 bg-[#F5F7FA] md:px-0 px-4" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl text-neutralDGrey font-semibold mb-4">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>
        <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md hover:bg-[#429c45] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Get a Demo →
        </button>
      </div>
    </div>
  );
};

export default Section4;
