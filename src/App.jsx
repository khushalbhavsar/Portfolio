import React from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />

      <main className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-10">
        <Overview />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
