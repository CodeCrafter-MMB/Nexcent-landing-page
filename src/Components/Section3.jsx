import React from "react";
import unlock from "../assets/images/unlock image.svg";
import section from "../assets/images/pana.svg";

const Section3 = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* First Section - Pixelgrade */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-10 md:mb-16" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full max-w-sm md:max-w-md mx-auto" data-aos="fade-right" data-aos-delay="200">
              <img
                src={unlock}
                alt="Pixelgrade Story"
                className="w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left" data-aos="fade-left" data-aos-delay="400">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md hover:bg-[#429c45] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Second Section - Statistics */}
        <div className="bg-[#F5F7FA] rounded-lg p-4 md:p-8 mb-10 md:mb-16" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Helping a local <br />
                <span className="text-[#4CAF4F]">business reinvent itself</span>
              </h2>
              <p className="text-gray-600 mb-4">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-[#4CAF4F] text-2xl md:text-3xl font-bold mb-2">
                    2,245,341
                  </h3>
                  <p className="text-gray-600">Members</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-[#4CAF4F] text-2xl md:text-3xl font-bold mb-2">
                    46,328
                  </h3>
                  <p className="text-gray-600">Clubs</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-[#4CAF4F] text-2xl md:text-3xl font-bold mb-2">
                    828,867
                  </h3>
                  <p className="text-gray-600">Event Bookings</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-[#4CAF4F] text-2xl md:text-3xl font-bold mb-2">
                    1,926,436
                  </h3>
                  <p className="text-gray-600">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Footer Design */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full max-w-sm md:max-w-md mx-auto" data-aos="fade-right" data-aos-delay="200">
              <img
                src={section}
                alt="Footer Design"
                className="w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left" data-aos="fade-left" data-aos-delay="400">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                How to design your site footer like we did
              </h2>
              <p className="text-gray-600 mb-6">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt.
              </p>
              <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md hover:bg-[#429c45] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
