import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ( { index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
         justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3> 
         </div>
      </motion.div>
        </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        As a skilled software developer, I bring forth a strong drive and
        enthusiasm for the field of Computer Science, particularly in the domain
        of Full Stack Development. My primary goal is to engineer impactful
        software solutions that make a significant difference both within the
        organization and on a global scale. Thriving on intricate
        problem-solving and embracing challenging tasks, I am currently deeply
        engaged in honing my expertise in Data Structures and Algorithms,
        enhancing my ability to tackle complex issues head-on. I possess a swift
        learning curve, enabling me to readily adapt to diverse technological
        landscapes. Meticulous attention to detail, unwavering consistency, and
        an unwavering work ethic are intrinsic to my work style.
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  );
};

// passing in higher components the component the the id- about here
export default SectionWrapper(About, "about");
