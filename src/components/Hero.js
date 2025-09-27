import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        Salut, je suis <span className="text-yellow-300">Stanislas</span>
      </h1>
      <p className="text-lg max-w-2xl mb-6">
        Développeur Web passionné. J’aime créer des applications modernes et apprendre
        de nouvelles technologies comme React, Python ou C++.
      </p>
      <a
        href="#projects"
        className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition"
      >
        Voir mes projets
      </a>
    </section>
  );
}

export default Hero;
