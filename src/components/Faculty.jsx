import React from 'react';
import facultybg from '../assets/profhero.png';
import paperbg from "../assets/paperbg.png";
import { Tabs, Tab } from './Tabs';
import SirRyan from "../assets/Sir Ryan.png";
import SirRichard from "../assets/Sir Richard.png";
import MaamVerlyn from "../assets/Maam Verlyn.png";
import SirRoman from "../assets/Sir Roman.png";
import MaamMenchie from "../assets/Maam Menchie.png";
import SirTaylar from "../assets/Sir Taylar.png";
import MaamVenal from "../assets/Maam Venal.png";
import MaamMyco from "../assets/Maam Myco.png"

const Faculty = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="relative">
        <img
          className="w-full h-[550px] object-cover"
          src={facultybg}
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
              FACULTY & STAFF
            </h1>
            <h3 className="font-medium text-sm">
              THE FOUNDATION OF COMPUTER ENGINEERING DEPARTMENT
            </h3>
          </div>
          
        </div>
      </div>

      <Tabs>
        <Tab label="Program Chair">
        <div className="grid grid-cols-1 md:w-[1530] mx-[10%]">
        {/* Maam Venal */}
        <div className="justify-center items-center md:items-start">
          <div className="block md:flex my-10">
            <div className="flex justify-center items-center w-[265px]">
              <img className="h-full" src={MaamVenal} alt="" />
            </div>
            <div className="ml-2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold">Dr. Maria Cecilia A. Venal</h1>
              <h2 className="text-xl text-[#008A3D]">
                Program Chair, Computer Engineering
              </h2>
              <div className="my-4">
                <h3>
                  Doctor of Engineering specialized in Computer Engineering
                </h3>
                <h4>
                  Technological Institute of the Philippines Quezon City, 2020
                </h4>
              </div>

              <h3 className="my-4">Master of Engineering</h3>

              <div className="my-4">
                <h3>Bachelor of Science in Computer Engineering</h3>
                <h4>Adamson University</h4>
              </div>

              <div>
                <h3 className="font-bold">Other Achievements:</h3>
                <ul className="list-disc ml-8">
                  <li>CHED Technical Panel for Computer Engineering</li>
                  <li>CHED Regional Quality Evaluation Team</li>
                  <li>ICPEP Vice President, National</li>
                  <li>ICPEP President, NCR</li>
                  <li>
                    Executive Director, Council of Deans and Program Chairs for
                    Computer Engineering, NCR
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        </Tab>
        <Tab label="Full-Time Faculty">
          <div className="py-4">
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="facultyCARD">
          <img src={SirRyan} alt="" />
          <div>
            <h1>Engr. Ryan D. Francisco</h1>

            <h3>Master of Information Technology</h3>
            <h4>University of the East - Manila, 2024</h4>

            <h3>Bachelor of Science in CpE</h3>
            <h4>University of the East - Caloocan, 2019</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                Hardware Design, Internet of Things, Embedded Systems,
                Cybersecurity, Deep Learning for Time Series Analysis
              </li>
            </ul>
          </div>
        </div>

        <div className="facultyCARD">
          <img src={SirRichard} alt="" />
          <div>
            <h1>Dr. Richard N. Monreal</h1>

            <h3>Doctor of Information Technology</h3>
            <h4>University of the Cordilleras - 2021</h4>

            <h3>Master of Information Technology</h3>
            <h4>University of the Cordilleras - 2018</h4>

            <h3>Bachelor of Science in Computer Science</h3>
            <h4>University of the Cordilleras - 2018</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                Software Design/Development, Database Design and Programming, IT
                Project Management, Data Science, AI and Machine Learning, NLP
                and Sentiment Analysis
              </li>
            </ul>
          </div>
        </div>

        <div className="facultyCARD">
          <img src={MaamVerlyn} alt="" />
          <div>
            <h1>Engr. Verlyn V. Nojor</h1>

            <h3>Doctor of Engineering specialized in CpE</h3>
            <h4>T.I.P. QC (ongoing)</h4>

            <h3>Master of Engineering in CpE</h3>
            <h4>T.I.P. QC, 2016</h4>

            <h3>Bachelor of Science in CpE</h3>
            <h4>T.I.P. QC, 2009</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                Hardware Design, Programming and Software Development, Computer
                Networking, Computer Architecture
              </li>
            </ul>
          </div>
        </div>
        <div className="facultyCARD">
          <img src={SirRoman} alt="" />
          <div>
            <h1>Engr. Roman M. Richard</h1>

            <h3>Doctor of Engineering specialized in CpE</h3>
            <h4>T.I.P. QC (ongoing)</h4>

            <h3>Master of Engineering in CpE</h3>
            <h4>Angeles University Foundation, 2020</h4>

            <h3>Bachelor of Science in CpE</h3>
            <h4>Columban College, 2015</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                C/C++/Python Programming, Parallel Programming, GPU (CUDA)
                Programming, Data Science, Machine/Deep Learning, Software
                Development
              </li>
            </ul>
          </div>
        </div>
        <div className="facultyCARD">
          <img src={MaamMenchie} alt="" />
          <div>
            <h1>Engr. Verlyn V. Nojor</h1>

            <h3>Doctor of Technology</h3>
            <h4>Technological University of the Philippines (ongoing)</h4>

            <h3>M.Sc. in Engineering Education major in CpE</h3>
            <h4>T.I.P. QC, 2016</h4>

            <h3>Bachelor of Science in CpE</h3>
            <h4>T.I.P. QC, 2009</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                Hardware Design, Programming and Software Development, Computer
                Networking, Computer Architecture
              </li>
            </ul>
          </div>
        </div>
        <div className="facultyCARD">
          <img src={SirTaylar} alt="" />
          <div>
            <h1>Dr. Jonathan V. Taylar</h1>

            <h3>Doctor of Engineering specialized in CpE</h3>
            <h4>T.I.P. QC, 2021</h4>

            <h3>M.Sc. in Computer Science</h3>
            <h4>AMA University, 2008</h4>

            <h3>Bachelor of Science in CpE</h3>
            <h4>AMA Computer College, 2006</h4>

            <h3>Area of Specialization and Research Interests:</h3>
            <ul>
              <li>
                Software Design and Engineering, Machine Learning, Deep
                Learning, Networking, Advanced Systems Administration, DevOps
              </li>
            </ul>
          </div>
        </div>
      </div>
          </div>
        </Tab>
        <Tab label="Staff">
          {/* Maam Myco */}
        <div className="justify-center items-center md:items-start">
          <div className="block md:flex my-10">
            <div className="flex justify-center items-center w-[265px]">
              <img className="h-full" src={MaamMyco} alt="" />
            </div>
            <div className="ml-2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold">Ms. Myco Dimaya</h1>
              <h2 className="text-xl text-[#008A3D]">Secretary</h2>
              <div className="my-4">
                <h3>Bachelor of Science in Computer Science</h3>
              </div>

            </div>
          </div>
        </div>
        </Tab>
      </Tabs>

      

    
    </div>
  );
};

export default Faculty;
