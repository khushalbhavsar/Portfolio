import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from "react-icons/fi";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/khushalbhavsar", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/khushal-bhavsar-/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/khushal_41?igsh=MXViN3Ftd3R1ZDh2Ng==", label: "Instagram" },
  { icon: FiMail, href: "mailto:khushalbhavsar41@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-gray-200 dark:border-white/10">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5 justify-center">
              Built with <FiHeart className="w-3.5 h-3.5 text-red-500" /> by{" "}
              <span className="font-medium text-slate-900 dark:text-white">Khushal Bhavsar</span>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
              &copy; {currentYear} All rights reserved. React &bull; Tailwind CSS &bull; Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
