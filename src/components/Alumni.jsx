import React from 'react';
import aboutBg from '../assets/alumni-bg.jpg';
import paperbg from "../assets/paperbg.png";

const Alumni = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="relative">
        <img
          className="w-full h-[550px] object-cover"
          src={aboutBg}
          alt="Background"
        />
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={paperbg}
          alt="Paper Background"
        />
        
        {/* Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black/10 rounded-2xl text-center p-4 glassmorphism">
            <h1 className="font-black text-3xl text-green-700 mb-2">
              ALUMNI
            </h1>
            <h3 className="font-medium text-sm">
              ALUMNI ASSISTANCE - CONNECT WITH US
            </h3>
          </div>
          
        </div>
      </div>

      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          ALUMNI DETAILS
        </h3>
      </div>
      </div>

      {/* Bottom Part */}
      <div className=" py-20 text-left text-gray-900 mt-4 pl-20 pr-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Column 1 Lower */}
        <div className="flex flex-col items-left text-left p-4 border rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder"
            className="mb-4 w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">Alumni Assistance</h2>
          
        </div>
        {/* Column 2 Lower */}
        <div className="flex flex-col items-left text-left p-4 border rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder"
            className="mb-4 w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
          
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default Alumni;
