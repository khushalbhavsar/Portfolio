import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo/Icon */}
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-full border-4 border-blue-200 dark:border-blue-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 w-16 h-16 rounded-full border-4 border-transparent border-t-indigo-500 dark:border-t-indigo-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              KB
            </span>
          </motion.div>
        </div>

        {/* Name & Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Khushal Bhavsar
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            AWS Certified Solutions Architect | DevOps & Cloud Engineer
          </motion.p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-lg font-medium text-slate-600 dark:text-slate-300">
            Loading
          </span>
          <motion.span
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-48 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
