"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Activity } from "@/data/activities";
import { ActivityCard } from "./ActivityCard";

const formats = ["All", "Indoor", "Outdoor", "Virtual"] as const;
const energies = ["Any energy", "Low", "Medium", "High"] as const;
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
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [format, setFormat] = useState<string>("All");
  const [energy, setEnergy] = useState<string>("Any energy");
  const [objective, setObjective] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return activities.filter((a) => {
      if (format !== "All" && a.format !== format) return false;
      if (energy !== "Any energy" && a.energyLevel !== energy) return false;
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

  return (
    <div>
      {/* Format chips */}
      <div className="flex flex-wrap items-center gap-2">
        {formats.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            className={`chip ${format === f ? "chip-active" : ""}`}
            aria-pressed={format === f}
          >
            {f === "All" ? "All formats" : f}
          </button>
        ))}
        <span className="mx-2 hidden h-6 w-px bg-navy-900/10 sm:block" />
        {energies.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setEnergy(e)}
            className={`chip ${energy === e ? "chip-active" : ""}`}
            aria-pressed={energy === e}
          >
            {e}
          </button>
        ))}
      </div>
      {/* Goal chips + search */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {objectives.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => setObjective(o.value)}
            className={`chip ${objective === o.value ? "chip-active" : ""}`}
            aria-pressed={objective === o.value}
          >
            {o.label}
          </button>
        ))}
        <input
          type="search"
          placeholder="Search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-auto w-full max-w-[220px] rounded-xl border border-navy-900/15 bg-mist px-4 py-2 text-sm font-medium focus:border-electric-500 focus:bg-white focus:outline-none"
          aria-label="Search activities"
        />
      </div>

      <p className="mt-5 text-sm font-semibold text-navy-800/70">
        {filtered.length} of {activities.length} activities
      </p>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ActivityCard key={a.slug} activity={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 rounded-2xl bg-mist p-8 text-center text-sm text-navy-800/80">
          No activities match those filters — try clearing one, or{" "}
          <a href="/contact-us" className="font-bold text-electric-600">
            tell us what you need
          </a>{" "}
          and we&apos;ll recommend something.
        </p>
      )}
    </div>
  );
}
