import React from "react";
import { motion } from "framer-motion";

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
    id: 2,
    title: "AWS Course Completion Certificate",
    issuer: "Ethan's Tech",
    issueDate: "September 2025",
    link: "https://drive.google.com/file/d/1H24u-uEZO3uC2HjJ0Pg8Kku6kvEaTZfC/view?usp=sharing",
    skills: [
      "EC2", "S3", "VPC", "IAM", "ALB", "Auto Scaling", "RDS (MySQL)", "DynamoDB",
      "CloudWatch", "Security Groups", "Subnets", "Route Tables", "NAT Gateway",
      "Route 53", "Lambda", "API Gateway", "CloudFormation", "High Availability", "Disaster Recovery"
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">
        CERTIFICATIONS
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * cert.id }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group block"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-medium text-blue-900 dark:text-indigo-300 group-hover:text-blue-600 dark:group-hover:text-indigo-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                  Issued: {cert.issueDate}
                </p>
                {cert.expiryDate && (
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Expires: {cert.expiryDate}
                  </p>
                )}
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-indigo-400 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>

            {cert.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300 rounded-full border border-blue-200 dark:border-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
