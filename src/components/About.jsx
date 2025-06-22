import React from "react";
import skills from "../data/Skills";

const About = () => {
  return (
    <section id="about" className="bg-black text-white px-8 py-32">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Background Box */}
        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">My Background</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Skills Bar */}
        <div>
          <h3 className="text-xl font-semibold mb-4">My Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-pink-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
