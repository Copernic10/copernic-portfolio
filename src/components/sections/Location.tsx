
import React from 'react';
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Localisation
          </h2>
          <div className="flex items-center justify-center mb-8">
            <MapPin className="w-6 h-6 text-primary mr-2" />
            <span className="text-gray-600 dark:text-gray-300">
              Cotonou, Bénin
            </span>
          </div>
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31715.79069391853!2d2.34567895!3d6.4614942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sbj!4v1739951995044!5m2!1sfr!2sbj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ma localisation"
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
