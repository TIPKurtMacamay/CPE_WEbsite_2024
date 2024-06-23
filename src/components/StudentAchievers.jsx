import React from 'react';
import aboutBg from '../assets/studentachievers-bg.jpg';
import paperbg from "../assets/paperbg.png";
import PDE_OPENING from "../assets/cpe_summit/PDE_opening.jpg"
import PDE_exhibit1 from "../assets/cpe_summit/PDE_exhibit1.jpg"
import PDE_exhibit2 from "../assets/cpe_summit/PDE_exhibit2.jpg"
import PDE_exhibit5 from "../assets/cpe_summit/PDE_exhibit5.jpg"
import PDE_exhibit6 from "../assets/cpe_summit/PDE_exhibit6.jpg"
import sumobot3 from "../assets/cpe_summit/Sumobot3.jpg"
import sumobot12 from "../assets/cpe_summit/Sumobot12.jpg"
import sumobot9 from "../assets/cpe_summit/Sumobot9.jpg"
import sumobot10 from "../assets/cpe_summit/Sumobot10.jpg"
import sumobot11 from "../assets/cpe_summit/Sumobot11.jpg"
import cea1 from "../assets/cea2023/cea1.jpg"
import cea2 from "../assets/cea2023/cea2.jpg"
import cea3 from "../assets/cea2023/cea3.jpg"
import cea4 from "../assets/cea2023/cea4.jpg"
import filmaking_achiver from "../assets/achievers/filmaking.jpg"
import codm_achiever from "../assets/achievers/codm.jpg"
import talent_achiever from "../assets/achievers/talent.jpg"
import singing_achiever from "../assets/achievers/singing.jpg"
import photohraphy_achiever from "../assets/achievers/photography.jpg"
import chant_achiever from "../assets/achievers/chant.jpg"
import datasci_achiever from "../assets/achievers/datasci.jpg"
import AI_achiever from "../assets/achievers/AIConvergence.jpg"

const StudentAchievers = () => {
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
              STUDENT ACHIEVERS
            </h1>
            <h3 className="font-medium text-sm">
              NEWS AND EVENTS - ACHIEVERS OF COMPUTER ENGINEERING DEPARTMENT
            </h3>
          </div>
          
        </div>
      </div>

      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          ACTIVITIES
        </h3>
      </div>
      </div>
      
      {/* Bottom Part */}
      <div className=" py-5 text-left text-gray-900 mt-4 pl-20 pr-20 mb-20">
      

      {/* Project Design Exhibit */}
      <div className="max-w-[1400px] m-auto py-5 pt-20 px-4 grid lg:grid-cols-2 gap-4">
        {/* left side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2 p-2 bg-gray-200 glassmorphism">
          <img
            className="row-span-3 photogrid"
            src={PDE_OPENING}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={PDE_exhibit1}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={PDE_exhibit2}
            alt=""
          />
          <img
            className="row-span-3 photogrid"
            src={PDE_exhibit6}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={PDE_exhibit5}
            alt="/"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      
        <div className="flex-1 h-full flex flex-col justify-center">
          
          <h3 className="text-4xl md:text-5xl font-bold">
            Project Design Exhibit
          </h3>
          <p className="text-2xl py-6">
            Lorem ipsum dolor sit, amet 
          </p>
          <p className="pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente, dolores tempora quae, repellendus labore, delectus
            repellat earum nulla optio fugiat facilis nobis velit! Dignissimos
            corporis ut odio harum totam?
          </p>
          </div>
        </div>
      </div>

      {/* Sumobot Competition */}
      
      <div className="max-w-[1400px] m-auto py-1 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}  
      <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      
      <div className="flex-1 h-full flex flex-col justify-center text-right">
        <h3 className="text-4xl md:text-5xl font-bold">Sumobot Competition</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit, 
        </p>
        <p className="pb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sapiente, dolores tempora quae, repellendus labore, delectus repellat earum nulla optio fugiat facilis nobis velit! Dignissimos corporis ut odio harum totam?
        </p>
        
      </div>
    </div>
        {/* right side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2 p-2 bg-gray-200 glassmorphism">
          <img
            className="row-span-3 photogrid"
            src={sumobot3}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
          src={sumobot12}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={sumobot9}
            alt=""
          />
          <img
            className="row-span-3 photogrid"
            src={sumobot11}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={sumobot10}
            alt=""
          />
        </div>
      </div>
      {/*  */}
      {/* College of Engineering and Architecture */}
      <div className="max-w-[1400px] m-auto py-5 px-4 grid lg:grid-cols-2 gap-4">
        {/* left side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh] gap-2 p-2 bg-gray-200 glassmorphism">
          <img
            className="row-span-3 photogrid"
            src={cea1}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={cea2}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={cea3}
            alt=""
          />
          <img
            className="row-span-3 photogrid"
            src={cea3}
            alt=""
          />
          <img
            className="row-span-2 photogrid"
            src={cea4}
            alt="/"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      
        <div className="flex-1 h-full flex flex-col justify-center">
                    
          <h3 className="text-4xl md:text-5xl font-bold">
            College of Engineering and Architecture
          </h3>
          <p className="text-2xl py-6">
            Lorem ipsum dolor sit, amet consectetur 
          </p>
          <p className="pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente, dolores tempora quae, repellendus labore, delectus
            repellat earum nulla optio fugiat facilis nobis velit! Dignissimos
            corporis ut odio harum totam?
          </p>
          </div>
        </div>
      </div>

      </div>
      
      {/* Border */}
      <div className="w-full bg-green-900 h-[10px]" />

      {/* Title */}
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          ACHIEVERS
        </h3>
      </div>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="flex justify-center">
          <img
            src={talent_achiever}
            alt="Placeholder 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 2 */}
        <div className="flex justify-center">
          <img
            src={codm_achiever}
            alt="Placeholder 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 3 */}
        <div className="flex justify-center">
          <img
            src={singing_achiever}
            alt="Placeholder 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 4 */}
        <div className="flex justify-center">
          <img
            src={datasci_achiever}
            alt="Placeholder 4"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 5 */}
        <div className="flex justify-center">
          <img
            src={filmaking_achiver}
            alt="Placeholder 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 6 */}
        <div className="flex justify-center">
          <img
            src={photohraphy_achiever}
            alt="Placeholder 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 7 */}
        <div className="flex justify-center">
          <img
            src={chant_achiever}
            alt="Placeholder 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Column 8 */}
        <div className="flex justify-center">
          <img
            src={AI_achiever}
            alt="Placeholder 4"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    

    </div>
  );
};

export default StudentAchievers;
