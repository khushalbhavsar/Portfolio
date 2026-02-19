import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issueDate: "December 12, 2025",
    expiryDate: "December 12, 2028",
    link: "https://www.credly.com/badges/9a5ca7fd-e445-4d00-bc11-f9353e2f1673/public_url",
    skills: [
      "EC2", "S3", "VPC", "IAM", "ALB", "Auto Scaling", "RDS (MySQL)", "DynamoDB",
      "CloudWatch", "Security Groups", "Subnets", "Route Tables", "NAT Gateway",
      "Route 53", "Lambda", "API Gateway", "CloudFormation", "High Availability", "Disaster Recovery"
    ],
  },
  {
    id: 3,
    title: "DEVOPS Course Completion Certificate",
    issuer: "Ethan's Tech",
    issueDate: "December 21, 2025",
    link: "https://drive.google.com/file/d/1BAj0ZZBPgECoOuid89S2ac7r-W1J105n/view?usp=sharing",
    skills: [
      "Git", "GitHub", "GitLab", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Argo CD", "Docker", "Kubernetes (K8s)", "Terraform", "Ansible", "Prometheus", "Grafana"
    ],
  },
  {
    id: 2,
    title: "AWS Course Completion Certificate",
    issuer: "Ethan's Tech",
    issueDate: "September 04, 2025",
    link: "https://drive.google.com/file/d/1H24u-uEZO3uC2HjJ0Pg8Kku6kvEaTZfC/view?usp=sharing",
    skills: [
      "EC2", "S3", "VPC", "IAM", "ALB", "Auto Scaling", "RDS (MySQL)", "DynamoDB",
      "CloudWatch", "Security Groups", "Subnets", "Route Tables", "NAT Gateway",
      "Route 53", "Lambda", "API Gateway", "CloudFormation", "High Availability", "Disaster Recovery"
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
};

export default function Certifications() {
  return (
    <section id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Certifications
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Validated credentials and achievements</p>
        <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 block hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            aria-label={`View ${cert.title} credential`}
          >
            {/* Shimmer/glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-500 pointer-events-none" />

            {/* Shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <FiAward className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Issued: {cert.issueDate}
                  </p>
                  {cert.expiryDate && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Expires: {cert.expiryDate}
                    </p>
                  )}
                </div>
                <FiExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
              </div>

              {cert.skills && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
