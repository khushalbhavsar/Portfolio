import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "DevOps Intern",
    company: "Cloudnautic",
    period: "July 2025 — Present",
    description: "Contributed to real-world Cloud and DevOps projects on AWS. Built and automated CI/CD pipelines using Jenkins and GitHub Actions. Implemented Infrastructure as Code (IaC) with Terraform and CloudFormation. Containerized applications using Docker and orchestrated deployments on Kubernetes (EKS). Gained hands-on experience in monitoring, automation, and cloud-native architecture deployment.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">EXPERIENCE</h2>
      <div className="space-y-4">
        {experiences.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * e.id }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0">
              <div>
                <h3 className="text-sm sm:text-base font-medium text-blue-900 dark:text-indigo-300">{e.role}</h3>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{e.company}</div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 sm:text-right sm:whitespace-nowrap sm:ml-4">
                {e.period}
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {e.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
