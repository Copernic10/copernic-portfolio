
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = `> const developer = {
  name: "Copernic Ahonoukoun",
  role: "Développeur Web & Réseau",
  location: "Bénin",
  skills: ["React", "Node.js", "MySQL", "Réseaux"]
};

> developer.status
"Seeking new opportunities"

> developer.passion
"Building innovative solutions"`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Faster typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cyber-card bg-cyber-black/70 p-6 font-mono text-sm text-cyber-green shadow-neo overflow-hidden relative"
    >
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap terminal-text relative z-10">
        {text}
      </pre>
      <motion.div
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-cyber-green ml-1"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.1)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_rgba(0,255,0,0.05))]" />
      </div>
    </motion.div>
  );
};
