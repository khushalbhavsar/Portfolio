import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    degree: "B.Tech Electronic And Telecommunication Engineering",
    institution: "KDK College of Engineering",
    period: "2021 — 2025",
    location: "Nagpur, Maharashtra",
    cgpa: "8.00",
  },
];

export default function Education() {
  return (
    <section id="education">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">EDUCATION</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * edu.id }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-1 sm:gap-0">
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-medium text-blue-900 dark:text-indigo-300">{edu.institution}</h3>
              </div>
              <div className="sm:text-right">
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{edu.period}</div>
              </div>
            </div>
            
            <div className="mt-1 flex flex-col sm:flex-row items-start justify-between gap-1 sm:gap-0">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex-1">{edu.degree}</p>
              <div className="sm:text-right sm:ml-4">
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{edu.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
