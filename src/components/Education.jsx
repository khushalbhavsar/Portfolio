import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Education
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Academic background</p>
        <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full" />
      </motion.div>

      <div className="space-y-5">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <FiBookOpen className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {edu.degree}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 dark:from-blue-500/10 dark:to-violet-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
