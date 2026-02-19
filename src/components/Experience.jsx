import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "DevOps Intern",
    company: "Cloudnautic",
    period: "June 2024 — December 2024",
    description: "Worked on deploying and managing AWS cloud infrastructure, including EC2, S3, IAM, VPC, EBS, EFS, RDS, ELB/ALB, DynamoDB, and Lambda, ensuring secure, scalable, and highly available environments. Implemented and maintained CI/CD pipelines using Jenkins and GitLab while following best practices with Git and GitHub to streamline build, test, and deployment processes. Containerized applications using Docker and orchestrated workloads with Kubernetes to enable reliable, scalable, and efficient application deployments. Automated infrastructure provisioning, configuration management, and monitoring using Terraform, CloudFormation, and Ansible, with robust observability and performance tracking through CloudWatch, Prometheus, and Grafana.",
    skills: [
      "Amazon Web Services (AWS)",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab",
      "Terraform",
      "Ansible",
      "DevOps",
      "Amazon EKS",
      "Prometheus",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">My professional journey</p>
        <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full" />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        {/* Glowing vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-blue-500/50 dark:from-blue-500/30 dark:via-violet-500/30 dark:to-blue-500/30 md:-translate-x-px">
          <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500 blur-sm opacity-50" />
        </div>

        {experiences.map((e, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={e.id}
              variants={cardVariants}
              className={`relative flex items-start mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
                  whileHover={{ scale: 1.2 }}
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <FiBriefcase className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-500/50 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {e.role}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{e.company}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                      {e.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {e.description}
                  </p>

                  {e.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/10"
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
