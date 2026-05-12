import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaDownload } from "react-icons/fa";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="
min-h-screen flex items-center pt-20 pb-16
bg-white text-black
dark:bg-gradient-to-r dark:from-[#1a1a1a] dark:via-[#2d2d2d] dark:to-[#1a1a1a]
dark:text-white
"
    >
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left hand side content*/}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            Hi, I'm <span className="text-cyan-600">Abhijeet Kishor</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Full Stack Developer and Competitive Programmer
          </h2>
          <p className="text-lg text-black-300 mb-8">
            I create Stunning web experiences with modern technologies and
            innovative design along with excellent problem solving skill.{" "}
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition duration-300"
            >
              View Work
            </a>
            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-cyan-600 rounded-lg font-medium hover:bg-cyan-600/20 transition duration-300 group"
            >
              <FaDownload className="group-hover:translate-y-1 transition" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right side content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h--64 md:w-80 md:h-80 ">
            <div className="absolute insert-0 rounded-full bg-linear-to-r from-white to-cyan-400 opacity-100 dark:opacity-70">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-center z-10 animate-float"
                src={assets.profileImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
