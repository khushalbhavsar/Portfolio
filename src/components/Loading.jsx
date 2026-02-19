import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Loading({
  name = "Khushal Bhavsar",
  initials = "KB",
  title = "AWS Certified Solutions Architect | DevOps & Cloud Engineer",
}) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const spinTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1, repeat: Infinity, ease: "linear" };

  const spinTransitionSlow = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1.5, repeat: Infinity, ease: "linear" };

  const bounceTransition = (delay) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, repeat: Infinity, delay, ease: "easeInOut" };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f1e]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${name}'s portfolio`}
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <span className="sr-only">Loading portfolio, please wait...</span>

      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Animated Logo/Icon */}
        <div className="relative">
          <motion.div
            className="w-24 h-24 rounded-full border-2 border-blue-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          />
          <motion.div
            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500/50"
            animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
            transition={spinTransition}
          />
          <motion.div
            className="absolute inset-2 w-20 h-20 rounded-full border-2 border-transparent border-t-violet-500 border-l-violet-500/50"
            animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
            transition={spinTransitionSlow}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.3,
              duration: prefersReducedMotion ? 0 : 0.5,
              type: "spring",
            }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              {initials}
            </span>
          </motion.div>
        </div>

        {/* Name & Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.3, duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.7, duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            {title}
          </motion.p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <span className="text-lg font-medium text-gray-400">Loading</span>
          <motion.span
            className="flex gap-1 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-blue-500"
                animate={{ y: prefersReducedMotion ? 0 : [0, -8, 0] }}
                transition={bounceTransition(i * 0.15)}
              />
            ))}
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-56 h-1 bg-white/5 rounded-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full relative overflow-hidden"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            )}
          </motion.div>
        </motion.div>

        <motion.span
          className="text-xs text-gray-500 -mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
        >
          {Math.round(Math.min(progress, 100))}%
        </motion.span>
      </div>
    </motion.div>
  );
}
