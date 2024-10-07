import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { amirkabir, githubGradient, medal, saba } from "../assets";

const Education = () => {
    return (
        <>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Education</h2>
          </motion.div>
    
    
          <motion.div>
            <motion.p 
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-10 text-secondary text-[13px] md:text-[17px] max-w-[45rem] leading-[35px]'
            >
              Sep. 2019 - Aug. 2024 <br />
            </motion.p>
            <motion.p 
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-0 text-white text-[13px] md:text-[20px] max-w-[50rem] leading-[35px]'
            >
              B.Sc. Computer Engineering <br /> 
              <span className="text-secondary text-[13px] md:text-[17px]">Amirkabir University of Technology (Tehran Polytechnic) <br /></span>
            </motion.p>

            <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-10 text-white text-[13px] md:text-[20px] max-w-[50rem] leading-[35px] flex md:flex-row flex-col md:items-center'
            >
            <span className="text-secondary text-[13px] md:text-[17px]">Thesis &nbsp; &nbsp; </span>
            <span>Classification of Tree-Structured Data using Graph Neural Network</span>
            <img src={githubGradient} alt="" className="h-[50px] w-[50px] md:ml-2 cursor-pointer" onClick={() => window.location.href="https://github.com/saba-ramezani/Tree-Neural-Network"}/>
            </motion.div>

            <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-10 text-white text-[13px] md:text-[20px] max-w-[50rem] leading-[35px] flex flex-row'
            >
            <span className="text-secondary text-[13px] md:text-[17px]">GPA &nbsp; &nbsp; </span>
            <span>18.28 / 20</span>
            <img src={medal} alt="" className="h-[40px] w-[40px] ml-2 cursor-pointer" onClick={() => window.location.href="https://github.com/saba-ramezani/Tree-Neural-Network"}/>
            </motion.div>

            <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-0 text-secondary text-[13px] md:text-[15px] max-w-[50rem] leading-[35px]'>
                Ranked in the top 10 percent of students of Computer Engineering Dept.
            </motion.p>

            <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-10 text-white-100 text-[13px] md:text-[15px] max-w-[50rem] leading-[35px] flex flex-col'
            >
            <span className="text-secondary text-[13px] md:text-[17px]">Selected Courses</span>
            <span>Computational Intelligence, Principles & Applications of Artificial Intelligence, Information Retrieval, Data Mining, Applied Linear Algebra, Algorithm Design, Data Structures, Principles of Database Design</span>
            </motion.div>
    
            <motion.img
              variants={fadeIn("", "", 0.1, 1)}
              src={amirkabir} alt="" className="max-h-[250px] max-w-[250px] h-auto w-[25%] rounded-lg absolute md:top-10 top-10 right-5 bg-white p-[10px]"
            >
            </motion.img>
          </motion.div>
    

        </>
    )
}

export default SectionWrapper(Education, "education");