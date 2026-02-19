import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";

export default function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-slate-50 dark:bg-[#0a0f1e] text-slate-900 dark:text-white transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="relative">
          <Overview />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
            <Experience />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </div>
          <Footer />
        </main>

        <BackToTop />
      </motion.div>
    </>
  );
}
