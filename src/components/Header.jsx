import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profilePhoto = "/IMG/ProfilePhoto.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={profilePhoto}
            alt="profile"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl ring-4 ring-blue-400 dark:ring-indigo-500 object-cover shadow-2xl border-2 border-white dark:border-slate-800"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">Khushal Bhavsar</h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">AWS Certified Solutions Architect | DevOps & Cloud Engineer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <a href="#overview" className="text-sm hover:underline">
            Overview
          </a>
          <a href="#experience" className="text-sm hover:underline">
            Experience
          </a>
          <a href="#projects" className="text-sm hover:underline">
            Projects
          </a>
          <a href="#certifications" className="text-sm hover:underline">
            Certifications
          </a>
          <a href="#education" className="text-sm hover:underline">
            Education
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
          <motion.a
            href="/Resume/Khushal_Bhavsar_Resume.pdf"
            download="Khushal_Bhavsar_Resume.pdf"
            className="ml-2 inline-flex items-center px-4 py-2 border-0 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-indigo-900/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-slate-900 dark:text-slate-100"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-4 pb-2">
              <a
                href="#overview"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Overview
              </a>
              <a
                href="#experience"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Projects
              </a>
              <a
                href="#certifications"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Certifications
              </a>
              <a
                href="#education"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm hover:text-blue-600 dark:hover:text-indigo-400 transition-colors py-2 px-3 hover:bg-blue-50 dark:hover:bg-indigo-900/30 rounded-lg"
              >
                Contact
              </a>
              <a
                href="/Resume/Khushal_Bhavsar_Resume.pdf"
                download="Khushal_Bhavsar_Resume.pdf"
                className="inline-flex items-center justify-center px-4 py-2 border-0 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
