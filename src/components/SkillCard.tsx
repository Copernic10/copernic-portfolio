
import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export const SkillCard = ({ icon, title, skills }: SkillCardProps) => {
  return (
    <motion.div 
      className="p-6 rounded-lg bg-cyber-black/70 border border-cyber-blue/20 backdrop-blur-sm shadow-neo relative overflow-hidden group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-cyber-blue"
          >
            {icon}
          </motion.div>
          <h4 className="text-lg font-mono font-semibold text-white">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 rounded-full text-sm bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:border-cyber-blue/50 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
