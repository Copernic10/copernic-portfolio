
import React from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { SocialLink } from "@/components/SocialLink";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Succès",
          description: "Votre message a été envoyé avec succès",
        });
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: result.message || "Une erreur est survenue lors de l'envoi du message",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Me Contacter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-center">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    {...register("name", { required: "Le nom est requis" })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md bg-transparent"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", { 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md bg-transparent"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: "Le message est requis" })}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md bg-transparent"
                    placeholder="Votre message"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid gap-6">
                <motion.a
                  href="mailto:ahonoukounesperand@gmail.com"
                  className="flex items-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">ahonoukounesperand@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+22964852525"
                  className="flex items-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">+229 64 85 25 25</p>
                  </div>
                </motion.a>
              </div>

              <div className="flex justify-center space-x-6 mt-8">
                <SocialLink 
                  href="https://github.com/Copernic10" 
                  icon={<Github className="w-6 h-6" />} 
                  label="GitHub"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/espérand-ahonoukoun-0a9b942a0" 
                  icon={<Linkedin className="w-6 h-6" />} 
                  label="LinkedIn"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
