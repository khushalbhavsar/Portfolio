import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";

const profilePhoto = "/IMG/ProfilePhoto.jpg";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Sidebar animation variants
  const sidebarVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 200 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.05, type: "spring", stiffness: 200 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/5 dark:bg-[#0a0f1e]/80 border-b border-white/10 dark:border-white/10 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Profile */}
          <motion.a
            href="#overview"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Khushal Bhavsar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-blue-500/50 group-hover:ring-blue-400 transition-all duration-300"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0a0f1e]" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
                Khushal Bhavsar
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">DevOps & Cloud Engineer</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/10 rounded-lg border border-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <motion.a
              href="/Resume/Khushal_Bhavsar_Resume.pdf"
              download="Khushal_Bhavsar_Resume.pdf"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </motion.a>

            {/* Dark mode toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-lg bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>

          {/* Mobile: toggles */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <FiX className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <FiMenu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Side drawer */}
            <motion.nav
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-72 bg-slate-50 dark:bg-[#0d1329] border-l border-gray-200 dark:border-white/10 z-50 md:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={profilePhoto}
                    alt="Khushal Bhavsar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/50"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Khushal Bhavsar</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">DevOps Engineer</p>
                  </div>
                </div>
                <motion.button
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400"
                  aria-label="Close menu"
                >
                  <FiX className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="flex-1 p-4 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-white/10">
                <motion.a
                  href="/Resume/Khushal_Bhavsar_Resume.pdf"
                  download="Khushal_Bhavsar_Resume.pdf"
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
