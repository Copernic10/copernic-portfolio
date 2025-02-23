
import { motion } from "framer-motion";
import React from "react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  description: string;
}

export const CertificationCard = ({ title, issuer, description }: CertificationCardProps) => {
  return (
    <motion.div 
      className="p-6 rounded-lg bg-cyber-black/70 border border-cyber-blue/20 backdrop-blur-sm shadow-neo relative overflow-hidden group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative z-10">
        <h4 className="text-lg font-mono font-semibold text-white mb-2">{title}</h4>
        <p className="text-sm text-cyber-blue mb-3 font-mono">{issuer}</p>
        <p className="text-cyber-gray text-sm">{description}</p>
      </div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </motion.div>
  );
};
