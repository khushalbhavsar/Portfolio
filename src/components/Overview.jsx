import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "AWS", icon: "aws", url: "https://aws.amazon.com/" },
  { name: "Terraform", icon: "terraform", url: "https://www.terraform.io/" },
  { name: "Ansible", icon: "ansible", url: "https://www.ansible.com/" },
  { name: "Python", icon: "python", url: "https://www.python.org/" },
  { name: "Bash", icon: "bash", url: "https://www.gnu.org/software/bash/" },
  { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
  { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io/" },
  { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg", url: "https://helm.sh/", isCustom: true },
  { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
  { name: "Jenkins", icon: "jenkins", url: "https://www.jenkins.io/" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", url: "https://argo-cd.readthedocs.io/", isCustom: true },
  { name: "CloudWatch", icon: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg", url: "https://aws.amazon.com/cloudwatch/", isCustom: true },
  { name: "Prometheus", icon: "prometheus", url: "https://prometheus.io/" },
  { name: "Grafana", icon: "grafana", url: "https://grafana.com/" },
];

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
            I'm <b>Khushal Bhavsar</b>, an <b>AWS Certified Solutions Architect – Associate</b> and a <b>DevOps & Cloud Engineer</b> with a strong engineering foundation and hands-on experience in building automated, scalable, and secure cloud infrastructure. I hold a <b>B.Tech in Electronics and Telecommunication Engineering</b> from <b>KDK College of Engineering, Nagpur (2021–2025)</b> with a <b>CGPA of 7.22</b>.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            I completed a <b>DevOps Internship at Cloudnautic</b>, where I worked on real-world AWS projects, automated CI/CD pipelines using <b>Jenkins and GitHub Actions</b>, implemented <b>Infrastructure as Code</b> with <b>Terraform and AWS CloudFormation</b>, and deployed containerized applications using <b>Docker and Kubernetes (Amazon EKS)</b>. My technical skill set includes <b>Linux, Git, AWS, Kubernetes, Docker, Terraform</b>, and monitoring and observability tools such as <b>CloudWatch, Prometheus, and Grafana</b>.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            I am actively seeking full-time opportunities in <b>Cloud Engineering</b>, <b>DevOps Engineering</b>, or <b>Site Reliability Engineering (SRE)</b> roles, where I can contribute to reliable, scalable, and production-ready systems while continuously learning and growing.
        </p>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-blue-900 dark:text-indigo-300 mb-4 text-center">SKILLS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-indigo-900/50 border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-indigo-500/20"
                title={`Visit ${skill.name} official website`}
              >
                <img
                  src={skill.isCustom ? skill.icon : `https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 text-center">
                  {skill.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
