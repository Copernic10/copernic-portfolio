
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Logo size="md" />
            <span className="font-bold text-xl bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Copernic
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">À propos</NavLink>
            <NavLink href="#projects">Projets</NavLink>
            <NavLink href="#experience">Expérience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300" />
    </a>
  );
};
