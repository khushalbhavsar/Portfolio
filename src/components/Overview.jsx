import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";

const skills = [
  // Cloud & AWS Services
  { name: "AWS", icon: "amazonwebservices", url: "https://aws.amazon.com/" },
  { name: "EC2", icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg", url: "https://aws.amazon.com/ec2/", isCustom: true },
  { name: "S3", icon: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg", url: "https://aws.amazon.com/s3/", isCustom: true },
  { name: "VPC", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Virtual-Private-Cloud.svg", url: "https://aws.amazon.com/vpc/", isCustom: true },
  { name: "IAM", icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg", url: "https://aws.amazon.com/iam/", isCustom: true },
  { name: "RDS", icon: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg", url: "https://aws.amazon.com/rds/", isCustom: true },
  { name: "Lambda", icon: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", url: "https://aws.amazon.com/lambda/", isCustom: true },
  { name: "CloudWatch", icon: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg", url: "https://aws.amazon.com/cloudwatch/", isCustom: true },
  { name: "ALB", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Elastic-Load-Balancing.svg", url: "https://aws.amazon.com/elasticloadbalancing/", isCustom: true },
  { name: "Auto Scaling", icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2-Auto-Scaling.svg", url: "https://aws.amazon.com/autoscaling/", isCustom: true },
  { name: "EKS", icon: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Kubernetes-Service.svg", url: "https://aws.amazon.com/eks/", isCustom: true },
  { name: "ECR", icon: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Registry.svg", url: "https://aws.amazon.com/ecr/", isCustom: true },
  { name: "CloudFormation", icon: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudFormation.svg", url: "https://aws.amazon.com/cloudformation/", isCustom: true },
  
  // Containers & Orchestration
  { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
  { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io/" },
  { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg", url: "https://helm.sh/", isCustom: true },
  
  // Infrastructure as Code
  { name: "Terraform", icon: "terraform", url: "https://www.terraform.io/" },
  
  // CI/CD
  { name: "Jenkins", icon: "jenkins", url: "https://www.jenkins.io/" },
  { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
  { name: "GitLab CI", icon: "gitlab", url: "https://docs.gitlab.com/ee/ci/" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", url: "https://argo-cd.readthedocs.io/", isCustom: true },
  
  // Monitoring & Observability
  { name: "Prometheus", icon: "prometheus", url: "https://prometheus.io/" },
  { name: "Grafana", icon: "grafana", url: "https://grafana.com/" },
  
  // Security & Code Quality
  { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", url: "https://www.sonarsource.com/products/sonarqube/", isCustom: true },
  { name: "Trivy", icon: "https://cdn.simpleicons.org/trivy/36A9E1", url: "https://trivy.dev/", isCustom: true },
  { name: "OWASP", icon: "https://owasp.org/assets/images/logo.png", url: "https://owasp.org/www-project-dependency-check/", isCustom: true },
  
  // Version Control & OS
  { name: "Git", icon: "git", url: "https://git-scm.com/" },
  { name: "Linux", icon: "linux", url: "https://www.linux.org/" },
  { name: "Ubuntu", icon: "ubuntu", url: "https://ubuntu.com/" },
  
  // Programming & Scripting
  { name: "Bash", icon: "bash", url: "https://www.gnu.org/software/bash/" },
  { name: "Python", icon: "python", url: "https://www.python.org/" },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/khushalbhavsar", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/khushal-bhavsar-/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/khushal_bhavsar._", label: "Instagram" },
  { icon: FiMail, href: "mailto:khushalbhavsar41@gmail.com", label: "Email" },
];

const roles = [
  "Cloud Engineer",
  "DevOps Engineer",
  "Site Reliability Engineer",
  "AWS Solutions Architect",
];

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
  }, [text, wordIndex, isDeleting, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Overview() {
  const typedRole = useTypewriter(roles, 80, 40, 2000);

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700" />
              
              {/* Pulsing outer ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 animate-pulse opacity-50" />
              
              {/* Image container */}
              <div className="relative rounded-full p-1 bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500">
                <div className="rounded-full bg-slate-100 dark:bg-slate-900 p-0.5">
                  <img
                    src="/IMG/ProfilePhoto.jpg"
                    alt="Khushal Bhavsar"
                    className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Available</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-text text-transparent bg-[size:200%] animate-[shimmer_3s_linear_infinite]">
              Khushal Bhavsar
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400">
              <span className="text-blue-500">&lt;</span>
              {" "}
              <span className="text-slate-800 dark:text-gray-200">{typedRole}</span>
              <span className="animate-pulse text-blue-500">|</span>
              {" "}
              <span className="text-blue-500">/&gt;</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 max-w-3xl mx-auto space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm <b className="text-slate-900 dark:text-white">Khushal Bhavsar</b> — an <b className="text-slate-900 dark:text-white">AWS Certified Solutions Architect – Associate</b> and a passionate <b className="text-slate-900 dark:text-white">DevOps & Full Stack Developer</b> focused on building scalable, cloud-native applications and automated infrastructure.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in designing and deploying <b className="text-slate-900 dark:text-white">production-grade systems</b> using <b className="text-slate-900 dark:text-white">AWS, Kubernetes, Docker, Terraform, and CI/CD pipelines</b>. With hands-on experience as a <b className="text-slate-900 dark:text-white">DevOps Intern</b>, I have worked on provisioning cloud infrastructure, containerizing applications, and implementing GitOps workflows to deliver reliable and efficient deployments.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I enjoy transforming complex problems into practical solutions through <b className="text-slate-900 dark:text-white">Infrastructure as Code, automation, and modern DevOps practices</b>. My work combines strong <b className="text-slate-900 dark:text-white">Linux fundamentals</b>, cloud architecture expertise, and development experience to build systems that are <b className="text-slate-900 dark:text-white">scalable, secure, and resilient</b>.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Beyond technology, I'm passionate about <b className="text-slate-900 dark:text-white">continuous learning</b>, <b className="text-slate-900 dark:text-white">problem solving</b>, and creating impactful real-world projects that improve system reliability and developer productivity.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my work"
            >
              View My Work
              <FiArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/Resume/Khushal_Bhavsar_Resume.pdf"
              download="Khushal_Bhavsar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl border-2 border-gray-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <h3 className="text-sm font-semibold text-center uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-8">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + 0.04 * index }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                title={`Visit ${skill.name} official website`}
                aria-label={skill.name}
              >
                <img
                  src={skill.isCustom ? skill.icon : `https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                  {skill.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown className="w-5 h-5 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
}
