import type { Activity } from "./types";

export const virtualActivities: Activity[] = [
  {
    slug: "virtual-trivia-championship",
    title: "Virtual Trivia Championship",
    shortDescription:
      "A host-led, gameshow-style trivia night on Zoom or Teams with live leaderboards, buzzer rounds and questions customised to your company.",
    longDescription:
      "The Virtual Trivia Championship turns a video call into a proper gameshow. A live host runs teams through themed rounds — general knowledge, music, pictures, 'guess the colleague' and company-history questions — using breakout rooms for team huddles and a real-time leaderboard that keeps rivalry hot. Customised rounds about your own company (old office photos, product trivia, decoded jargon) reliably produce the loudest reactions.\n\nIt's the most frictionless remote format there is: no downloads beyond the meeting link, no prep for participants, and full participation from any location. For distributed teams across India — or across time zones — it's the fastest way to generate shared laughter on a random Thursday.",
    category: ["fun", "employee-engagement", "games"],
    format: "Virtual",
    objectives: ["Remote bonding", "Energy", "Inclusion across locations", "Fun"],
    idealFor: ["Distributed teams", "Hybrid offices", "Global teams with India hubs", "Monthly engagement calendars"],
    groupSize: "10–500 participants",
    duration: "60–90 minutes",
    energyLevel: "Medium",
    difficulty: "Easy",
    materials: ["Video conferencing (Zoom/Teams/Meet)", "Quiz platform with leaderboard", "Custom question bank"],
    location: ["Fully remote", "Hybrid (office + remote)"],
    howItWorks: [
      "Participants join the main call and are sorted into named teams with breakout rooms.",
      "The host runs 5–6 themed rounds; teams huddle in breakouts and submit answers on a live quiz platform.",
      "Picture rounds, audio rounds and speed-buzzer questions vary the pace.",
      "A customised company round — old photos, product trivia, acronym decoding — anchors the show.",
      "The leaderboard updates live and the final round carries double points for a dramatic finish.",
    ],
    outcomes: [
      "Remote and office employees compete on exactly equal footing.",
      "Team huddles in breakouts create real interaction, not passive viewing.",
      "Company-custom rounds strengthen organisational identity and lore.",
      "Zero logistics for participants — highest turnout of any remote format.",
    ],
    facilitatorNotes: [
      "Cap teams at six per breakout; larger teams create silent passengers.",
      "The company round takes real prep — collect material from HR a week early.",
      "Keep each round under ten minutes; virtual attention is a perishable resource.",
    ],
    variations: [
      "Music Bingo — songs replace questions, teams mark bingo cards.",
      "Family Feud Format — survey-based team duels using employees' own poll answers.",
      "Festival Editions — Diwali, Holi or year-end specials with themed rounds.",
    ],
    faqs: [
      {
        question: "How do you stop people from googling answers?",
        answer:
          "Speed windows (10–15 seconds), picture and audio rounds, and company-specific questions make search useless. The scoring rewards fast instinct over research.",
      },
      {
        question: "What platforms does it run on?",
        answer:
          "Zoom, Teams and Meet all work. The quiz layer runs in a browser tab, so no installations are needed.",
      },
      {
        question: "Can very large groups play?",
        answer:
          "Yes — with team captains and a co-host managing breakouts, championships run smoothly at 300–500 participants.",
      },
    ],
    relatedActivities: ["virtual-murder-mystery", "virtual-scavenger-hunt", "minute-to-win-it-showdown"],
  },
  {
    slug: "virtual-murder-mystery",
    title: "Virtual Murder Mystery",
    shortDescription:
      "Teams receive dossiers, interrogate suspects played by live actors or scripted characters, and race to name the killer before the final reveal.",
    longDescription:
      "The Virtual Murder Mystery is remote team building's answer to the escape room: a scripted crime, a cast of suspects, and evidence scattered across documents, images and video clips. Teams work in breakout rooms to build timelines, cross-reference alibis and spot contradictions, surfacing periodically to interrogate suspects — played by live facilitators in character — before submitting their accusation ahead of the dramatic reveal.\n\nThe format demands genuine collaboration: no single player can hold the whole evidence board in their head, so teams must divide analysis and synthesise findings — exactly the distributed sense-making that remote teams do (or fail to do) every day. It's the strongest deep-engagement format for remote analytical teams, with a theatrical payoff.",
    category: ["problem-solving", "fun", "communication", "games"],
    format: "Virtual",
    objectives: ["Collaborative analysis", "Information synthesis", "Remote communication", "Engagement"],
    idealFor: ["Remote analytical teams", "Engineering orgs", "Distributed leadership teams"],
    groupSize: "8–120 participants",
    duration: "75–120 minutes",
    energyLevel: "Medium",
    difficulty: "Challenging",
    materials: ["Video conferencing with breakouts", "Digital evidence dossiers", "Character cast or actor-facilitators"],
    location: ["Fully remote", "Hybrid"],
    howItWorks: [
      "The host sets the scene with a short video or dramatic narration of the crime.",
      "Teams in breakout rooms receive layered evidence packs — witness statements, photos, receipts, message logs.",
      "Interrogation windows open where teams question suspects live; good questions unlock extra evidence.",
      "Teams must divide the evidence, build a shared timeline and agree on means, motive and opportunity.",
      "Accusations are locked in before the reveal; the closest reasoning — not just the right name — wins.",
    ],
    outcomes: [
      "Distributed sense-making practised under time pressure — the core remote-work skill.",
      "Teams learn to divide analysis and synthesise, not duplicate effort.",
      "Question quality in interrogations mirrors requirements-gathering skills.",
      "High immersion produces real bonding, not checkbox participation.",
    ],
    facilitatorNotes: [
      "Evidence packs must be genuinely divisible — if one player can solve it alone, the design has failed.",
      "Scoring reasoning (not just the answer) prevents lucky guesses from deflating the debrief.",
      "In-character facilitators lift the format enormously; brief them on red herrings to defend.",
    ],
    variations: [
      "Corporate Espionage Edition — a stolen prototype replaces the murder for a lighter tone.",
      "Hybrid Mode — office pods and remote players share evidence across the divide, testing hybrid communication.",
      "Heist Planning — teams plan the perfect (fictional) heist instead, flipping the deduction into design.",
    ],
    faqs: [
      {
        question: "How is this different from a virtual escape room?",
        answer:
          "Escape rooms are puzzle-driven; the mystery is narrative- and inference-driven. Teams that find ciphers tedious often love cross-examining suspects and building timelines.",
      },
      {
        question: "What team size works in each breakout?",
        answer:
          "Five to seven. Enough to divide the evidence meaningfully, small enough that every voice shapes the accusation.",
      },
      {
        question: "Does it work across time zones?",
        answer:
          "Yes — sessions run at overlap-friendly hours, and the 90-minute standard length fits most global teams' shared windows.",
      },
    ],
    relatedActivities: ["escape-room-challenge", "virtual-trivia-championship", "virtual-scavenger-hunt"],
  },
  {
    slug: "virtual-scavenger-hunt",
    title: "Virtual Scavenger Hunt",
    shortDescription:
      "Rapid-fire missions send teammates racing through their own homes — find, photograph, perform — with points, laughter and a live leaderboard.",
    longDescription:
      "The Virtual Scavenger Hunt weaponises the one thing every remote employee has: their own home. The host fires missions in waves — find something older than you, build a tower of five kitchen items, recreate a famous painting with what's in reach, photograph your workspace's oddest object — and teams earn points for speed, creativity and comedy. Submissions flow into a shared gallery that becomes the event's highlight reel.\n\nIt's deliberately light, fast and personal. Colleagues glimpse each other's real lives — the guitar in the corner, the grandmother's clock, the chaotic bookshelf — which does more for remote-team familiarity than a quarter of status calls. Perfect as a short, high-energy anchor for distributed team weeks.",
    category: ["fun", "employee-engagement", "games"],
    format: "Virtual",
    objectives: ["Remote bonding", "Personal connection", "Energy", "Creativity"],
    idealFor: ["Remote-first teams", "New-hire cohorts", "Global team weeks", "Short engagement slots"],
    groupSize: "8–200 participants",
    duration: "45–60 minutes",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Video conferencing", "Submission gallery or chat thread", "Mission list", "Upbeat host"],
    location: ["Fully remote"],
    howItWorks: [
      "Teams are formed on the call; missions arrive in timed waves of escalating absurdity.",
      "Object missions (find it, show it), photo missions (recreate, arrange) and performance missions (team synchronised pose) alternate.",
      "Submissions post to a shared gallery; the host commentates the best entries live.",
      "Creativity multipliers reward funny over fast, keeping slower players competitive.",
      "The finale mission is always collective — one combined team artwork or pose across all screens.",
    ],
    outcomes: [
      "Colleagues see slices of each other's real lives — accelerated familiarity for remote teams.",
      "Short-burst missions produce near-total active participation.",
      "The submission gallery becomes shareable internal content afterwards.",
      "Lowest-prep format in the virtual catalogue — genuinely plug and play.",
    ],
    facilitatorNotes: [
      "Design missions to be inclusive of any home setup — never assume big houses, gardens or family presence.",
      "Alternate physical-dash missions with seated creative ones to manage energy.",
      "The host's live commentary is 60% of the event; pick your funniest facilitator.",
    ],
    variations: [
      "Office Edition — hybrid teams hunt through the office while remote players hunt at home.",
      "Themed Hunts — Diwali, monsoon or movie-themed mission lists.",
      "Photo Story Mode — missions chain into a narrative photo-essay per team.",
    ],
    faqs: [
      {
        question: "Do participants need to show their homes on camera?",
        answer:
          "Only what they choose to bring to the camera. Missions ask for objects and poses, not room tours, and privacy-friendly alternatives exist for every mission.",
      },
      {
        question: "How long should it run?",
        answer:
          "Forty-five minutes is the sweet spot — long enough for three mission waves and a finale, short enough that energy never dips.",
      },
      {
        question: "Is it suitable for senior teams?",
        answer:
          "Yes, with a curated mission list. Leadership groups tend to get surprisingly competitive about the recreate-a-painting mission.",
      },
    ],
    relatedActivities: ["corporate-treasure-hunt", "virtual-trivia-championship", "virtual-murder-mystery"],
  },
];
