import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-white text-black dark:bg-dark-200 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-cyan-600">Me</span>
        </h2>

        <p className="text-black dark:text-gray-400 text-center text-2xl max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Text Section */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <p className="text-gray-700 font-medium dark:text-gray-300 mb-6">
                I’m a Computer Science undergraduate passionate about building
                scalable and user-friendly web applications. I specialize in
                full-stack development using the MERN stack and enjoy turning
                complex ideas into clean, efficient solutions. I’ve solved 750+
                Data Structures and Algorithms problems, which has strengthened
                my problem-solving and analytical thinking. I have hands-on
                experience designing RESTful APIs, managing application state
                using Redux Toolkit, and working with databases like MongoDB and
                MySQL. Currently, I’m focused on building real-world projects
                and looking for opportunities to grow as a software developer.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="text-cyan-600 text-4xl mb-4">
                    <data.icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* RIGHT SIDE - LeetCode Card */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            {/* Wrapper to control alignment */}
            <div className="w-full max-w-md">
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-600 dark:text-white text-left">
                My Coding Profile
              </h3>

              {/* Card */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-600 dark:text-white text-left"><a href="https://leetcode.com/u/abhijeet_kishor/">LeetCode</a></h2>
              <div className="bg-gray-100 dark:bg-dark-300 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
                <img
                  src="https://leetcard.jacoblin.cool/abhijeet_kishor?ext=heatmap"
                  alt="LeetCode Stats"
                  className="rounded-lg w-full"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-4 text-cyan-600 dark:text-white text-left"><a href="https://www.geeksforgeeks.org/profile/abhijeetkcyf3?tab=activity">GeeksForGeeks</a></h2>
              <div className="bg-gray-100 dark:bg-dark-300 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
                <img
                  src="https://gfgstatscard.vercel.app/abhijeetkcyf3?theme=light"
                  alt="LeetCode Stats"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 dark:bg-dark-300 p-8 mt-10 rounded-2xl grid grid-cols-2 gap-6 text-center shadow-lg"
        >
          <div>
            <h3 className="text-3xl font-bold text-cyan-600">800+</h3>
            <p className="text-gray-600 dark:text-gray-400">DSA Problems</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-600">2+</h3>
            <p className="text-gray-600 dark:text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-600">5+</h3>
            <p className="text-gray-600 dark:text-gray-400">Technologies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-600">2027</h3>
            <p className="text-gray-600 dark:text-gray-400">Graduation</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
