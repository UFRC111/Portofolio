import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./welcome.json"; // replace with your JSON path

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      
      {/* Lottie Animation */}
      <div className="w-40 h-40 mb-6">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      >
        Hi, I’m <span className="text-indigo-300">Mohamed Mohy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-6 text-lg text-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
      >
        Hey! I’m a data scientist who loves turning data into insight and building cool tools with Python And AI Bots
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8 }}
        className="
          mt-8 inline-block px-8 py-3 rounded-lg text-lg font-semibold text-white
          bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7]
          shadow-[0_0_20px_rgba(85,134,247,0.9)]
          hover:shadow-[0_0_35px_rgba(85,134,247,1)]
          transition-all duration-300 ease-in-out
          hover:scale-105
        "
      >
        My Work
      </motion.a>
    </section>
  );
}
