import React from "react";

const skills = [
  "Python",
  "R",
  "Machine Learning",
  "Data Analysis",
  "Power BI",
  "AI Models",
  "Automation Bots",
  "Git & GitHub",



];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900 text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] drop-shadow-[0_0_20px_rgba(85,134,247,0.7)]">
        My Skills
      </h2>
      <p className="mt-4 text-gray-200 text-lg drop-shadow-[0_0_5px_rgba(85,134,247,0.6)]">
        Technologies and tools I work with
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 text-[#5586F7] font-semibold rounded-lg shadow-[0_0_10px_rgba(85,134,247,0.6)] hover:shadow-[0_0_20px_rgba(85,134,247,0.9)] hover:scale-105 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
