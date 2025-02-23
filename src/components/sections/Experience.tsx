
import React from 'react';
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/ExperienceCard";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Expérience Professionnelle
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-12 border-l-2 border-primary/20 last:pb-0">
              <ExperienceCard
                title="Développeur Full Stack"
                company="GP Mailer"
                period="2023 - Présent"
                description="Développement d'une application web de gestion des courriers administratifs avec React.js et Node.js. Mise en place d'une base de données Firebase et implémentation de l'authentification."
                technologies={["React", "Node.js", "Firebase", "TypeScript"]}
              />
            </div>

            <div className="relative pl-8 pb-12 border-l-2 border-primary/20 last:pb-0">
              <ExperienceCard
                title="Développeur Backend"
                company="Online Education"
                period="2022 - 2023"
                description="Conception et développement d'un système de gestion des ressources pédagogiques. Implémentation de fonctionnalités de téléchargement et de partage de documents."
                technologies={["PHP", "MySQL", "JavaScript", "jQuery"]}
              />
            </div>

            <div className="relative pl-8 pb-12 border-l-2 border-primary/20 last:pb-0">
              <ExperienceCard
                title="Support Technique"
                company="Pigier Bénin"
                period="2022"
                description="Assistance aux utilisateurs pour la résolution des problèmes informatiques. Configuration et maintenance du réseau local."
                technologies={["Support Technique", "Administration Réseau", "Windows Server"]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
