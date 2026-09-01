"use client";

import { useState } from "react";
import { Code2, Layout, Server, Smartphone, Gamepad2, Wrench, MousePointerClick } from "lucide-react";
import type { ComponentType } from "react";
import { languageGroups } from "@/data/technologies";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code2,
  Layout,
  Server,
  Smartphone,
  Gamepad2,
  Wrench,
};

export function emitTechFilter(name: string) {
  window.dispatchEvent(new CustomEvent("tech-filter", { detail: name }));
}

export default function TechStack() {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(name: string) {
    if (selected === name) {
      setSelected(null);
      window.dispatchEvent(new CustomEvent("tech-filter", { detail: null }));
      return;
    }
    setSelected(name);
    emitTechFilter(name);
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Technology Stack
        </h3>
        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
          <MousePointerClick className="h-3.5 w-3.5" />
          Click a technology to filter projects
        </span>
      </div>
      <div className="space-y-6">
        {languageGroups.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <div key={group.id}>
              <div className="mb-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-lime-400" />
                <span className="text-sm font-medium text-zinc-300">{group.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.name)}
                    className={cn(
                      "rounded-md border px-2.5 py-1 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400",
                      selected === item.name
                        ? "border-lime-400 bg-lime-400/15 text-lime-300"
                        : "border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                    )}
                    aria-pressed={selected === item.name}
                  >
                    {item.name}
                    {item.repos.length > 0 && (
                      <span className="ml-1.5 text-zinc-600">({item.repos.length})</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}