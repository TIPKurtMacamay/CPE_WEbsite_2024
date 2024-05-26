import React from "react";
import studentOAtBg from "../assets/studentOA-bg.png";
import paperbg from "../assets/paperbg.png";
import ICPEP from "../assets/ICpEP fb page.png";
import CPESUMMIT from "../assets/cpesummit.jpg";
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
import profs1 from "../assets/cpe_summit/profs1.jpg"


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
              STUDENT ORGANIZATION AND ACTIVITIES AS A COMPUTER ENGINEERING
              STUDENT
            </h3>
          </div>
        </div>
      </div>
      {/* Border */}
      <div className="w-full bg-green-900 h-[10px]" />

      {/* Title */}
      <div className="w-full bg-black h-[50px] flex items-center">
        <h1 className="text-white text-l text-wrap text-center md:text-2xl font-bold m-auto">
          STUDENT ORGANIZATION
        </h1>
      </div>

      {/* contents */}
      {/* ICPEP */}
      <div className="">
        <h1 className="text-center text-[24px] font-semibold my-[5%] mx-[10%] bg-black/10 glassmorphism">
          ICpEP
        </h1>
        <div className="px-[5%]">
          <img className="m-auto rounded-xl" src={ICPEP} alt="" />
        </div>
        <p className="my-[5%] mx-[10%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          eaque molestiae? Blanditiis modi doloribus vero natus nobis labore
          veniam tenetur, culpa molestiae, repudiandae maxime! Laborum sunt
          minima obcaecati cumque doloribus sequi quos molestiae doloremque
          exercitationem, cum tempora reprehenderit necessitatibus laboriosam,
          ex deserunt error totam recusandae. Adipisci laboriosam atque optio
          error blanditiis hic incidunt officiis saepe quaerat inventore,
          recusandae quisquam placeat exercitationem. Fugit suscipit laborum
          placeat dolorum minima ex officia, cum magni possimus? Earum
          laboriosam nulla nostrum ea. Consequatur dolor officiis iusto vel sunt
          et dolorem, natus nihil itaque necessitatibus eum beatae accusamus
          optio doloribus hic, aut voluptatibus. Hic, tempore eligendi!
        </p>
        <div>
          <p className="text-center my-[5%] mx-[10%] font-semibold">
            Visit their Facebook page{" "}
            <a
              href="https://web.facebook.com/icpep.se.tipqc"
              className="text-blue-500 underline"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Border */}
      <div className="w-full bg-green-900 h-[10px]" />

      {/* Title */}
      <div className="w-full bg-black h-[50px] flex items-center">
        <h1 className="text-white text-l text-wrap text-center md:text-2xl font-bold m-auto">
          STUDENT ACTIVITIES
        </h1>
      </div>
      {/* contents */}
      {/* CPESUMMIT */}
      <div className="">
        <h1 className="text-center text-[24px] font-semibold my-[5%] mx-[10%] bg-black/10 glassmorphism">
          CPE Summit
        </h1>
        <div className="px-[5%]">
          <img className="m-auto rounded-xl" src={CPESUMMIT} alt="" />
        </div>
        <p className="my-[5%] mx-[10%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          eaque molestiae? Blanditiis modi doloribus vero natus nobis labore
          veniam tenetur, culpa molestiae, repudiandae maxime! Laborum sunt
          minima obcaecati cumque doloribus sequi quos molestiae doloremque
          exercitationem, cum tempora reprehenderit necessitatibus laboriosam,
          ex deserunt error totam recusandae. Adipisci laboriosam atque optio
          error blanditiis hic incidunt officiis saepe quaerat inventore,
          recusandae quisquam placeat exercitationem. Fugit suscipit laborum
          placeat dolorum minima ex officia, cum magni possimus? Earum
          laboriosam nulla nostrum ea. Consequatur dolor officiis iusto vel sunt
          et dolorem, natus nihil itaque necessitatibus eum beatae accusamus
          optio doloribus hic, aut voluptatibus. Hic, tempore eligendi!
        </p>
        <div>
          <p className="text-center my-[5%] mx-[10%] font-semibold">
            Visit the CPE Facebook page{" "}
            <a
              href="https://web.facebook.com/watch/?v=835257095296729&ref=sharing"
              className="text-blue-500 underline"
              target="_blank"
            >
              here
            </a>{" "}
            to know more .
          </p>
        </div>
      </div>
      {/*  */}
      {/* Project Design Exhibit */}
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
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
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-4xl md:text-5xl font-bold">
            Project Design Exhibit
          </h3>
          <p className="text-2xl py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            temporibus!
          </p>
          <p className="pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente, dolores tempora quae, repellendus labore, delectus
            repellat earum nulla optio fugiat facilis nobis velit! Dignissimos
            corporis ut odio harum totam?
          </p>
          <div>
            <p className="text-center my-[5%] mx-[10%] font-semibold">
              Visit the CPE Facebook page{" "}
              <a
                href="https://web.facebook.com/watch/?v=835257095296729&ref=sharing"
                className="text-blue-500 underline"
                target="_blank"
              >
                here
              </a>{" "}
              to know more .
            </p>
          </div>
        </div>
      </div>

      {/* Sumobot Competition */}
      <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
        {/* left side */}
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
        {/* right side */}
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-4xl md:text-5xl font-bold">
            Sumobot Competition
          </h3>
          <p className="text-2xl py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            temporibus!
          </p>
          <p className="pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            sapiente, dolores tempora quae, repellendus labore, delectus
            repellat earum nulla optio fugiat facilis nobis velit! Dignissimos
            corporis ut odio harum totam?
          </p>
          <div>
            <p className="text-center my-[5%] mx-[10%] font-semibold">
              Visit the CPE Facebook page{" "}
              <a
                href="https://web.facebook.com/watch/?v=835257095296729&ref=sharing"
                className="text-blue-500 underline"
                target="_blank"
              >
                here
              </a>{" "}
              to know more .
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div>CPE Days</div> */}
    </div>
  );
};

export default StudentOA;
