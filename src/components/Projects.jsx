import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "TodoApp Node.js - Complete DevOps Pipeline",
    desc:
      "A production-ready CI/CD-enabled Todo application built with Node.js & Express using industry-standard DevOps tools. Automated pipeline includes SonarQube code quality checks, Docker containerization, image push to Docker Hub, and deployment via Kubernetes or Docker Compose. Monitoring integrated using Prometheus & Grafana with custom metrics visualization.",
    tech: [
      "Node.js",
      "Express.js",
      "Jenkins",
      "SonarQube",
      "Docker",
      "Docker Hub",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "GitHub"
    ],
    category: "Full Stack",
    repo: "https://github.com/khushalbhavsar/TodoApp-End-to-End-CICD-Monitoring.git",
    demo: "#",
  },
  {
    id: 2,
    title: "Node.js Application Deployment on AWS EKS with ECR",
    desc:
      "Built and deployed a containerized Node.js Express application on AWS EKS using Amazon ECR as the image registry. Implemented Docker-based builds, Kubernetes deployments with multiple replicas, LoadBalancer service for external access, health check endpoints, and scalable infrastructure managed via kubectl and eksctl.",
    tech: [
      "Node.js",
      "Docker",
      "AWS ECR",
      "AWS EKS",
      "Kubernetes",
      "eksctl",
      "kubectl",
      "AWS CLI"
    ],
    category: "Backend",
    repo: "https://github.com/khushalbhavsar/NodeJS-App-on-AWS-EKS-ECR.git",
    demo: "#",
  },
  {
    id: 3,
    title: "Flask + AWS Elastic Beanstalk with Private RDS",
    desc:
      "Deployed Flask app on AWS Elastic Beanstalk linked with private RDS. Designed secure VPC, subnets, and route tables for private connectivity. Used ALB for load balancing and PyMySQL for DB transactions. Enabled restricted RDS access via bastion host and IAM roles.",
    tech: ["Flask", "MySQL", "AWS EB", "RDS", "VPC"],
    category: "Backend",
    repo: "https://github.com/khushalbhavsar/AWS-Flask-RDS-Deployment-on-AWS-Elastic-Beanstalk",
    demo: "#",
  },
  {
    id: 4,
    title: "Terraform + AWS EC2 + S3 Static Website Hosting",
    desc:
      "Provisioned a production-ready AWS infrastructure using Terraform to host a static website on S3 and an EC2 instance running Apache. Implemented a remote Terraform backend using S3 and DynamoDB for state management and locking, with automated infrastructure deployment and teardown workflows.",
    tech: [
      "Terraform",
      "AWS EC2",
      "AWS S3",
      "DynamoDB",
      "Apache",
      "AWS IAM",
      "Linux"
    ],
    category: "Backend",
    repo: "https://github.com/khushalbhavsar/Terraform-aws-static-website.git",
    demo: "#",
  },
  {
    id: 5,
    title: "Student Management System – AWS Serverless",
    desc:
      "Built a serverless student app using S3, Lambda, API Gateway, and DynamoDB. Implemented CRUD APIs with CORS configuration for frontend integration. Secured access with IAM roles and least-privilege permissions. Delivered scalable, cost-efficient, and fully managed architecture.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    category: "Full Stack",
    repo: "https://github.com/khushalbhavsar/AWS-Student-Management-System",
    demo: "#",
  },
  {
    id: 6,
    title: "QuickLoan – Scalable Web App on AWS",
    desc:
      "Developed a PHP loan platform on AWS EC2 with MySQL RDS backend. Implemented ALB and Auto Scaling for high availability and fault tolerance. Monitored performance using CloudWatch and optimized Nginx + PHP-FPM. Secured environment with strict Security Groups and VPC isolation.",
    tech: ["PHP", "MySQL", "Nginx", "AWS EC2", "RDS", "ALB", "Auto Scaling"],
    category: "Full Stack",
    repo: "https://github.com/khushalbhavsar/AWS-Quicklone",
    demo: "#",
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Things I've built</p>
        <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full" />
      </motion.div>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 sm:px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 border ${
              activeFilter === cat
                ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                : "bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Filter by ${cat}`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredProjects.map((p) => (
            <motion.article
              key={p.id}
              variants={cardVariants}
              layout
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Category badge */}
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
                  {p.category}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed line-clamp-4">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-5 flex items-center gap-3">
                <motion.a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View code for ${p.title}`}
                >
                  <FiGithub className="w-4 h-4" />
                  Code
                </motion.a>
                {p.demo && p.demo !== "#" && (
                  <motion.a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border-2 border-gray-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Live demo for ${p.title}`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
