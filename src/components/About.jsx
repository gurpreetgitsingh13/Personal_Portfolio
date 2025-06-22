import React from "react";
import skills from "../data/Skills";

const About = () => {
  return (
    <section id="about" className="bg-black text-white px-8 py-32">
      <h2 className="text-3xl font-bold text-center mb-12">About the Git-Singh</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Background Box */}
        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">whoami</h3>
          <p className="text-gray-300">
            Hey guys, It's really nice to see that you would care to read an about section in a personal portfolio website,
            I'm truly honored and grateful for any and evryone who stumbles across this part of my journey.
          </p>
          <p>
            First thing first, why is there a git between my name? Why the Gurpreet-Git-Singh ? Well the honest answer is that this is my software nametag,
            my gaming nametag is 'DisarmedSnow' so if anyone feels compelled to play duos on Fortnite you know where to find me.
            Anyways, I'm have a bachelor's in computer science engineering and a Masters in Big Data Analytics with arounf 2 years of professional experience with full-time and internships combined. 
          </p>
          <p>
            I am super passionate about building Web-apps and machine learning models with augmented artificial intelligence. Currently exploring LLM's and agentic Ai and I currently work as a full-time job seeker.
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
                  className="bg-red-600 h-3 rounded-full"
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
