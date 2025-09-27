import React from "react";

function Skills() {
  const skills = [
    "HTML / CSS / JavaScript",
    "React",
    "Python",
    "C / C++",
    "Git & GitHub",
    "SQL / Bases de données"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Mes Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
