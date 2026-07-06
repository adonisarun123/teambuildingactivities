import Link from "next/link";
import type { Activity } from "@/data/activities";
import { ActivityMedia } from "./ActivityMedia";

// Airbnb-style listing card: borderless, photo-led, minimal text stack.
export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      href={`/team-building-activities/${activity.slug}`}
      className="group flex h-full flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card transition duration-200 group-hover:shadow-lift">
        <ActivityMedia activity={activity} className="aspect-[4/3] w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-navy-900 shadow-sm">
          {activity.format}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-bold leading-snug text-navy-900">
            {activity.title}
          </h3>
          <span className="mt-0.5 shrink-0 whitespace-nowrap text-xs font-bold text-sunrise-600">
            ⚡ {activity.energyLevel}
          </span>
        </div>
        <p className="mt-1 text-sm text-navy-800/70">
          {activity.groupSize} · {activity.duration}
        </p>
        <p className="mt-1 text-sm text-navy-800/70">
          {activity.objectives.slice(0, 2).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
