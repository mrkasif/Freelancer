"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft, GitFork, Layout, FileText, Mail, Rocket, X } from "lucide-react";
import type { ComponentType } from "react";

interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  icon: ComponentType<{ className?: string }>;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => {
          if (!v) {
            setQuery("");
            setActive(0);
            requestAnimationFrame(() => inputRef.current?.focus());
          }
          return !v;
        });
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "view-work",
        label: "View Projects",
        hint: "Featured Work",
        icon: Layout,
        action: () => scrollToId("work"),
      },
      {
        id: "services",
        label: "My Services",
        hint: "What I can build",
        icon: FileText,
        action: () => scrollToId("services"),
      },
      {
        id: "start-project",
        label: "Start a Project",
        hint: "Project builder",
        icon: Rocket,
        action: () => document.getElementById("start-project")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "github",
        label: "GitHub",
        hint: "github.com/mrkasif",
        icon: GitFork,
        action: () => window.open("https://github.com/mrkasif", "_blank", "noopener,noreferrer"),
      },
      {
        id: "contact",
        label: "Contact Me",
        hint: "Let's talk",
        icon: Mail,
        action: () => scrollToId("contact"),
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query, commands]);

  const effectiveActive = filtered.length === 0 ? -1 : Math.min(active, filtered.length - 1);

  function run(item: CommandItem) {
    setOpen(false);
    item.action();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm p-4 pt-[15vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 px-4">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, filtered.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && filtered[effectiveActive]) {
                    run(filtered[effectiveActive]);
                  }
                }}
                placeholder="Search or jump to..."
                className="w-full bg-transparent py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-list"
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="Close command palette"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div id="command-list" role="listbox" className="p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-zinc-500">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    role="option"
                    aria-selected={i === effectiveActive}
                    onClick={() => run(item)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors focus-visible:outline-none ${
                      i === effectiveActive ? "bg-white/5" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-lime-400" />
                    <span className="flex-1 text-sm text-zinc-200">{item.label}</span>
                    {item.hint && (
                      <span className="hidden text-xs text-zinc-500 sm:inline">{item.hint}</span>
                    )}
                    {i === effectiveActive && (
                      <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-zinc-800 px-4 py-2.5 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-zinc-700 px-1 py-0.5 text-[10px]">↑</kbd>
                <kbd className="rounded border border-zinc-700 px-1 py-0.5 text-[10px]">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-zinc-700 px-1 py-0.5 text-[10px]">↵</kbd>
                select
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-zinc-700 px-1 py-0.5 text-[10px]">esc</kbd>
                close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}