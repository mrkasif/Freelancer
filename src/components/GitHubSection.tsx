"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";

export default function GitHubSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-14 text-center"
        >
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl"
            aria-hidden="true"
          />
          <Terminal className="mx-auto h-10 w-10 text-lime-400" />
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Code speaks <span className="text-lime-400">louder</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 md:text-lg">
            Explore my projects, experiments and open-source work on GitHub.
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/mrkasif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-zinc-500 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            >
              <GithubIcon className="h-5 w-5" />
              Visit GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
