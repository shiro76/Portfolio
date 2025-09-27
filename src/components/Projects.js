import React from "react";

import screen1 from "../screen/React_portfolio.png";
import screen2 from "../screen/Todo.png"

function Projects() {
  const projects = [
    {
      title: "Portfolio React",
      description:
        "Mon site personnel réalisé avec React et TailwindCSS pour présenter mes compétences.",
      image: screen1, // remplace par une vraie capture
      github: "https://github.com/shiro76/Portfolio",
      demo: "#",
    },
    {
      title: "Application Todo",
      description:
        "Une application web simple en React pour gérer une liste de tâches.",
      image: screen2,
      github: "https://github.com/shiro76/Portfolio/blob/main/src/components/Todo.js",
      demo: "/todo",
    },
    {
      title: "Mini jeu en Python",
      description:
        "Petit jeu codé en Python pour m'entraîner à la logique et au gameplay.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/python-game",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mes Projets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
                //className="w-full h-auto object-cover"
                //className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    //target="_blank"
                    //rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
