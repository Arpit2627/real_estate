
import React, { useState } from "react";

import i1 from "../assets/property/1.jpeg";
import i2 from "../assets/property/2.jpeg";
import i3 from "../assets/property/3.jpeg";
import i4 from "../assets/property/4.jpeg";
import i5 from "../assets/property/5.jpeg";
import i6 from "../assets/property/6.jpeg";
import i7 from "../assets/property/7.jpeg";
import i8 from "../assets/property/8.jpeg";
import i9 from "../assets/property/9.jpeg";
import i10 from "../assets/property/10.jpeg";
import i11 from "../assets/property/11.jpeg";
import i12 from "../assets/property/12.jpeg";

const Property = () => {
  const filters = ["All", "House", "Town House", "Real Estate", "Kondominium", "Villa"];
  const properties = [
    { id: 1, image: i1, title: "Glow View Residence Mumbai", location: "Mumbai, Maharashtra", type: "House", rating: 4.8, price: "₹16,00,000.00", features: { rooms: 5, baths: 3, area: "240m²" } },
    { id: 2, image: i2, title: "Villa Del Monde Goa", location: "Goa", type: "Villa", rating: 4.8, price: "₹10,00,000.00", features: { rooms: 3, baths: 2, area: "180m²" } },
    { id: 3, image: i3, title: "Luxury Villa in Kerala", location: "Trivandrum, Kerala", type: "Villa", rating: 4.9, price: "₹12,50,000.00", features: { rooms: 4, baths: 3, area: "220m²" } },
    { id: 4, image: i4, title: "Himalayan Retreat Himachal", location: "Manali, Himachal Pradesh", type: "House", rating: 5.0, price: "₹18,00,000.00", features: { rooms: 6, baths: 4, area: "300m²" } },
    { id: 5, image: i5, title: "Elegant Mansion in Delhi", location: "New Delhi, Delhi", type: "Mansion", rating: 4.7, price: "₹25,00,000.00", features: { rooms: 7, baths: 5, area: "500m²" } },
    { id: 6, image: i6, title: "Tranquil Retreat in Hyderabad", location: "Hyderabad, Telangana", type: "Villa", rating: 4.6, price: "₹15,00,000.00", features: { rooms: 4, baths: 3, area: "220m²" } },
    { id: 7, image: i7, title: "Indore Modern House", location: "Indore, Madhya Pradesh", type: "House", rating: 4.8, price: "₹9,00,000.00", features: { rooms: 5, baths: 4, area: "250m²" } },
    { id: 8, image: i8, title: "Bhopal Lakeside Villa", location: "Bhopal, Madhya Pradesh", type: "Villa", rating: 4.7, price: "₹13,50,000.00", features: { rooms: 4, baths: 3, area: "240m²" } },
    { id: 9, image: i9, title: "Singrauli Dream Home", location: "Singrauli, Madhya Pradesh", type: "House", rating: 4.6, price: "₹8,00,000.00", features: { rooms: 5, baths: 3, area: "230m²" } },
    { id: 10, image: i10, title: "Jabalpur Family Residence", location: "Jabalpur, Madhya Pradesh", type: "House", rating: 4.8, price: "₹7,50,000.00", features: { rooms: 4, baths: 2, area: "210m²" } },
    { id: 11, image: i11, title: "Gwalior Heritage Mansion", location: "Gwalior, Madhya Pradesh", type: "Mansion", rating: 4.7, price: "₹14,00,000.00", features: { rooms: 6, baths: 4, area: "280m²" } },
    { id: 12, image: i12, title: "Ujjain Lakeside Villa", location: "Ujjain, Madhya Pradesh", type: "Villa", rating: 4.9, price: "₹20,00,000.00", features: { rooms: 5, baths: 3, area: "260m²" } },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [liked, setLiked] = useState(new Array(properties.length).fill(false));

  const showMore = () => {
    setVisibleCount(properties.length);
  };

  const handleHeartClick = (index, event) => {
    if (event.detail === 1) {
      // Single click - toggle red color
      setLiked((prev) => {
        const newLiked = [...prev];
        newLiked[index] = !newLiked[index];
        return newLiked;
      });
    } else if (event.detail === 2) {
      // Double click - reset to original color
      setLiked((prev) => {
        const newLiked = [...prev];
        newLiked[index] = false;
        return newLiked;
      });
    }
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      {/* Filter Tabs */}
      <div className="mb-8 px-8 overflow-x-scroll flex justify-between items-center no-scrollbar">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="whitespace-nowrap py-4 text-xl px-8 m-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium text-gray-700"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {properties.slice(0, visibleCount).map((property, index) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[300px] object-cover"
              />
              {/* Bottom Overlay with Type, Rating and Heart Icon */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white flex justify-between items-center">
                <span className="bg-black text-white px-2 py-1 rounded-full">{property.type}</span>
                <div className="text-white p-2 px-3 rounded-full bg-yellow-400 flex items-center text-sm">
                  ⭐ {property.rating}
                </div>
                <div
                  className="cursor-pointer"
                  onClick={(e) => handleHeartClick(index, e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.5A5.3 5.3 0 0112 5.88 5.3 5.3 0 017.5 3.5C5.42 3.5 3.75 5.17 3.75 7.25c0 3.68 7.5 11.25 8.25 11.25s8.25-7.57 8.25-11.25c0-2.08-1.67-3.75-3.75-3.75z"
                      fill={liked[index] ? "red" : "none"} // Color changes based on the liked state for each property
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
              <p className="text-sm text-gray-500">{property.location}</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                <span>🛏 {property.features.rooms} rooms</span>
                <span>🛁 {property.features.baths} baths</span>
                <span>📐 {property.features.area}</span>
              </div>
              <p className="mt-3 text-lg font-bold text-gray-900">{property.price}</p>
            </div>
          </div>
        ))}
      </div>

                {/* Show More Button */}
            {visibleCount < properties.length && (
            <div className="flex justify-center mt-8">
                <button
                onClick={showMore}
                className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700"
                >
                View More
                </button>
            </div>
            )}

    </div>
  );
};

export default Property;
