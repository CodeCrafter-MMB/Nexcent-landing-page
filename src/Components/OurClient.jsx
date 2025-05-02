import React from 'react';
import client1 from '../assets/images/client-1.svg';
import client2 from '../assets/images/client-2.svg';
import client3 from '../assets/images/client-3.svg';
import client4 from '../assets/images/client-4.svg';
import client5 from '../assets/images/client-5.svg';
import client6 from '../assets/images/client-6.svg';
import client7 from '../assets/images/client-7.svg';
import icon from '../assets/images/icon.svg';
import icon1 from '../assets/images/icon2.svg';
import icon2 from '../assets/images/icon3.svg';

const OurClient = () => {
  return (
    <section className="py-16">
      {/* Clients Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#263238] mb-4">Our Clients</h2>
          <p className="text-gray-600">We have been working with some Fortune 500+ clients</p>
        </div>
        
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-20">
          <img src={client1} alt="Client Logo 1" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client2} alt="Client Logo 2" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client3} alt="Client Logo 3" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client4} alt="Client Logo 4" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client5} alt="Client Logo 5" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client6} alt="Client Logo 6" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
          <img src={client7} alt="Client Logo 7" className="h-10 md:h-16 w-auto hover:opacity-80 transition-opacity" />
        </div>

        {/* Community Management Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#263238] mb-4">
            Manage your entire community<br />in a single system
          </h2>
          <p className="text-gray-600">Who is Nextcent suitable for?</p>
        </div>

        {/* Three Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Membership Organizations */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <img src={icon} alt="Membership" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold text-[#263238] mb-3">
              Membership Organizations
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* National Associations */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <img src={icon1} alt="National Associations" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold text-[#263238] mb-3">
              National Associations
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Clubs and Groups */}
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <img src={icon2} alt="Clubs and Groups" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold text-[#263238] mb-3">
              Clubs And Groups
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient; 