import React from "react";
import projectData from "../data/Projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <div className="text-5xl mb-4 text-center">💻</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="bg-red-600 text-sm text-white px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
