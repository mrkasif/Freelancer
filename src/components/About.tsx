"use client";

import { motion } from "framer-motion";
import GithubIcon from "@/components/ui/GithubIcon";
import TechStack from "@/components/TechStack";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A developer who ships working products"
          align="left"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-400"
          >
            <p>
              I&apos;m an IT student and web developer focused on building{" "}
              <span className="text-white">clean, useful software</span> — web
              applications, mobile apps, and the occasional game.
            </p>
            <p>
              My work spans JavaScript and Python projects: web apps, developer tools,
              e-commerce demos, and more. I care about{" "}
              <span className="text-white">working features</span> over hype, and I
              continuously learn through hands-on building and competitive programming.
            </p>
            <p>
              I&apos;m currently sharpening my full-stack skills with React.js and
              Next.js, and I&apos;m{" "}
              <span className="text-white">open to collaboration</span> on web, mobile,
              and game development projects.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <GithubIcon className="h-4 w-4" />
                Explore my GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <TechStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
}