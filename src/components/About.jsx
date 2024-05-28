
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
          <div className="bg-black/10 rounded-2xl text-center p-4 glassmorphism">
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
      <div className=" py-20 text-left text-gray-900 mt-4 pl-20 pr-20 mb-20">
      <h4 >
          Computer Engineering is a profession that applies engineering principles and methodologies in the analysis, design, implementation and management of hardware, software and the integration of both.
        </h4>
        <br />
        <h4 >
          The program includes courses in computer hardware, system development and design, microelectronics and embedded systems, data communication and network administration, and software development and design.
        </h4>
        <br />
        <br />
        <h2><strong>PROGRAM EDUCATIONAL OBJECTIVES</strong></h2>
        <br />
        <h4 >The Computer Engineering program has adopted the following educational objectives.</h4>
        <h4 >Three to five years after graduation, the Computer Engineering alumni shall:</h4>
        <br />
        <h4 >• have advanced their practice or achievement in the field of Computer Engineering and/or other endeavors or advocacies supported by their acquired computer engineering education;</h4>
        <h4 >• strive to be globally competitive through</h4>
        <h4 >1. living by the TIP mission values, pursuing continuing education, and practicing continuous quality improvement in their personal lives;</h4>
        <h4 >2. continuously scanning, adopting, and building on the best practices in their field.</h4>
        <br />
        <br />
        <h2><strong>STUDENT OUTCOMES</strong></h2>
        <br />
        <h4 >By the time of graduation, students will be able to:</h4>
        <h4 >a. apply knowledge of mathematics, science, and engineering to solve complex engineering problems;</h4>
        <h4 >b. identify, formulate, and solve complex engineering problems;</h4>
        <h4 >c. solve complex engineering problems by designing systems, components, or processes to meet specifications within realistic constraints such as economic, environmental, cultural, social, societal, political, ethical, health and safety, manufacturability, and sustainability in accordance with standards;</h4>
        <h4 >d. design and conduct experiments, as well as to analyze, and interpret data, and synthesize information to provide valid conclusions for investigating complex problems;</h4>
        <h4 >e. use the techniques, skills, and modern engineering tools necessary for engineering practice in complex engineering activities;</h4>
        <h4 >f. apply knowledge of contemporary issues and the consequent responsibilities relevant to professional engineering practice;</h4>
        <h4 >g. understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development;</h4>
        <h4 >h. apply principles of ethics and commit to professional ethics and responsibilities;</h4>
        <h4 >i. function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings;</h4>
        <h4 >j. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse;</h4>
        <h4 >k. demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments;</h4>
        <h4 >l. recognize the need for, and prepare to engage in lifelong learning.</h4>
        <br />
        <br />
        <h2><strong>Effective SY 2018-2019, the following Student Outcomes of the Computer Engineering Program will apply:</strong></h2>
        <br />
        <h4 >1. identify, formulate, and solve complex engineering problems by applying knowledge and principles of engineering, science, and mathematics.</h4>
        <h4 >2. apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, welfare, global, cultural, social, environmental, and economic factors, in accordance with standards appropriate to the discipline.</h4>
        <h4 >3. communicate effectively on complex engineering activities with various communities including engineering experts and society at large using appropriate levels of discourse.</h4>
        <h4 >4. recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.</h4>
        <h4 >5. function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives by applying knowledge of engineering and management principles.</h4>
        <h4 >6. develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.</h4>
        <h4 >7. acquire and apply new knowledge as needed, using appropriate learning strategies.</h4>
      </div>

      
    </div>
  );
};

export default About;
