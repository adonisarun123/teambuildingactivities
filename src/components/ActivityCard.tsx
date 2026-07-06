import Link from "next/link";
import type { Activity } from "@/data/activities";

const formatColors: Record<Activity["format"], string> = {
  Indoor: "bg-electric-50 text-electric-700",
  Outdoor: "bg-emerald-50 text-emerald-700",
  Virtual: "bg-violet-50 text-violet-700",
  Hybrid: "bg-sunrise-50 text-sunrise-600",
};

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      href={`/team-building-activities/${activity.slug}`}
      className="card group flex h-full flex-col p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${formatColors[activity.format]}`}>
          {activity.format}
        </span>
        <span className="tag-warm">{activity.energyLevel} energy</span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-navy-900 transition group-hover:text-electric-600">
        {activity.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-navy-800/75">
        {activity.shortDescription}
      </p>
      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-navy-900/5 pt-3 text-xs text-navy-800/70">
        <div className="flex gap-1">
          <dt className="font-semibold">Group:</dt>
          <dd>{activity.groupSize}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-semibold">Duration:</dt>
          <dd>{activity.duration}</dd>
        </div>
      </dl>
    </Link>
  );
}
