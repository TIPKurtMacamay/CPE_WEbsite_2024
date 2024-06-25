import React from "react";
import studentOAtBg from "../assets/studentOA-bg.png";
import paperbg from "../assets/paperbg.png";
import icpep from "../assets/ICpEP-bg.png";


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
          className="absolute top-0 left-0 h-[550px] w-full object-cover"
          src={paperbg}
          alt="Paper Background"
        />

        {/* Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black/10 rounded-2xl text-center p-4 glassmorphism">
            <h1 className="font-black text-3xl text-green-700 mb-2">
              LIFE OF A CPE
            </h1>
            <h3 className="font-medium text-sm">
              STUDENT ORGANIZATIONS AS A COMPUTER ENGINEERING STUDENT
            </h3>
          </div>
        </div>
      </div>
      {/* Border */}
      <div className="w-full bg-green-900 h-[10px]" />

      {/* Title */}
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          STUDENT ORGANIZATION
        </h3>
      </div>
      <div className="container mx-auto px-2 py-8">
      {/* Column 1 Upper*/}
      <div className="flex flex-col items-left text-left p-4 border rounded-lg shadow-lg">
          <img
            src={icpep}
            alt="Placeholder"
            className="mb-4 w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">ICpEP Student Edition - TIP QC Chapter </h2>         
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Column 1 Lower */}
        <div className="flex flex-col items-left text-left p-4 border rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder"
            className="mb-4 w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">Department Student Council</h2>
          
        </div>
        {/* Column 2 Lower */}
        <div className="flex flex-col items-left text-left p-4 border rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Placeholder"
            className="mb-4 w-full h-auto"
          />
          <h2 className="text-xl font-bold mb-2">Supreme Student Council</h2>
          
        </div>
      </div>
      
    </div>
      

     

      
    </div>
  );
};

export default StudentOA;
