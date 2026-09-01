"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Clock, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import GithubIcon from "@/components/ui/GithubIcon";
import { stats } from "@/data/stats";
import { availability } from "@/data/availability";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const codeLines = [
  { highlight: false, text: "const developer = {" },
  { highlight: false, text: "  name: 'Kashif'," },
  { highlight: false, text: "  focus: ['Web', 'Full-Stack', 'Tools']," },
  { highlight: true, text: "  status: 'AVAILABLE'," },
  { highlight: false, text: "};" },
];

function CodeWindow() {
  return (
    <div className="hidden lg:block relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden"
      >
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs font-mono text-zinc-500">developer.ts</span>
        </div>
        <div className="p-5 font-mono text-sm leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="whitespace-pre"
            >
              <span className="text-lime-400/60 mr-2">{i + 1}</span>
              <span className={line.highlight ? "text-lime-400" : "text-zinc-300"}>
                {line.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-5 rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-zinc-500">Availability</p>
        <p className="text-sm font-medium text-lime-400 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
          {availability.slots} slots open
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-8 rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-zinc-500">Stack</p>
        <p className="text-sm font-medium text-white">JavaScript · Python · Next.js</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15]" aria-hidden="true" />
      <div
        className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              {availability.label}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tight text-white"
          >
            I build digital products that{" "}
            <span className="text-lime-400">actually work</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            Full-stack developer focused on{" "}
            <span className="text-zinc-200">modern web applications</span>, useful tools,
            and clean user experiences.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#start-project" size="lg">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#work" variant="outline" size="lg">
              View My Work
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-6">
            <a
              href="https://github.com/mrkasif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-sm"
            >
              <GithubIcon className="h-4 w-4" />
              View GitHub →
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex w-full max-w-md items-center divide-x divide-zinc-800 border-y border-zinc-800"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 px-2 py-4 text-center sm:px-4">
                <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs md:text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-lime-400" />
              Response time: {availability.responseTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarCheck className="h-3.5 w-3.5 text-lime-400" />
              {availability.timezone}
            </span>
          </motion.div>
        </motion.div>

        <CodeWindow />
      </div>
    </section>
  );
}