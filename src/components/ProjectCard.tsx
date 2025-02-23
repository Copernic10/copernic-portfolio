
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  inDevelopment?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  liveUrl, 
  inDevelopment 
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="rounded-lg bg-cyber-black/70 border border-cyber-blue/20 backdrop-blur-sm shadow-neo overflow-hidden group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
      </div>
      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-mono font-semibold text-white">{title}</h3>
          {inDevelopment && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-2 py-1 text-xs rounded-full bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30"
            >
              En développement
            </motion.span>
          )}
        </div>
        <p className="text-cyber-gray text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-1 text-xs rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:border-cyber-blue/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        {liveUrl && (
          <motion.a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors text-sm group/link"
            whileHover={{ x: 5 }}
          >
            <LinkIcon className="w-4 h-4" />
            <span className="border-b border-cyber-blue/0 group-hover/link:border-cyber-blue/50 transition-colors">
              Voir le projet
            </span>
          </motion.a>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
