import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MProperty</h3>
            <p>Ashoka Garden, Bhopal</p>
            <p>462023 bhopal</p>
            <p>Bhoapl</p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Trending Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Project Location
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Property Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Propero App</h3>
            <div className="flex space-x-2 mb-4">
              <a href="#">
                <img
                  src="https://via.placeholder.com/100x40"
                  alt="App Store"
                  className="w-auto"
                />
              </a>
              <a href="#">
                <img
                  src="https://via.placeholder.com/100x40"
                  alt="Google Play"
                  className="w-auto"
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">Payment Support</h3>
            <div className="flex space-x-2">
              <img
                src="https://via.placeholder.com/40x40"
                alt="PayPal"
                className="w-10"
              />
              <img
                src="https://via.placeholder.com/40x40"
                alt="Klarna"
                className="w-10"
              />
              <img
                src="https://via.placeholder.com/40x40"
                alt="MasterCard"
                className="w-10"
              />
              <img
                src="https://via.placeholder.com/40x40"
                alt="Dana"
                className="w-10"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 MProperty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
