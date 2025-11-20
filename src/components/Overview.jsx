import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section id="overview">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900 dark:text-indigo-300">OVERVIEW</h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          I'm <b>Khushal Bhavsar</b>, a DevOps and Cloud enthusiast with a strong foundation in engineering and hands-on experience in building automated, scalable, and secure infrastructure. I completed my <b>B.Tech in Electronics and Telecommunication Engineering</b> from <b>KDK College of Engineering, Nagpur (2021–2025)</b> with a <b>CGPA of 8.0</b>. Currently, I'm working as a <b>DevOps Intern at Cloudnautic</b>, where I contribute to real-world cloud projects on AWS, automate CI/CD pipelines using <b>Jenkins and GitHub Actions</b>, implement <b>Infrastructure as Code</b> with <b>Terraform and CloudFormation</b>, and deploy containerized applications using <b>Docker and Kubernetes (EKS)</b>. I have strong technical skills in <b>Linux, Git, AWS, Kubernetes, Terraform, Docker, and monitoring tools like CloudWatch, Prometheus, and Grafana</b>. I'm passionate about simplifying infrastructure, improving automation, and building systems that are reliable, scalable, and production-ready.
        </p>

        <div className="mt-6 flex justify-center items-center">
          <a href="https://skillicons.dev" className="inline-block">
            <img 
              src="https://skillicons.dev/icons?i=linux,git,jenkins,gitlab,githubactions,ansible,docker,kubernetes,aws,terraform,prometheus,grafana" 
              alt="Skills Icons"
              className="max-w-full h-auto"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
