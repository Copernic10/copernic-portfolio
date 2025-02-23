
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-cyber-black via-cyber-dark-blue to-cyber-dark-purple overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1)_0%,_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-full h-full bg-[url('/grid.svg')] opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="space-y-24">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Location />
          <Contact />
        </div>
      </div>

      {/* Moving gradient overlay */}
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="pointer-events-none fixed inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 mix-blend-overlay"
      />
    </div>
  );
};

export default Index;
