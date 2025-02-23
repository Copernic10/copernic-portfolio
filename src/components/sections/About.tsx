
import React from 'react';
import { motion } from "framer-motion";
import { Code, Database, Network } from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import { CertificationCard } from "@/components/CertificationCard";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Mon Parcours</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Actuellement en 3ᵉ année en Réseaux et Génie Logiciel à Pigier Bénin, 
                je poursuis également des études en Langues et Communication (Anglais) 
                à l'Université d'Abomey-Calavi. Cette double formation me permet 
                d'avoir une approche unique dans le développement de solutions 
                techniques et la communication avec les équipes internationales.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard 
                  icon={<Code className="w-6 h-6" />}
                  title="Développement Web"
                  skills={["React", "Node.js", "PHP", "JavaScript", "TypeScript"]}
                />
                <SkillCard 
                  icon={<Database className="w-6 h-6" />}
                  title="Bases de données"
                  skills={["MySQL", "Firebase", "MongoDB"]}
                />
                <SkillCard 
                  icon={<Network className="w-6 h-6" />}
                  title="Réseaux"
                  skills={["CCNA 1", "CCNA 2", "Administration Réseau"]}
                />
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <CertificationCard
                title="CCNA 1 - Introduction to Networks"
                issuer="Cisco"
                description="Fondamentaux des réseaux, protocoles TCP/IP, adressage IP"
              />
              <CertificationCard
                title="CCNA 2 - Switching, Routing, and Wireless Essentials"
                issuer="Cisco"
                description="Configuration des commutateurs et routeurs, réseaux sans fil"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
