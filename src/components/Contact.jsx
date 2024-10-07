import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {   
  githubwhite,
  email,
  phone,
  social,
  location,
  telegram,
  linkedin, } from "../assets";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col overflow-hidden bg-black-100 rounded-2xl`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' bg-black-100 p-8 justify-center items-center mr-[150px]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1'
      >
        <div className="flex flex-row items-center p-8 ">
          <img src={email} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[1px] p-[8px] mr-2 opacity-50 scale-75 sm:scale-100"/>
          <h1 className="opacity-50 mr-5 w-[150px] text-[13px] sm:text-[17px]">Email Address</h1>
          <span className="text-[13px] sm:text-[17px]">saba.rad.sr@gmail.com</span>
        </div>

        <div className="flex flex-row items-center p-8 ">
          <img src={phone} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[1px] p-[8px] mr-2 opacity-50 scale-75 sm:scale-100"/>
          <h1 className="mr-5 opacity-50 w-[150px] text-[13px] sm:text-[17px]">Phone Number</h1>
          <span className="text-[13px] sm:text-[17px]">+98 902 117 44 72</span>
        </div>

        <div className="flex flex-row items-center p-8 ">
          <img src={social} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[1px] p-[8px] mr-2 opacity-50 scale-75 sm:scale-100"/>
          <h1 className="opacity-50 mr-5 w-[150px] text-[13px] sm:text-[17px]">Social Profiles</h1>
          <div className="flex flex-row gap-1 sm:gap-5">
            <img src={githubwhite} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[2px] p-[8px] scale-75 sm:scale-100 hover:bg-purple-900 cursor-pointer" onClick={() => window.location.href = "https://github.com/saba-ramezani"}/>
            <img src={linkedin} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[2px] p-[8px] scale-75 sm:scale-100 hover:bg-purple-900 cursor-pointer" onClick={() => window.location.href = "https://www.linkedin.com/in/saba-ramezani-43b555330/"}/>
          </div>
        </div>

        <div className="flex flex-row items-center p-8 ">
          <img src={location} alt="" className="w-[40px] h-[40px] rounded-full border-white border-[1px] p-[8px] mr-2 opacity-50 scale-75 sm:scale-100  "/>
          <h1 className="opacity-50 mr-5 w-[150px] text-[13px] sm:text-[17px]">Location</h1>
          <span className="text-[13px] sm:text-[17px]">Sattarkhan St, Tehran, Iran</span>
        </div>

        
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
