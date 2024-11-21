import React, { useState, useEffect } from 'react';
import dm from "../assets/testimonial/dm.jpeg";
import ar from "../assets/testimonial/arpit.jpg";
import vr from "../assets/testimonial/vr.jpeg";
import bm from "../assets/testimonial/bm.jpeg";

const testimonials = [
  {
    id: 1,
    name: 'Dharmendra Prajapati',
    title: 'Son Of India Farmer',
    text: 'This platform is awesome. I find my new home for my family in Jakarta and this process is very easy. Trusted & Guaranteed.',
    image: dm,
  },
  {
    id: 2,
    name: 'Arpit Jain',
    title: 'Freelancer',
    text: 'A seamless experience from start to finish. Highly recommend this platform for finding your next property.',
    image: ar,
  },
  {
    id: 3,
    name: 'Varsha Jain',
    title: 'Entrepreneur',
    text: 'I loved how intuitive the process was. Found exactly what I was looking for.',
    image: vr,
  },
  {
    id: 4,
    name: 'Bashant Meena',
    title: 'Designer',
    text: 'Quick and efficient! This platform exceeded my expectations in every way.',
    image: bm,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 px-4">
      {/* Yellow Top Bar */}
      <div className="h-1 w-20 mx-auto bg-yellow-500 mb-4"></div>

      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        What People Said About Us
      </h2>

      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        {/* Card Wrapper */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 p-6 text-center space-y-4"
            >
              {/* Card */}
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 mb-4 border-2 border-gray-300 shadow-md"
                />
                <p className="italic text-gray-600 leading-relaxed">{testimonial.text}</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
        >
          {">"}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
