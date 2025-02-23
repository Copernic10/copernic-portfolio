
import React from 'react';
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Online Education"
              description="Système de dépôt d'épreuves permettant aux enseignants de partager des ressources pédagogiques avec leurs étudiants."
              technologies={["PHP", "MySQL", "JavaScript"]}
              imageUrl="/lovable-uploads/32b42a0e-cc49-492c-9561-76444b74c595.png"
              liveUrl="https://onlineeducation.serv00.net"
            />
            <ProjectCard
              title="GP Mailer"
              description="Application de gestion des courriers administratifs, facilitant le suivi et l'organisation de la correspondance."
              technologies={["React", "Node.js", "Firebase"]}
              imageUrl="/lovable-uploads/7787d79c-b8eb-482c-a344-66879cc12470.png"
            />
            <ProjectCard
              title="Pigier Estud"
              description="Plateforme de gestion de la vie estudiantine, actuellement en développement."
              technologies={["React", "Node.js", "MySQL"]}
              imageUrl="/lovable-uploads/661bef98-6242-4eed-9131-bfaaab52777d.png"
              inDevelopment
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
