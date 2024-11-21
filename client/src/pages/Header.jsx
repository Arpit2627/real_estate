import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          Mproperty
        </div>

        {/* Navigation Menu (Desktop and Tablets) */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#" className="text-md font-bold text-black hover:text-gray-600">For Sell</a>
          <a href="#" className="text-md font-bold text-black hover:text-gray-600">For Rent</a>
          <a href="#" className="text-md font-bold text-black hover:text-gray-600">New Property</a>
          <a href="#" className="text-md font-bold text-black hover:text-gray-600">Blogs</a>
          <a href="#" className="text-md font-bold text-black hover:text-gray-600">Contact Us</a>
        </nav>

        {/* Right-side buttons (Desktop and Tablets) */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-lg font-bold text-gray-600 hover:text-black">Login</button>
          <button className="px-6 py-2 border border-black rounded-full bg-black text-white text-lg hover:bg-white hover:text-black">
            Register
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
            // Cross Icon when menu is open (mobile)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Hamburger Menu Icon when menu is closed (mobile)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Shows when toggled open) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-yellow-300">
          <a href="#" className="block px-4 py-2 border-b rounded-md border-white text-yellow-300 hover:bg-gray-500">For Sell</a>
          <a href="#" className="block px-4 py-2 border-b border-white rounded-md text-yellow-300 hover:bg-gray-500">For Rent</a>
          <a href="#" className="block px-4 py-2 border-b border-white rounded-md text-yellow-300 hover:bg-gray-500">New Property</a>
          <a href="#" className="block px-4 py-2 border-b border-white rounded-md text-yellow-300 hover:bg-gray-500">Blogs</a>
          <a href="#" className="block px-4 py-2 border-b border-white rounded-md text-yellow-300 hover:bg-gray-500">Contact Us</a>
          <div className="border-t border-white">
            <a href="#" className="block px-4 py-2 border-b border-white rounded-md text-yellow-300 hover:bg-gray-500">Login</a>
            <a href="#" className="block px-4 py-2 border border-white text-center rounded-md text-yellow-300 hover:bg-gray-800">
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
