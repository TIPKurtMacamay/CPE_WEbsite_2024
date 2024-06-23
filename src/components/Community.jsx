import React from 'react';
import aboutBg from '../assets/community-bg.jpg';
import paperbg from "../assets/paperbg.png";

const Community = () => {
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
              COMMUNITY
            </h1>
            <h3 className="font-medium text-sm">
              OUTREACH PROGRAMS OF COMPUTER ENGINEERING
            </h3>
          </div>
          
        </div>
      </div>

      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          OUTREACH PROGRAMS
        </h3>
      </div>
      </div>

      {/* Bottom Part */}
      <div className="py-20 text-left text-gray-900 mt-4 pl-20 pr-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Outreach Program 1</h2>
            <p className="text-gray-700 text-base md:text-lg">This is the description. It provides more details about the content represented by the title.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Outreach Program 2</h2>
            <p className="text-gray-700 text-base md:text-lg">This is the description. It provides more details about the content represented by the title.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Outreach Program 3</h2>
            <p className="text-gray-700 text-base md:text-lg">This is the description. It provides more details about the content represented by the title.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Placeholder" 
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Outreach Program 4</h2>
            <p className="text-gray-700 text-base md:text-lg">This is the description. It provides more details about the content represented by the title.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Community;
