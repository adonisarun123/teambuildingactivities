import type { Activity, ActivityCategory } from "./types";
import { outdoorActivities } from "./activities-outdoor";
import { indoorActivities } from "./activities-indoor";
import { virtualActivities } from "./activities-virtual";

export type { Activity, ActivityCategory } from "./types";

export const activities: Activity[] = [
  ...outdoorActivities,
  ...indoorActivities,
  ...virtualActivities,
];

export function getActivity(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}

export function getActivitiesByFormat(format: Activity["format"]): Activity[] {
  return activities.filter((a) => a.format === format);
}

export function getActivitiesByCategory(category: ActivityCategory): Activity[] {
  return activities.filter((a) => a.category.includes(category));
}

export function getRelatedActivities(activity: Activity): Activity[] {
  return activity.relatedActivities
    .map((slug) => getActivity(slug))
    .filter((a): a is Activity => Boolean(a));
}
