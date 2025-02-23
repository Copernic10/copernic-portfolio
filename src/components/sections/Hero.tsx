
import React from 'react';
import { motion } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SocialLink } from "@/components/SocialLink";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <motion.h1 
            className="cyber-glitch text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent"
            animate={{ textShadow: ["0 0 20px rgba(0,255,255,0.5)", "0 0 10px rgba(0,255,255,0)", "0 0 20px rgba(0,255,255,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Copernic Ahonoukoun
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-cyber-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Développeur Web & Réseau
          </motion.p>

          <Terminal />
          
          <motion.div 
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <SocialLink href="https://github.com/Copernic10" icon={<Github className="text-cyber-blue hover:text-cyber-purple transition-colors" />} label="GitHub" />
            <SocialLink 
              href="https://www.linkedin.com/in/espérand-ahonoukoun-0a9b942a0" 
              icon={<Linkedin className="text-cyber-blue hover:text-cyber-purple transition-colors" />} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="mailto:ahonoukounesperand@gmail.com" 
              icon={<Mail className="text-cyber-blue hover:text-cyber-purple transition-colors" />} 
              label="Email" 
            />
            <SocialLink 
              href="tel:+22964852525" 
              icon={<Phone className="text-cyber-blue hover:text-cyber-purple transition-colors" />} 
              label="Téléphone" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
