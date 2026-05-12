import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message feature coming soon 🚀"); // temporary
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-white text-black dark:bg-dark-200 dark:text-white transition-colors duration-500"

    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-cyan-600">Touch</span>
        </h2>

        <p className=" text-2xl dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">

              <input
                name="user_name"
                placeholder="Your Name"
                className="w-full dark:bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                type="text"
                required
              />

              <input
                name="user_email"
                placeholder="Email Address"
                className="w-full dark:bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                type="email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full h-40 dark:bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full px-6 py-3 text-2xl bg-cyan-600 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-cyan-600 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Bihar, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-cyan-600 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">abhijeetkishor24@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/kishor-abhijeet" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-400 dark:bg-dark-300 flex items-center justify-center hover:bg-sky-500 transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/abhijeet-kishor-0889a3268/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-300 dark:bg-dark-300 flex items-center justify-center hover:bg-blue-400 transition">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/abhijeetkibr29" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-sky-300 dark:bg-dark-300 flex items-center justify-center hover:bg-blue-400 transition">
                  <FaTwitter />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;