import React from "react";
import { motion } from "framer-motion";

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
  repo: "https://github.com/khushalbhavsar/NodeJS-App-on-AWS-EKS-ECR.git",
  demo: "#",
  },
  {
    id: 3,
    title: "Flask + AWS Elastic Beanstalk with Private RDS",
    desc:
      "Deployed Flask app on AWS Elastic Beanstalk linked with private RDS. Designed secure VPC, subnets, and route tables for private connectivity. Used ALB for load balancing and PyMySQL for DB transactions. Enabled restricted RDS access via bastion host and IAM roles.",
    tech: ["Flask", "MySQL", "AWS EB", "RDS", "VPC"],
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
  repo: "https://github.com/khushalbhavsar/Terraform-aws-static-website.git",
  demo: "#",
  },
  {
    id: 5,
    title: "Student Management System – AWS Serverless",
    desc:
      "Built a serverless student app using S3, Lambda, API Gateway, and DynamoDB. Implemented CRUD APIs with CORS configuration for frontend integration. Secured access with IAM roles and least-privilege permissions. Delivered scalable, cost-efficient, and fully managed architecture.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    repo: "https://github.com/khushalbhavsar/AWS-Student-Management-System",
    demo: "#",
  },
  {
    id: 6,
    title: "QuickLoan – Scalable Web App on AWS",
    desc:
      "Developed a PHP loan platform on AWS EC2 with MySQL RDS backend. Implemented ALB and Auto Scaling for high availability and fault tolerance. Monitored performance using CloudWatch and optimized Nginx + PHP-FPM. Secured environment with strict Security Groups and VPC isolation.",
    tech: ["PHP", "MySQL", "Nginx", "AWS EC2", "RDS", "ALB", "Auto Scaling"],
    repo: "https://github.com/khushalbhavsar/AWS-Quicklone",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * p.id }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
          >
            <div>
              <motion.h3 
                className="text-sm sm:text-base font-medium text-blue-900 dark:text-indigo-300 group-hover:text-blue-600 dark:group-hover:text-indigo-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                {p.title}
              </motion.h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <motion.span 
                    key={t} 
                    className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <motion.a
                href={p.repo}
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 border-0 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Code
              </motion.a>
              <motion.a
                href={p.demo}
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium border-2 border-blue-500 dark:border-indigo-500 bg-transparent hover:bg-blue-500 hover:dark:bg-indigo-500 text-blue-600 dark:text-indigo-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
