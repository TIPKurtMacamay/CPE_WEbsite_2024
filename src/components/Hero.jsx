import React from "react";
import heroBG from "../assets/heroBG.png";
import tiplogo from "../assets/tiplogo.png";
import cpelogo from "../assets/cpelogo.png";
import ssclogo from "../assets/ssclogo.png";
import profhero from "../assets/profhero.png";
import paperbg from "../assets/paperbg.png";
import CHED1 from "../assets/ched.png";
import PACUCOA1 from "../assets/pacucoa.png";
import PTC1 from "../assets/ptc.png";
import ABET1 from "../assets/abet.png";

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

      
      <div className="mt-4 md:mt-0">
        {/* Border */}
        <div className="w-full bg-green-900 h-[10px]" />

        {/* Title */}
        <div className="w-full bg-black h-[50px] flex items-center">
          <h1 className="text-white text-l text-wrap text-center md:text-2xl font-bold m-auto">
            National and International Accreditations
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-600 w-[80%] h-[2px] m-2 md:my-4" />
          <p className="text-[10px] md:text-xs text-center w-[70%]">
            Experience Computer Engineering education at its finest! The
            Computer Engineering department at the Technological Insitute of the
            Philippines - Quezon City ensures quality education that is
            recognized locally and internationally.
          </p>
        </div>

        {/* Accreditaions */}
        <div>
          <div className="items-center grid grid-row-3 md:grid-cols-3 gap-4">
            <div className="flex items-center md:block">
              <img className="card " src={CHED1} alt="" />
              <div className="text-center mt-2 h-[90px]">
                <h2>The Commission on Higher Education</h2>
                <p className="text-sm mt-4 mx-8">
                  Center of Excellence since 2015 Center of Development from
                  2009 to 2014
                </p>
              </div>
            </div>
            <div className="flex items-center md:block">
              <img className="card " src={PACUCOA1} alt="" />
              <div className="text-center mt-2 h-[90px]">
                <h2>Philippine Association of Colleges and Universities Commission
                  on Accreditation</h2>
                <p className="text-sm mt-4 mx-8">
                  Level 4 Accreditation Accredited since 2014
                </p>
              </div>
            </div>
            <div className="flex items-center md:block">
              <img className="card " src={PTC1} alt="" />
              <div className="text-center mt-2 h-[90px]">
                <h2>The Commission on Higher Education</h2>
                <p className="text-sm mt-4 mx-8">
                  Accredited since 2015
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Abet */}
        <div className="my-12">
          <div className="items-center object-contain md:grid grid-cols-2 gap-4">
            <img className="mt-5" src={ABET1} alt="" />
            <div>
              <h1 className="text-2xl text-green-700 md:text-4xl">
                International Accreditation
              </h1>
              <h2 className="text-sm md:text-l">Accredited by ABET since 2010</h2>
              <p className="  mt-4 mr-10 text-justify text-xs md:text-sm">
                What is ABET? "The Accreditation Board for Engineering and
                Technology, Inc. is a non-governmental organization that
                accredits post-secondary education programs in engineering,
                engineering technology, computing, and applied and natural
                sciences." (ABET.org)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
