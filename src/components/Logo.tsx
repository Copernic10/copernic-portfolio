import { motion } from "framer-motion";
import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={`relative ${className}`}>
      <img
        src="/lovable-uploads/CA.ico"
        alt="CA Logo"
        className={`${sizes[size]} object-contain transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]`}
      />
    </motion.div>
  );
};
