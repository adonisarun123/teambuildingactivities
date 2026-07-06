"use client";

import { useMemo, useState } from "react";
import type { Activity } from "@/data/activities";
import { ActivityCard } from "./ActivityCard";

const formats = ["All", "Indoor", "Outdoor", "Virtual"] as const;
const energies = ["All", "Low", "Medium", "High"] as const;
const objectives = [
  { value: "All", label: "All goals" },
  { value: "fun", label: "Fun & energy" },
  { value: "leadership", label: "Leadership" },
  { value: "communication", label: "Communication" },
  { value: "problem-solving", label: "Problem solving" },
  { value: "employee-engagement", label: "Engagement" },
  { value: "corporate-outing", label: "Outings" },
] as const;

export function ActivityExplorer({ activities }: { activities: Activity[] }) {
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState<string>("All");
  const [energy, setEnergy] = useState<string>("All");
  const [objective, setObjective] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activities.filter((a) => {
      if (format !== "All" && a.format !== format) return false;
      if (energy !== "All" && a.energyLevel !== energy) return false;
      if (objective !== "All" && !a.category.includes(objective as Activity["category"][number]))
        return false;
      if (
        q &&
        !`${a.title} ${a.shortDescription} ${a.objectives.join(" ")}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [activities, query, format, energy, objective]);

  const selectClass =
    "rounded-full border border-navy-900/15 bg-white px-4 py-2 text-sm font-medium text-navy-900 focus:border-electric-500 focus:outline-none";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Search activities…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-xs rounded-full border border-navy-900/15 px-4 py-2 text-sm focus:border-electric-500 focus:outline-none"
          aria-label="Search activities"
        />
        <select value={format} onChange={(e) => setFormat(e.target.value)} className={selectClass} aria-label="Format">
          {formats.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className={selectClass} aria-label="Energy level">
          {energies.map((e) => (
            <option key={e} value={e}>
              {e === "All" ? "Any energy" : `${e} energy`}
            </option>
          ))}
        </select>
        <select value={objective} onChange={(e) => setObjective(e.target.value)} className={selectClass} aria-label="Objective">
          {objectives.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="text-sm text-navy-800/60">
          {filtered.length} of {activities.length} activities
        </span>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ActivityCard key={a.slug} activity={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 rounded-xl bg-mist p-8 text-center text-sm text-navy-800/70">
          No activities match those filters — try clearing one, or{" "}
          <a href="#enquiry" className="font-semibold text-electric-600">
            tell us what you need
          </a>{" "}
          and we&apos;ll recommend something.
        </p>
      )}
    </div>
  );
}
