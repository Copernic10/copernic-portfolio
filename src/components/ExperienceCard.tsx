
import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const ExperienceCard = ({
  title,
  company,
  period,
  description,
  technologies
}: ExperienceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-cyber-black/70 p-6 rounded-lg border border-cyber-blue/20 backdrop-blur-sm shadow-neo group"
    >
      <motion.div 
        className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-cyber-blue glow"
        animate={{ 
          boxShadow: ['0 0 10px #0FF', '0 0 20px #0FF', '0 0 10px #0FF']
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 relative z-10">
        <div>
          <h3 className="text-xl font-mono font-semibold text-white">{title}</h3>
          <p className="text-cyber-blue font-mono">{company}</p>
        </div>
        <span className="text-sm text-cyber-gray mt-2 md:mt-0 font-mono">{period}</span>
      </div>
      <p className="text-cyber-gray mb-4 relative z-10">{description}</p>
      <div className="flex flex-wrap gap-2 relative z-10">
        {technologies.map((tech, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-3 py-1 text-sm rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:border-cyber-blue/50 transition-colors"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </motion.div>
  );
};
