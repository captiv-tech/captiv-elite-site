"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-10 md:px-20">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold max-w-4xl">
        We engineer how institutions perform.
      </motion.h1>
      <p className="mt-6 text-gray-400 max-w-xl">
        Systems. Processes. Intelligence. Engineered for performance.
      </p>
    </section>
  );
}