import React from 'react';
import aboutBg from '../assets/About-bg.png';
import paperbg from "../assets/paperbg.png";

const About = () => {
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
          <div className="bg-black/10 rounded-2xl text-center p-4">
            <h1 className="font-black text-3xl text-green-700 mb-2">
              ABOUT
            </h1>
            <h3 className="font-medium text-sm">
              OUTLINE - PROGRAM SCORECARD - PROGRAM SPECIALIZATION 
            </h3>
          </div>
          
        </div>
      </div>

      <div className="bg-green-700 h-1 w-full py-2">
      <div className="text-center py-4 bg-black text-white">
        <h3 className="text-2xl font-semibold">
          OUTLINE
        </h3>
      </div>
      </div>

      {/* Bottom Part */}
      <div className=" py-20 text-left text-gray-700 mt-4 pl-20 pr-20 mb-20">
      <p>
          Computer Engineering is a profession that applies engineering principles and methodologies in the analysis, design, implementation and management of hardware, software and the integration of both.
        </p>
        <br />
        <p>
          The program includes courses in computer hardware, system development and design, microelectronics and embedded systems, data communication and network administration, and software development and design.
        </p>
        <br />
        <br />
        <h2><strong>PROGRAM EDUCATIONAL OBJECTIVES</strong></h2>
        <br />
        <p>The Computer Engineering program has adopted the following educational objectives.</p>
        <p>Three to five years after graduation, the Computer Engineering alumni shall:</p>
        <br />
        <p>• have advanced their practice or achievement in the field of Computer Engineering and/or other endeavors or advocacies supported by their acquired computer engineering education;</p>
        <p>• strive to be globally competitive through</p>
        <p>1. living by the TIP mission values, pursuing continuing education, and practicing continuous quality improvement in their personal lives;</p>
        <p>2. continuously scanning, adopting, and building on the best practices in their field.</p>
        <br />
        <br />
        <h2><strong>STUDENT OUTCOMES</strong></h2>
        <br />
        <p>By the time of graduation, students will be able to:</p>
        <p>a. apply knowledge of mathematics, science, and engineering to solve complex engineering problems;</p>
        <p>b. identify, formulate, and solve complex engineering problems;</p>
        <p>c. solve complex engineering problems by designing systems, components, or processes to meet specifications within realistic constraints such as economic, environmental, cultural, social, societal, political, ethical, health and safety, manufacturability, and sustainability in accordance with standards;</p>
        <p>d. design and conduct experiments, as well as to analyze, and interpret data, and synthesize information to provide valid conclusions for investigating complex problems;</p>
        <p>e. use the techniques, skills, and modern engineering tools necessary for engineering practice in complex engineering activities;</p>
        <p>f. apply knowledge of contemporary issues and the consequent responsibilities relevant to professional engineering practice;</p>
        <p>g. understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development;</p>
        <p>h. apply principles of ethics and commit to professional ethics and responsibilities;</p>
        <p>i. function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings;</p>
        <p>j. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse;</p>
        <p>k. demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments;</p>
        <p>l. recognize the need for, and prepare to engage in lifelong learning.</p>
        <br />
        <br />
        <h2><strong>Effective SY 2018-2019, the following Student Outcomes of the Computer Engineering Program will apply:</strong></h2>
        <br />
        <p>1. identify, formulate, and solve complex engineering problems by applying knowledge and principles of engineering, science, and mathematics.</p>
        <p>2. apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, welfare, global, cultural, social, environmental, and economic factors, in accordance with standards appropriate to the discipline.</p>
        <p>3. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse.</p>
        <p>4. recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.</p>
        <p>5. function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives by applying knowledge of engineering and management principles.</p>
        <p>6. develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.</p>
        <p>7. acquire and apply new knowledge as needed, using appropriate learning strategies.</p>
      </div>

      
    </div>
  );
};

export default About;
