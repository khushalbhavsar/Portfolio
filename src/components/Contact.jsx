import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/khushalbhavsar", label: "GitHub", username: "github.com/khushalbhavsar" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/khushal-bhavsar-/", label: "LinkedIn", username: "linkedin.com/in/khushalbhavsar" },
  { icon: FiInstagram, href: "https://www.instagram.com/khushal_41?igsh=MXViN3Ftd3R1ZDh2Ng==", label: "Instagram", username: "instagram.com/khushalbhavsar" },
  { icon: FiMail, href: "mailto:khushalbhavsar41@gmail.com", label: "Email", username: "khushalbhavsar41@gmail.com" },
];

const availabilities = ["Full-time", "Internship", "Remote", "Contract"];

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nyf1j2b";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_6xdhz3k";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "0ocdz2Ex4dtsvZAOU";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setFormStatus({
          type: "error",
          message: "Failed to send message. Please try again or email directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        // Auto-clear success message after 5 seconds
        setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
      });
  };

  const inputClasses =
    "w-full px-4 py-3 text-sm rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300";

  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Let's build something great together</p>
        <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        {/* Left: Info & Social */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Interested in working together? Fill out the form or reach me directly through any of the platforms below.
            </p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/30 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                  aria-label={social.label}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500">{social.label}</p>
                    <p className="text-sm text-slate-900 dark:text-white">{social.username}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Open to</h4>
              <div className="flex flex-wrap gap-2">
                {availabilities.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8">
            {/* Toast */}
            <AnimatePresence>
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
                    formStatus.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <FiCheck className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                    aria-label="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="What's this about?"
                  aria-label="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={`${inputClasses} resize-none`}
                  rows={5}
                  placeholder="Tell me about your project..."
                  aria-label="Your message"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.05, y: -1 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <motion.a
                  href="mailto:khushalbhavsar41@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-xl border-2 border-gray-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send email directly"
                >
                  <FiMail className="w-4 h-4" />
                  Email Directly
                </motion.a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
