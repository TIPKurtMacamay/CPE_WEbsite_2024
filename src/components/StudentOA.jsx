import React from 'react';
import studentOAtBg from '../assets/studentOA-bg.png';
import paperbg from "../assets/paperbg.png";

const StudentOA = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="relative">
        <img
          className="w-full h-[550px] object-cover"
          src={studentOAtBg}
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
                LIFE OF A CPE
            </h1>
            <h3 className="font-medium text-sm">
                STUDENT ORGANIZATION AND ACTIVITIES AS A COMPUTER ENGINEERING STUDENT 
            </h3>
          </div>
          
        </div>
      </div>

      

      

    </div>
  );
};

export default StudentOA;
