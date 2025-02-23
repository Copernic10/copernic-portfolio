
import { motion } from "framer-motion";
import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-3 rounded-lg bg-cyber-black/50 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-colors group"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label={label}
    >
      <div className="relative z-10">
        {icon}
      </div>
      <motion.span
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyber-gray opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-cyber-black/90 px-2 py-1 rounded"
      >
        {label}
      </motion.span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
};
