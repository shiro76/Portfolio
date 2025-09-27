import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          À propos de moi
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Je suis développeur avec un diplôme Bac+2 en développement web et j'ai passer 1an et demis à l'école 42. 
          Je suis passionné par la création de projets interactifs, l’apprentissage de nouvelles technologies, 
          et l’amélioration continue de mes compétences en programmation.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
            J’ai travaillé sur des projets React, Python et C/C++, ainsi que sur le développement de bot Discord de serveurs Minecraft et d’autres jeux en ligne. 
            Je suis toujours prêt à relever de nouveaux défis et à apprendre sur le tas, en créant des expériences utilisateurs fluides et engageantes.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Me contacter
          </a>
          <a
            href="/cv/mon_CV.pdf"
            target="_blank"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
