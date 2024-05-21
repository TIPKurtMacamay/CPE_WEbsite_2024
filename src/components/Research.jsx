import React from "react";
import researchBg from "../assets/research-bg.png";
import paperbg from "../assets/paperbg.png";

const Research = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="relative">
        <img
          className="w-full h-[550px] object-cover"
          src={researchBg}
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
              RESEARCH
            </h1>
            <h3 className="font-medium text-sm">
              SILICON SYMPHONY: EXPLORING THE HORIZONS OF COMPUTER ENGINEERING
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className=" py-20 text-left text-gray-700 pl-20 pr-20 mb-20">
        <p>
          Welcome to our digital repository of groundbreaking research, crafted
          by the ingenious minds of computer engineering students. Dive into the
          realm where innovation meets ingenuity, as we showcase a myriad of
          projects that redefine the boundaries of technology. From artificial
          intelligence to cybersecurity, from hardware design to software
          development, our students have delved into every facet of the
          computing world to unravel its mysteries and unlock its potential.
        </p>
        <br />
        <p>
          In this virtual hub of exploration and discovery, you'll find a
          collection of projects that not only demonstrate technical prowess but
          also embody a spirit of creativity and problem-solving. Each research
          endeavor represents a journey of exploration, where students have
          harnessed their knowledge, skills, and passion to address real-world
          challenges and pioneer novel solutions.{" "}
        </p>
      </div>

      {/* Researches */}
      <div className="Text grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>

        <div className="researchBG">
          <div className="ml-4">
            <div className="m-1 bg-white p-4">
              <h1>
                Design of an Augmented Reality-based Learning Simulation for
                Individuals with Dyscalculia
              </h1>
              <p>A.Y. 2023 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
