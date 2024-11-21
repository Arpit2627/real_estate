
import React from "react";
import im from "../assets/home/2nd.webp";

const HomePage = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${im})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover property more easily
        </h1>
        <p className="text-lg md:text-xl  text-white mb-8">
          MProperty helps people find their perfect home for a better life
        </p>

        {/* Search Section */}
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="hidden md:flex flex-row bg-white shadow-lg rounded-full overflow-hidden">
            {/* Desktop Search Section */}
            <select className="p-4 border-r border-gray-300  focus:outline-none">
              <option value="for-sell">For Sell</option>
              <option value="for-rent">For Rent</option>
            </select>
            <select className="p-4 border-r border-gray-300 focus:outline-none">
              <option value="property">Property</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
            <input
              type="text"
              placeholder="Search location or project name"
              className="flex-grow p-4 focus:outline-none"
            />
            <button className="px-4 py-2 mx-4 my-1 bg-black text-white hover:bg-gray-800 focus:outline-none rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.35-7.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
              Search
            </button>
          </div>

          {/* Mobile Search Section */}
          <div className="flex flex-col shadow-lg rounded-lg p-4 space-y-4 md:hidden">
           
                 <select className="p-4 border border-gray-300  focus:outline-none rounded-md bg-transparent">
                <option value="for-sell ">For Sell</option>
                <option value="for-rent">For Rent</option>
                </select>
                <select className="p-4 border border-gray-300 focus:outline-none rounded-md bg-transparent">
                <option value="property">Property</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                </select>
                <input
                type="text"
                placeholder="Search location or project name"
                className="p-4 border border-gray-300 focus:outline-none rounded-md bg-transparent"
                />


            <button className="w-full  bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none flex items-center justify-center">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.35-7.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
