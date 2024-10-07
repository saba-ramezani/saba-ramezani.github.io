import React from "react";
import { SectionWrapper } from "../hoc";
import { Technologies } from "../constants";

const Skills = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {Technologies.map((Technology) => (
        <div className='w-20 h-20 justify-center items-center flex flex-col mt-5' key={Technology.name}>
          <img className="w-full h-full mb-2" src={Technology.icon} alt="" />
          <span>{Technology.name}</span>
          
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
