import Link from "next/link";
import type { Activity } from "@/data/activities";
import { ActivityMedia } from "./ActivityMedia";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      href={`/team-building-activities/${activity.slug}`}
      className="card group flex h-full flex-col overflow-hidden"
    >
      <div className="relative">
        <ActivityMedia activity={activity} className="aspect-[4/3] w-full" />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-900 shadow-sm">
          {activity.format}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-navy-950/70 px-2 py-1 text-[11px] font-bold text-white backdrop-blur">
          {activity.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-navy-800/60">
          {activity.objectives.slice(0, 2).join(" · ")}
        </p>
        <h3 className="mt-1.5 text-[17px] font-extrabold leading-snug text-navy-900 transition group-hover:text-electric-600">
          {activity.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-navy-800/80">
          {activity.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-navy-900/5 pt-3">
          <span className="text-xs font-semibold text-navy-800/70">
            {activity.groupSize}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-sunrise-600">
            ⚡ {activity.energyLevel} energy
          </span>
        </div>
      </div>
    </Link>
  );
}
