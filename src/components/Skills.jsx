import React from "react";
import { SectionWrapper } from "../hoc";
import { Technologies } from "../constants";

const Skills = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {Technologies.map((Technology) => (
        <div className='w-28 h-28' key={Technology.name}>
          <img src={Technology.icon} alt="" />
          {Technology.name}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
