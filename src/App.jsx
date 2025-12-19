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

export default function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Header />

        <main className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-10">
          <Overview />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  );
}
