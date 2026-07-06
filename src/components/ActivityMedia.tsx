import type { Activity } from "@/data/activities";

// Visual cover for activity cards and banners.
// Stands in for photography until real event photos are available — drop an
// <Image> into this component later and every card upgrades at once.

const emojiMap: Record<string, string> = {
  "corporate-treasure-hunt": "🗺️",
  "raft-building-challenge": "🛶",
  "human-foosball": "⚽",
  "box-cricket-league": "🏏",
  "corporate-sports-day": "🏅",
  "blindfold-minefield": "🧭",
  "bridge-building-challenge": "🌉",
  "drum-circle": "🥁",
  "escape-room-challenge": "🔐",
  "minute-to-win-it-showdown": "⏱️",
  "chain-reaction-challenge": "⚙️",
  "movie-making-challenge": "🎬",
  "corporate-masterchef-cookoff": "🍳",
  "key-punch": "🎯",
  "tower-of-innovation": "🗼",
  "pipeline-challenge": "🎢",
  "improv-theatre-workshop": "🎭",
  "virtual-trivia-championship": "🧠",
  "virtual-murder-mystery": "🕵️",
  "virtual-scavenger-hunt": "🏠",
  // City covers
  "team-building-activities-bangalore": "🌳",
  "team-building-activities-hyderabad": "🏰",
  "team-building-activities-chennai": "🏖️",
  "team-building-activities-mumbai": "🌊",
  "team-building-activities-pune": "⛰️",
  "team-building-activities-delhi-ncr": "🏛️",
  "team-building-activities-gurgaon": "🏙️",
  "team-building-activities-noida": "🎡",
};

const gradients = [
  "from-violet-500 via-purple-500 to-fuchsia-500",
  "from-sky-500 via-blue-500 to-indigo-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-orange-400 via-amber-500 to-yellow-500",
  "from-rose-500 via-pink-500 to-fuchsia-500",
  "from-indigo-500 via-violet-500 to-purple-500",
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function ActivityMedia({
  activity,
  className = "",
  emojiClassName = "text-5xl",
}: {
  activity: Pick<Activity, "slug" | "title" | "format">;
  className?: string;
  emojiClassName?: string;
}) {
  const gradient = gradients[hash(activity.slug) % gradients.length];
  const emoji = emojiMap[activity.slug] ?? "🎪";
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden
    >
      {/* soft texture */}
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_45%),radial-gradient(circle_at_80%_75%,white_0,transparent_40%)]" />
      <div className="absolute -bottom-6 -right-4 select-none text-[110px] leading-none opacity-25 blur-[1px]">
        {emoji}
      </div>
      <div className={`relative flex h-full items-center justify-center select-none drop-shadow ${emojiClassName}`}>
        {emoji}
      </div>
    </div>
  );
}
