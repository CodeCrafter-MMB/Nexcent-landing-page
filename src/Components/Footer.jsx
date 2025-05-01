import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#263238] text-white py-8 md:py-12" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-4 text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center justify-center md:justify-start shadow-amber-50 space-x-2">
              <img src={logo} alt="Nexcent" className="h-8 transform hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-300 transform hover:scale-110 transition-transform duration-300" />
              <FaDribbble className="text-xl cursor-pointer hover:text-gray-300 transform hover:scale-110 transition-transform duration-300" />
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-300 transform hover:scale-110 transition-transform duration-300" />
              <FaYoutube className="text-xl cursor-pointer hover:text-gray-300 transform hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-sm text-gray-400">Copyright © 2024 Landify X/O.</p>
            <p className="text-sm text-gray-400">All rights reserved</p>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Status</a></li>
            </ul>
          </div>

          {/* Stay up to date Section */}
          <div className="text-center md:text-left" data-aos="fade-left" data-aos-delay="500">
            <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
            <div className="flex max-w-xs mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] transition-all duration-300 w-full"
              />
              <button className="bg-gray-600 px-4 py-2 rounded-r hover:bg-gray-500 transition-all duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer