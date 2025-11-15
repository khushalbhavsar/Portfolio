import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profilePhoto from "../IMG/ProfilePhoto.jpg";
import resumePdf from "../Resume/Khushal_Bhavsar_Resume.pdf";
import awsCertificate from "../Certificate/13940 - Khushal Ravindra Bhavsar - Course Completion Certificate.pdf";

// Single-file GitHub-style portfolio (React + Tailwind)
// Default export: PortfolioApp component
// How to use:
// 1) Place this file as src/App.jsx inside a Create React App / Vite React project.
// 2) Ensure Tailwind CSS is configured in the project.
// 3) Install framer-motion: `npm i framer-motion` (optional but recommended).

const projects = [
  {
    id: 1,
    title: "Node.js App Deployment on AWS EKS",
    desc:
      "Deployed a containerized Node.js app on AWS EKS using ECR as registry. Automated image builds, scans, and encrypted storage for secure deployments. Configured IAM roles, RBAC, and LoadBalancer for secure cluster access. Enabled autoscaling and monitoring with CloudWatch and kubectl verification.",
    tech: ["Node.js", "Docker", "Kubernetes", "AWS EKS", "ECR"],
    repo: "https://github.com/khushalbhavsar/Nodejs-EKS-ECR-Deployment",
    demo: "#",
  },
  {
    id: 2,
    title: "TodoApp – Node.js DevOps Pipeline",
    desc:
      "Built a Node.js app and containerized it using Docker for portability. Automated CI/CD pipeline with Jenkins to deploy on AWS EC2. Provisioned infrastructure using Terraform and configured IAM policies. Integrated GitHub, Docker, and AWS CLI for continuous delivery.",
    tech: ["Node.js", "Docker", "Jenkins", "Terraform", "AWS EC2", "CI/CD"],
    repo: "https://github.com/khushalbhavsar/TodoApp-NodeJS-DevOps-Pipeline",
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
    title: "Student Management System – AWS Serverless",
    desc:
      "Built a serverless student app using S3, Lambda, API Gateway, and DynamoDB. Implemented CRUD APIs with CORS configuration for frontend integration. Secured access with IAM roles and least-privilege permissions. Delivered scalable, cost-efficient, and fully managed architecture.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    repo: "https://github.com/khushalbhavsar/AWS-Student-Management-System",
    demo: "#",
  },
  {
    id: 5,
    title: "QuickLoan – Scalable Web App on AWS",
    desc:
      "Developed a PHP loan platform on AWS EC2 with MySQL RDS backend. Implemented ALB and Auto Scaling for high availability and fault tolerance. Monitored performance using CloudWatch and optimized Nginx + PHP-FPM. Secured environment with strict Security Groups and VPC isolation.",
    tech: ["PHP", "MySQL", "Nginx", "AWS EC2", "RDS", "ALB", "Auto Scaling"],
    repo: "https://github.com/khushalbhavsar/AWS-Quicklone",
    demo: "#",
  },
];

const experiences = [
  {
    id: 1,
    role: "DevOps Intern",
    company: "Cloudnautic",
    period: "July 2025 — Present",
    description: "Contributed to real-world Cloud and DevOps projects on AWS. Built and automated CI/CD pipelines using Jenkins and GitHub Actions. Implemented Infrastructure as Code (IaC) with Terraform and CloudFormation. Containerized applications using Docker and orchestrated deployments on Kubernetes (EKS). Gained hands-on experience in monitoring, automation, and cloud-native architecture deployment.",
  },
];

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

const certificates = [
  {
    id: 1,
    title: "AWS Course Completion Certificate",
    issuer: "Ethan's Tech",
    date: "October 2025",
    file: awsCertificate,
  },
];

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={profilePhoto}
            alt="profile"
            className="w-20 h-20 rounded-xl ring-4 ring-blue-400 dark:ring-indigo-500 object-cover shadow-2xl border-2 border-white dark:border-slate-800"
          />
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Khushal Bhavsar</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">Cloud DevOps Engineer</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#overview" className="text-sm hover:underline">
            Overview
          </a>
          <a href="#projects" className="text-sm hover:underline">
            Projects
          </a>
          <a href="#experience" className="text-sm hover:underline">
            Experience
          </a>
          <a href="#education" className="text-sm hover:underline">
            Education
          </a>
          <a href="#certificates" className="text-sm hover:underline">
            Certificates
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center px-4 py-2 border-0 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Overview */}
        <section id="overview">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-900 dark:text-indigo-300">OVERVIEW</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm <b>Khushal Bhavsar</b>, a DevOps and Cloud enthusiast with a strong foundation in engineering and hands-on experience in building automated, scalable, and secure infrastructure. I completed my <b>B.Tech in Electronics and Telecommunication Engineering</b> from <b>KDK College of Engineering, Nagpur (2021–2025)</b> with a <b>CGPA of 8.0</b>. Currently, I'm working as a <b>DevOps Intern at Cloudnautic</b>, where I contribute to real-world cloud projects on AWS, automate CI/CD pipelines using <b>Jenkins and GitHub Actions</b>, implement <b>Infrastructure as Code</b> with <b>Terraform and CloudFormation</b>, and deploy containerized applications using <b>Docker and Kubernetes (EKS)</b>. I have strong technical skills in <b>Linux, Git, AWS, Kubernetes, Terraform, Docker, and monitoring tools like CloudWatch, Prometheus, and Grafana</b>. I'm passionate about simplifying infrastructure, improving automation, and building systems that are reliable, scalable, and production-ready.
            </p>

            <div className="mt-6 flex justify-center items-center">
              <a href="https://skillicons.dev" className="inline-block">
                <img 
                  src="https://skillicons.dev/icons?i=git,github,jenkins,githubactions,docker,kubernetes,terraform,aws,linux,cpp,js,php,html,css,react,redux,bootstrap,tailwindcss,nodejs,expressjs,mongodb,mysql" 
                  alt="Skills Icons"
                  className="max-w-full h-auto"
                />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">PROJECTS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * p.id }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
              >
                <div>
                  <motion.h3 
                    className="font-medium text-blue-900 dark:text-indigo-300 group-hover:text-blue-600 dark:group-hover:text-indigo-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {p.title}
                  </motion.h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{p.desc}</p>

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
                    className="text-sm px-4 py-2 border-0 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.a>
                  <motion.a
                    href={p.demo}
                    className="text-sm px-4 py-2 rounded-lg font-medium border-2 border-blue-500 dark:border-indigo-500 bg-transparent hover:bg-blue-500 hover:dark:bg-indigo-500 text-blue-600 dark:text-indigo-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
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

        {/* Experiences */}
        <section id="experience">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">EXPERIENCE</h2>
          <div className="space-y-4">
            {experiences.map((e) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * e.id }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-blue-900 dark:text-indigo-300">{e.role}</h3>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{e.company}</div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 text-right whitespace-nowrap ml-4">
                    {e.period}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {e.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">EDUCATION</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * edu.id }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-900 dark:text-indigo-300">{edu.institution}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600 dark:text-slate-400">{edu.period}</div>
                  </div>
                </div>
                
                <div className="mt-1 flex items-start justify-between">
                  <p className="text-slate-700 dark:text-slate-300 flex-1">{edu.degree}</p>
                  <div className="text-right ml-4">
                    <div className="text-sm text-slate-600 dark:text-slate-400">{edu.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="scroll-mt-20 mb-16">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-indigo-300">CERTIFICATES</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * cert.id }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-indigo-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium">Date:</span> {cert.date}
                </p>
                <motion.a 
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid md:grid-cols-2 gap-6 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-900 dark:text-indigo-300">CONTACT</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Interested in working together? Fill out the form or reach me directly.</p>

            <form className="mt-4 space-y-3" onSubmit={(e) => {
              e.preventDefault();
              
              const SERVICE_ID = "service_nyf1j2b";
              const TEMPLATE_ID = "template_6xdhz3k";
              const PUBLIC_KEY = "0ocdz2Ex4dtsvZAOU";
              
              emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
                .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
                  alert("Message sent successfully!");
                  e.target.reset();
                })
                .catch((error) => {
                  console.error('FAILED...', error);
                  alert("Failed to send message: " + (error.text || error.message || 'Please try again.'));
                });
            }}>
              <input 
                name="name" 
                type="text"
                required
                className="w-full p-3 rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
                placeholder="Your name" 
              />
              <input 
                name="email" 
                type="email"
                required
                className="w-full p-3 rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
                placeholder="Your email" 
              />
              <input 
                name="title" 
                type="text"
                required
                className="w-full p-3 rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
                placeholder="Subject" 
              />
              <textarea 
                name="message" 
                required
                className="w-full p-3 rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
                rows={5} 
                placeholder="Message"
              ></textarea>
              <div className="flex items-center gap-3">
                <motion.button 
                  type="submit"
                  className="px-5 py-2.5 rounded-lg border-0 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
                <motion.a 
                  href="mailto:khushalbhavsar41@gmail.com" 
                  className="text-sm px-4 py-2 rounded-lg font-medium border-2 border-blue-500 dark:border-indigo-500 bg-transparent hover:bg-blue-500 hover:dark:bg-indigo-500 text-blue-600 dark:text-indigo-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  or email me
                </motion.a>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300"
          >
            <h3 className="font-medium text-blue-900 dark:text-indigo-300">WHERE TO FIND ME</h3>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>GitHub: <a href="https://github.com/khushalbhavsar" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">github.com/khushalbhavsar</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/khushal-bhavsar-/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">linkedin.com/in/khushalbhavsar</a></li>
              <li>Instagram: <a href="https://www.instagram.com/khushal_41?igsh=MXViN3Ftd3R1ZDh2Ng==" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">instagram.com/khushalbhavsar</a></li>
              <li>Email: <a href="mailto:khushalbhavsar41@gmail.com" className="hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">khushalbhavsar41@gmail.com</a></li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-blue-900 dark:text-indigo-300">OPEN TO</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Full-time</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Internship</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Remote</span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Contract</span>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-slate-500 dark:text-slate-400">
          Built with ❤️ by Khushal Bhavsar • Tailwind CSS • React
        </footer>
      </main>
    </div>
  );
}


