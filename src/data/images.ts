// Unsplash placeholder imagery (Unsplash License — free for commercial use,
// no attribution required). Replace with real event photography when
// available: swap URLs here and the whole site updates.
//
// Every consumer renders these through <ActivityMedia>, which falls back to
// a branded gradient cover if a URL ever fails to load.

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const activityImages: Record<string, string> = {
  // Outdoor
  "corporate-treasure-hunt": u("photo-1551632811-561732d1e306"),
  "raft-building-challenge": u("photo-1544551763-46a013bb70d5"),
  "human-foosball": u("photo-1575361204480-aadea25e6e68"),
  "box-cricket-league": u("photo-1531415074968-036ba1b575da"),
  "corporate-sports-day": u("photo-1461896836934-ffe607ba8211"),
  "blindfold-minefield": u("photo-1511632765486-a01980e01a18"),
  "bridge-building-challenge": u("photo-1504384308090-c894fdcc538d"),
  // Indoor
  "drum-circle": u("photo-1533174072545-7a4b6ad7a6c3"),
  "escape-room-challenge": u("photo-1553481187-be93c21490a9"),
  "minute-to-win-it-showdown": u("photo-1528605248644-14dd04022da1"),
  "chain-reaction-challenge": u("photo-1517420704952-d9f39e95b43e"),
  "movie-making-challenge": u("photo-1485846234645-a62644f84728"),
  "corporate-masterchef-cookoff": u("photo-1556910103-1c02745aae4d"),
  "key-punch": u("photo-1521737711867-e3b97375f902"),
  "tower-of-innovation": u("photo-1522202176988-66273c2fd55f"),
  "pipeline-challenge": u("photo-1552664730-d307ca884978"),
  "improv-theatre-workshop": u("photo-1470229722913-7c0e2dbbafd3"),
  // Virtual
  "virtual-trivia-championship": u("photo-1543269865-cbf427effbad"),
  "virtual-murder-mystery": u("photo-1519389950473-47ba0277781c"),
  "virtual-scavenger-hunt": u("photo-1587825140708-dfaf72ae4b04"),
  // Cities
  "team-building-activities-bangalore": u("photo-1596176530529-78163a4f7af2"),
  "team-building-activities-hyderabad": u("photo-1572445271230-a78b5944a659"),
  "team-building-activities-chennai": u("photo-1582510003544-4d00b7f74220"),
  "team-building-activities-mumbai": u("photo-1529253355930-ddbe423a2ac7"),
  "team-building-activities-pune": u("photo-1512343879784-a960bf40e7f2"),
  "team-building-activities-delhi-ncr": u("photo-1587474260584-136574528ed5"),
  "team-building-activities-gurgaon": u("photo-1449824913935-59a10b8d2000"),
  "team-building-activities-noida": u("photo-1486406146926-c627a92ad1ab"),
};

// Homepage hero collage
export const heroImages: { src: string; alt: string }[] = [
  { src: u("photo-1522071820081-009f0129c71c", 700), alt: "Team collaborating during a facilitated activity" },
  { src: u("photo-1529156069898-49953e39b3ac", 700), alt: "Colleagues laughing together outdoors" },
  { src: u("photo-1600880292203-757bb62b4baf", 700), alt: "Facilitator leading a team workshop" },
  { src: u("photo-1542744173-8e7e53415bb0", 700), alt: "Team huddle during a corporate program" },
];

export function getActivityImage(slug: string): string | undefined {
  return activityImages[slug];
}
