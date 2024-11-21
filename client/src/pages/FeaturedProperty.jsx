// import React, { useState } from "react";
// import lside from "../assets/prop/lx.jpg"; // Large image
// import rupper from "../assets/prop/rupper.jpeg"; // Right upper image
// import rlower from "../assets/prop/rlower.jpeg"; // Right lower image

// const FeaturedProperty = () => {
//   // State to track the heart clicks for each property (for single click and double click)
//   const [liked, setLiked] = useState([false, false, false]);

//   // Toggle like on single click (single click = true, double click = false)
//   const toggleLike = (index) => {
//     const updatedLikes = [...liked];
//     updatedLikes[index] = !updatedLikes[index]; // Toggle like state
//     setLiked(updatedLikes);
//   };

//   // Handle double click to reset heart color
//   const handleDoubleClick = (index) => {
//     const updatedLikes = [...liked];
//     updatedLikes[index] = false; // Reset to original color on double click
//     setLiked(updatedLikes);
//   };

//   const properties = [
//     {
//       id: 1,
//       image: lside,
//       title: "Paragon Appartement",
//       location: "Laweyan, Surakarta",
//     },
//     {
//       id: 2,
//       image: rupper,
//       title: "Barata Raya Real Estate",
//       location: "Mondoteko, Bekasi",
//     },
//     {
//       id: 3,
//       image: rlower,
//       title: "Perumahan Smart Sultan",
//       location: "Buah Batu, Bandung",
//     },
//   ];

//   return (
//     <div className="w-full px-4 py-8 bg-gray-50">
//       {/* Section Heading */}
//       <h2 className="text-3xl font-bold text-gray-900 mb-6 text-start">
//         Featured Property
//       </h2>

//       {/* Grid Container */}
//       <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
//         {/* Left Card */}
//         <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
//           <img
//             src={properties[0].image}
//             alt={properties[0].title}
//             className="w-full h-[600px] object-fill"
//           />
//           <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-between items-center shadow-lg">
//             <div>
//               <h3 className="text-lg font-semibold">{properties[0].title}</h3>
//               <p className="text-sm text-gray-500">
//                 📍 {properties[0].location}
//               </p>
//             </div>
//             <button
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//               onClick={() => toggleLike(0)} // Single click for like
//               onDoubleClick={() => handleDoubleClick(0)} // Double click to reset color
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M16.5 3.5A5.3 5.3 0 0112 5.88 5.3 5.3 0 017.5 3.5C5.42 3.5 3.75 5.17 3.75 7.25c0 3.68 7.5 11.25 8.25 11.25s8.25-7.57 8.25-11.25c0-2.08-1.67-3.75-3.75-3.75z"
//                   fill={liked[0] ? "red" : "none"} // Color changes to red when liked
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Right Cards */}
//         <div className="grid grid-rows-2 gap-4">
//           {properties.slice(1).map((property, index) => (
//             <div
//               key={property.id}
//               className="relative bg-white rounded-lg overflow-hidden shadow-md"
//             >
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="w-full h-[300px] object-contain"
//               />
//               <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-between items-center shadow-lg">
//                 <div>
//                   <h3 className="text-lg font-semibold">{property.title}</h3>
//                   <p className="text-sm text-gray-500">
//                     📍 {property.location}
//                   </p>
//                 </div>
//                 <button
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
//                   onClick={() => toggleLike(index + 1)} // Single click for like
//                   onDoubleClick={() => handleDoubleClick(index + 1)} // Double click to reset color
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.5 3.5A5.3 5.3 0 0112 5.88 5.3 5.3 0 017.5 3.5C5.42 3.5 3.75 5.17 3.75 7.25c0 3.68 7.5 11.25 8.25 11.25s8.25-7.57 8.25-11.25c0-2.08-1.67-3.75-3.75-3.75z"
//                       fill={liked[index + 1] ? "red" : "none"} // Color changes to red when liked
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProperty;
import React, { useState } from "react";
import lside from "../assets/prop/lx.jpg"; // Large image
import rupper from "../assets/prop/rupper.jpeg"; // Right upper image
import rlower from "../assets/prop/rlower.jpeg"; // Right lower image

const FeaturedProperty = () => {
  // State to track the heart clicks for each property (for single click and double click)
  const [liked, setLiked] = useState([false, false, false]);

  // Toggle like on single click (single click = true, double click = false)
  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle like state
    setLiked(updatedLikes);
  };

  // Handle double click to reset heart color
  const handleDoubleClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = false; // Reset to original color on double click
    setLiked(updatedLikes);
  };

  const properties = [
    {
      id: 1,
      image: lside,
      title: "Paragon Appartement",
      location: "Laweyan, Surakarta",
    },
    {
      id: 2,
      image: rupper,
      title: "Barata Raya Real Estate",
      location: "Mondoteko, Bekasi",
    },
    {
      id: 3,
      image: rlower,
      title: "Perumahan Smart Sultan",
      location: "Buah Batu, Bandung",
    },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-start">
        Featured Property
      </h2>

      {/* Grid Container */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={properties[0].image}
            alt={properties[0].title}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-fill" // Adjust height for different breakpoints
          />
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-between items-center shadow-lg">
            <div>
              <h3 className="text-lg font-semibold">{properties[0].title}</h3>
              <p className="text-sm text-gray-500">
                📍 {properties[0].location}
              </p>
            </div>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleLike(0)} // Single click for like
              onDoubleClick={() => handleDoubleClick(0)} // Double click to reset color
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.5A5.3 5.3 0 0112 5.88 5.3 5.3 0 017.5 3.5C5.42 3.5 3.75 5.17 3.75 7.25c0 3.68 7.5 11.25 8.25 11.25s8.25-7.57 8.25-11.25c0-2.08-1.67-3.75-3.75-3.75z"
                  fill={liked[0] ? "red" : "none"} // Color changes to red when liked
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-rows-2 gap-4">
          {properties.slice(1).map((property, index) => (
            <div
              key={property.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[300px] sm:h-[350px] object-fill"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex justify-between items-center shadow-lg">
                <div>
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-500">
                    📍 {property.location}
                  </p>
                </div>
                <button
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleLike(index + 1)} // Single click for like
                  onDoubleClick={() => handleDoubleClick(index + 1)} // Double click to reset color
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.5A5.3 5.3 0 0112 5.88 5.3 5.3 0 017.5 3.5C5.42 3.5 3.75 5.17 3.75 7.25c0 3.68 7.5 11.25 8.25 11.25s8.25-7.57 8.25-11.25c0-2.08-1.67-3.75-3.75-3.75z"
                      fill={liked[index + 1] ? "red" : "none"} // Color changes to red when liked
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
