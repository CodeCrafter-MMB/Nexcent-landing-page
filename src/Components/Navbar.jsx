import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-white py-4 fixed w-full top-0 left-0 border-b z-50 transition-all duration-300 ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#263238] transform hover:scale-105 transition-transform">
              <img src={logo} alt="NeXcent Logo" className="h-8" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md hover:bg-[#429c45] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Register Now →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none transform hover:scale-110 transition-transform">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
