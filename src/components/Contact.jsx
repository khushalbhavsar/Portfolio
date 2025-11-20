import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-indigo-300">CONTACT</h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">Interested in working together? Fill out the form or reach me directly.</p>

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
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
            placeholder="Your name" 
          />
          <input 
            name="email" 
            type="email"
            required
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
            placeholder="Your email" 
          />
          <input 
            name="title" 
            type="text"
            required
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
            placeholder="Subject" 
          />
          <textarea 
            name="message" 
            required
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border border-blue-200 dark:border-indigo-700 bg-transparent focus:border-blue-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-indigo-900 outline-none" 
            rows={5} 
            placeholder="Message"
          ></textarea>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <motion.button 
              type="submit"
              className="text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-0 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
            <motion.a 
              href="mailto:khushalbhavsar41@gmail.com" 
              className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg font-medium border-2 border-blue-500 dark:border-indigo-500 bg-transparent hover:bg-blue-500 hover:dark:bg-indigo-500 text-blue-600 dark:text-indigo-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
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
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-indigo-800 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-indigo-500/40 hover:border-blue-400 dark:hover:border-indigo-500 transition-all duration-300"
      >
        <h3 className="text-sm sm:text-base font-medium text-blue-900 dark:text-indigo-300">WHERE TO FIND ME</h3>
        <ul className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
          <li>GitHub: <a href="https://github.com/khushalbhavsar" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">github.com/khushalbhavsar</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/khushal-bhavsar-/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">linkedin.com/in/khushalbhavsar</a></li>
          <li>Instagram: <a href="https://www.instagram.com/khushal_41?igsh=MXViN3Ftd3R1ZDh2Ng==" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">instagram.com/khushalbhavsar</a></li>
          <li>Email: <a href="mailto:khushalbhavsar41@gmail.com" className="hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">khushalbhavsar41@gmail.com</a></li>
        </ul>

        <div className="mt-4 sm:mt-6">
          <h4 className="text-xs sm:text-sm font-medium text-blue-900 dark:text-indigo-300">OPEN TO</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Full-time</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Internship</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Remote</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-indigo-300">Contract</span>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
