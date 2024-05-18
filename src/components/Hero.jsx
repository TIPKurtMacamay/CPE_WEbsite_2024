import React from "react";
import heroBG from "../assets/heroBG.png";
import tiplogo from "../assets/tiplogo.png";
import cpelogo from "../assets/cpelogo.png";
import ssclogo from "../assets/ssclogo.png";
import profhero from "../assets/profhero.png";
import paperbg from "../assets/paperbg.png";

const Hero = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="relative">
        <img
          className="w-full h-[550px] object-cover"
          src={heroBG}
          alt="Background"
        />
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={paperbg}
          alt="Paper Background"
        />
        
        {/* Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black/10 rounded-2xl text-center p-4">
            <h1 className="font-black text-3xl text-green-700 mb-2">
              COMPUTER ENGINEERING DEPARTMENT
            </h1>
            <h3 className="font-medium text-sm">
              TECHNOLOGICAL INSTITUTE OF THE PHILIPPINES - QUEZON CITY
            </h3>
          </div>
          <div className="flex space-x-4 mt-4">
            <img className="h-14 w-14" src={tiplogo} alt="TIP Logo" />
            <img className="h-14 w-14" src={cpelogo} alt="CPE Logo" />
            <img className="h-14 w-14" src={ssclogo} alt="SSC Logo" />
          </div>
        </div>
      </div>

      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          WELCOME TO COMPUTER ENGINEERING DEPARTMENT
        </h3>
      </div>
      </div>

      {/* Bottom Part */}
      <div className=" py-20">
        {/* Columns */}
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4">
          {/* Text */}
          <div className="md:w-1/2 p-4">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 text-justify">
                Computer Engineering is a profession that applies engineering
                principles and methodologies in the analysis, design,
                implementation and management of hardware, software and the
                integration of both. The program includes courses in computer
                hardware, system development and design, microelectronics and
                embedded systems, data communication and network administration,
                and software development and design (source: tip.edu.ph).
              </p>
            </div>
          </div>
          {/* Pictures Slider */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img className="rounded-xl" src={profhero} alt="Faculty and Staff" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          National and International Accreditations
        </h3>
      </div>
      </div>
    </div>
  );
};

export default Hero;
