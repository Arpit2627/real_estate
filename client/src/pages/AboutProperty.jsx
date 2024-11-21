import React from "react";
import leftImg from "../assets/about/lf.jpeg";
import r1 from "../assets/about/r1.jpeg";
import r2 from "../assets/about/r2.jpeg";
import r3 from "../assets/about/r3.jpeg";

// Example articles data
const articles = [
  {
    title: "How to add color to your kitchen: From color cabinets to fresh flowers",
    description:
      "Introduction: Achieving a colorful kitchen doesn't have to be expensive or difficult. There are a variety of ways to add color...",
    tags: ["Interior design", "Kitchen"],
    imgUrl: leftImg, // Image
  },
  {
    title: "How to choose the right furniture for your home like a pro.",
    description:
      "It can be fun, but also a challenge to choose the right furniture & decor products for your home. It can be hard to find good...",
    tags: ["Decoration", "Home"],
    imgUrl: r1, // Image
  },
  {
    title: "6 Ways to filter what you need before discovering more about your home",
    description:
      "Building self-awareness resembles building a house. Here's how to find the bricks, cement, tools, and architectural design...",
    tags: ["Property", "Real estate"],
    imgUrl: r2, // Image
  },
  {
    title: "6 Things to Watch Out for When Shopping for Homes in Burlingame",
    description:
      "Avoiding Red Flags in Burlingame Prelude Deniz Kahramaner is the Founder & CEO of the data-driven Real Estate Brokerage...",
    tags: ["Real estate", "Tips"],
    imgUrl: r3, // Image
  },
];

const AboutProperty = () => {
  return (
    <div className=" mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Learn About Property
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Article */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105">
            <img
              src={articles[0].imgUrl}
              alt={articles[0].title}
              className="w-full h-96 object-cover rounded-lg transition-transform duration-500 ease-in-out"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50"></div>
            <div className="relative p-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{articles[0].title}</h3>
              <p className="text-lg mb-4">{articles[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {articles[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Articles List */}
        <div className="space-y-6">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="flex gap-4 border-b pb-4 last:border-none hover:transform hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <img
                src={article.imgUrl}
                alt={article.title}
                className="w-32 h-32 object-cover rounded-lg shadow-md hover:shadow-xl"
              />
              <div>
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProperty;
