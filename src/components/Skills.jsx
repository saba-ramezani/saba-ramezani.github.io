import React from "react";
import { SectionWrapper } from "../hoc";
import { Technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have worked with so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>


      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {Technologies.map((Technology) => (
        <div className='w-20 h-20 justify-center items-center flex flex-col mt-5' key={Technology.name}>
          <img className="w-full h-full mb-2" src={Technology.icon} alt="" />
          <span>{Technology.name}</span>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
