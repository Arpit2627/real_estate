import React, { useState } from 'react';
import bhopal from "../assets/popular/bhopal.jpeg";
import delhi from "../assets/popular/delhi.jpeg";
import indore from "../assets/popular/indore.jpeg";
import mumbai from "../assets/popular/mumbai.jpeg";
import bangalore from "../assets/popular/banglore.jpeg";
import hyderabad from "../assets/popular/hyderabad.jpeg";

const places = [
  {
    name: "Bhopal",
    imgUrl: bhopal,
  },
  {
    name: "Delhi",
    imgUrl: delhi,
  },
  {
    name: "Indore",
    imgUrl: indore,
  },
  {
    name: "Mumbai",
    imgUrl: mumbai,
  },
  {
    name: "Bangalore",
    imgUrl: bangalore,
  },
  {
    name: "Hyderabad",
    imgUrl: hyderabad,
  },
];

const PopularRegion = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Regions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onClick={() => openModal(place.imgUrl)}
          >
            {/* Image */}
            <img
              src={place.imgUrl}
              alt={place.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Text (Always Visible) */}
            <div className="absolute inset-0 flex flex-col justify-end items-center pb-6 bg-gradient-to-t from-black via-transparent to-transparent">
              <span className="text-white text-2xl font-bold mb-8">{place.name}</span>
              <button className="mt-2 text-white text-sm font-medium border-2 border-white py-1 px-4 rounded-lg hover:bg-white hover:text-black transition-colors">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularRegion;
