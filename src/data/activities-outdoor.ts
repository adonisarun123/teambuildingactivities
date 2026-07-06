import type { Activity } from "./types";

export const outdoorActivities: Activity[] = [
  {
    slug: "corporate-treasure-hunt",
    title: "Corporate Treasure Hunt",
    shortDescription:
      "Teams race across a resort, campus or city zone solving clues, completing checkpoint challenges and collecting points before the clock runs out.",
    longDescription:
      "The Corporate Treasure Hunt is the workhorse of Indian offsites for a reason: it gets an entire company moving, thinking and laughing within the first ten minutes. Teams of five to eight receive a clue booklet, a route map and a scoring sheet, then set off to decode riddles, find hidden markers and complete short physical or creative tasks at each checkpoint. The clues can be customised around your company's values, product names or inside jokes, which turns a generic game into something people talk about for months.\n\nBecause every team must divide roles — navigator, puzzle-solver, runner, photographer — the hunt naturally surfaces how people organise under time pressure. Quiet analysts often become the heroes at cipher checkpoints while extroverts shine at performance tasks. The final scoring assembly, complete with photo evidence on a big screen, is a celebration in itself.",
    category: ["fun", "problem-solving", "corporate-outing", "games"],
    format: "Outdoor",
    objectives: ["Collaboration", "Problem solving", "Time management", "Cross-team bonding"],
    idealFor: ["Company offsites", "Annual days", "Large mixed-department groups", "New team integration"],
    groupSize: "20–500 participants",
    duration: "2–3 hours",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Clue booklets", "Route maps", "Checkpoint props", "Scoring sheets", "Smartphones for photo tasks"],
    location: ["Resorts", "Office campuses", "Parks", "City heritage zones"],
    howItWorks: [
      "Participants are split into balanced teams of 5–8 and given a team identity — name, flag or bandana.",
      "Each team receives the first clue and a sealed route pack; routes are staggered so teams don't bunch up.",
      "Teams decode clues to locate checkpoints spread across the venue.",
      "At every checkpoint a marshal runs a short challenge — a puzzle, a photo mission or a quick physical task — before releasing the next clue.",
      "Bonus points reward creativity, teamwork behaviours and speed.",
      "All teams converge for a finale where scores are tallied, photos are screened and winners are crowned.",
    ],
    outcomes: [
      "Teams practise dividing roles and delegating under time pressure.",
      "Colleagues from different departments interact naturally, breaking silos.",
      "Problem-solving styles become visible in a low-stakes setting.",
      "High shared-memory value — the photos alone fuel weeks of engagement.",
    ],
    facilitatorNotes: [
      "Stagger routes so no two teams hit the same checkpoint simultaneously.",
      "Keep at least one checkpoint accessible for participants with limited mobility.",
      "Customise 20–30% of clues around the client's business for the biggest reaction.",
      "Carry backup clues — outdoor markers can be disturbed by weather or passers-by.",
    ],
    variations: [
      "City Heritage Hunt — run through a historic district with local-culture clues.",
      "App-based Hunt — GPS-triggered clues and live leaderboards for tech-forward teams.",
      "Night Hunt — torches and glow markers for resort evenings.",
    ],
    faqs: [
      {
        question: "How large a group can a treasure hunt handle?",
        answer:
          "Comfortably up to 500 with staggered routes and enough marshals. Beyond that we recommend splitting into two waves.",
      },
      {
        question: "What if it rains?",
        answer:
          "We build an indoor fallback route through corridors and common areas, or swap to an indoor clue-hunt format on the day.",
      },
      {
        question: "Is it physically demanding?",
        answer:
          "It's walking-based, not running-based. Teams set their own pace, and checkpoints are designed so every fitness level can contribute.",
      },
    ],
    relatedActivities: ["virtual-scavenger-hunt", "corporate-sports-day", "escape-room-challenge"],
  },
  {
    slug: "raft-building-challenge",
    title: "Raft Building Challenge",
    shortDescription:
      "Teams design, lash together and actually sail a raft built from barrels, bamboo and rope — then race it across a pool or lake.",
    longDescription:
      "Few activities test planning, engineering and trust like building a raft your whole team must then float on. Each team gets identical materials — barrels, bamboo poles, rope, planks — and a fixed build window. The catch is that the design decisions made on land are only validated on water, in front of everyone. Teams that skipped testing their knots find out fast.\n\nThe raft build compresses a full project lifecycle into ninety minutes: requirements, design, resourcing, build, test, launch. Debriefed well, it becomes a vivid metaphor for how the team handles real delivery pressure — who over-engineers, who ships untested, who listens to the quiet person who actually knows knots.",
    category: ["leadership", "problem-solving", "corporate-outing"],
    format: "Outdoor",
    objectives: ["Planning and execution", "Leadership", "Trust", "Resource management"],
    idealFor: ["Leadership offsites", "Project teams", "Engineering teams", "Resort offsites"],
    groupSize: "10–100 participants",
    duration: "2.5–3.5 hours",
    energyLevel: "High",
    difficulty: "Challenging",
    materials: ["Sealed barrels", "Bamboo poles", "Ropes", "Planks", "Life jackets", "Safety kayak and lifeguard"],
    location: ["Resorts with pools or lakes", "Adventure campsites", "Waterfront venues"],
    howItWorks: [
      "Teams of 8–12 receive identical material kits and a design brief with safety rules.",
      "A 20-minute planning phase forces teams to sketch and assign roles before touching materials.",
      "Teams build their rafts within a 60–75 minute window; facilitators check lashings for safety.",
      "Each raft is launched with a crew aboard for a paddled race or relay course.",
      "Capsizes and rebuilds are part of the learning — safety crew is always on water.",
      "A structured debrief maps build decisions to real workplace delivery behaviours.",
    ],
    outcomes: [
      "Teams experience the full plan–build–test–launch cycle with immediate feedback.",
      "Leadership and delegation patterns become unmistakably visible.",
      "Builds genuine trust — literally floating on each other's workmanship.",
      "Strong debrief material for project management and quality conversations.",
    ],
    facilitatorNotes: [
      "Non-negotiable: certified lifeguard on duty and life jackets for every person on water.",
      "Ask about swimming comfort during registration, never publicly on the day.",
      "Enforce the planning phase — teams that rush to build provide the best debrief lessons, but check safety twice.",
      "Have a rope-lashing demo ready; most corporate teams have never lashed bamboo.",
    ],
    variations: [
      "Cardboard Boat Challenge — pool-friendly, faster version with cardboard and duct tape.",
      "Design-Only Sprint — teams trade builds and sail a rival's raft, testing documentation quality.",
      "Regatta Format — heats, semis and a grand final for large groups.",
    ],
    faqs: [
      {
        question: "Do participants need to know swimming?",
        answer:
          "No. Life jackets are mandatory, water depth is controlled, and non-swimmers can take shore roles like design lead or quality checker if they prefer.",
      },
      {
        question: "How safe is this activity?",
        answer:
          "Raft builds run under strict protocols: lifeguards, jacket checks, lashing inspections before launch and a rescue kayak on the water throughout.",
      },
      {
        question: "What venues work for this?",
        answer:
          "Any resort pool at least 1.2m deep, or a calm lake with permitted access. We shortlist venues based on your city.",
      },
    ],
    relatedActivities: ["bridge-building-challenge", "chain-reaction-challenge", "corporate-treasure-hunt"],
  },
  {
    slug: "human-foosball",
    title: "Human Foosball",
    shortDescription:
      "A life-size foosball arena where players hold rods and can only move sideways — football with forced coordination and guaranteed laughter.",
    longDescription:
      "Human Foosball drops your team inside a giant inflatable or bamboo-framed foosball table. Players grip horizontal rods in rows — defence, midfield, attack — and can only slide laterally along their rod. Nobody can chase the ball; you can only play your position and trust your row-mates, which is exactly what makes it such a sharp coordination exercise wrapped in a ridiculous amount of fun.\n\nBecause movement is constrained, the usual sports-day dynamic where two athletic colleagues dominate simply cannot happen. Goals only come from passing between rows, calling plays loudly and moving in sync. It's one of the few high-energy games where a mixed-fitness, mixed-gender group competes on genuinely equal footing.",
    category: ["fun", "communication", "employee-engagement", "games"],
    format: "Outdoor",
    objectives: ["Coordination", "Communication", "Positional discipline", "Energy and fun"],
    idealFor: ["Sports days", "Engagement events", "Young teams", "Festival-style offsites"],
    groupSize: "10–150 participants (5–6 per side on court)",
    duration: "1–2 hours",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Inflatable or framed foosball arena", "Rods and harness points", "Footballs", "Bibs", "Whistle and scoreboard"],
    location: ["Lawns", "Parking lots", "Indoor sports halls", "Resort grounds"],
    howItWorks: [
      "The arena is set up with rows of rods; each team places 5–6 players across defence, midfield and attack rows.",
      "Players must keep both hands on their rod and move only sideways.",
      "Matches run 7–10 minutes; the ball stays in play off the arena walls.",
      "A referee enforces the golden rule — release the rod and the other team gets a free strike.",
      "League or knockout fixtures rotate everyone through; spectators become the cheer squad.",
    ],
    outcomes: [
      "Teams learn that constrained roles demand louder, clearer communication.",
      "Levels the playing field across fitness levels — inclusive by design.",
      "Fast bursts of play keep energy high across a large event.",
      "Instant team chemistry from synchronised movement and shared laughter.",
    ],
    facilitatorNotes: [
      "Keep matches short — 7 minutes of lateral shuffling is more tiring than it looks.",
      "Hydration station beside the arena is essential in Indian summers; prefer morning or late-afternoon slots.",
      "Rotate substitutes every match so nobody stands out for 30 minutes.",
    ],
    variations: [
      "Two-ball chaos round — doubles the communication load for the final.",
      "Silent match — no talking allowed, only gestures, as a communication debrief tool.",
      "Corporate league — inter-department fixtures across an afternoon.",
    ],
    faqs: [
      {
        question: "Can this run indoors?",
        answer:
          "Yes — the arena fits most sports halls and large banquet spaces with a 3m ceiling clearance. Indoor running is common during monsoon months.",
      },
      {
        question: "Is it safe for non-sporty employees?",
        answer:
          "Very. Movement is limited to sideways steps, there's no tackling, and the padded arena keeps the ball — not people — bouncing off walls.",
      },
      {
        question: "How many people can play at once?",
        answer:
          "10–12 on court per match. With quick rotations and a fixture board, a 150-person event keeps everyone involved between playing and cheering.",
      },
    ],
    relatedActivities: ["box-cricket-league", "corporate-sports-day", "minute-to-win-it-showdown"],
  },
  {
    slug: "box-cricket-league",
    title: "Box Cricket League",
    shortDescription:
      "A fast, tennis-ball cricket tournament in a compact netted arena — India's favourite sport reformatted so everyone bats, bowls and fields.",
    longDescription:
      "Nothing mobilises an Indian office like cricket, and box cricket keeps all the drama while removing the barriers. Played in a netted arena roughly the size of a badminton court with a soft tennis ball, overs are short, boundaries are walls, and rules force participation: every player must bowl an over, and mixed teams are standard. The result is a tournament where the sales head, the newest intern and the finance team's quiet spreadsheet wizard all get their moment.\n\nRun as a league with team names, jerseys, a commentary mic and a points table, it becomes a mini IPL — complete with auctions if you want to go all in. The format generates weeks of pre-event banter and post-event highlight reels, making it as much an engagement campaign as a one-day event.",
    category: ["fun", "employee-engagement", "corporate-outing", "games"],
    format: "Outdoor",
    objectives: ["Team spirit", "Inclusive participation", "Healthy competition", "Cross-department bonding"],
    idealFor: ["Annual sports days", "Engagement calendars", "Large offices", "Multi-team organisations"],
    groupSize: "24–300 participants",
    duration: "3 hours to full day",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Netted box arena", "Tennis balls", "Bats", "Stumps", "Team bibs", "Scoreboard and mic"],
    location: ["Turf arenas", "Parking lots with netting", "Indoor courts", "Resort grounds"],
    howItWorks: [
      "Teams of 6–8 are drafted with mandatory mixed composition — departments and genders spread across squads.",
      "Matches run 4–6 overs a side with box rules: walls count, one-bounce catches out, every player bowls.",
      "A live points table, commentary and music keep spectators as engaged as players.",
      "League stage feeds into semi-finals and a final; individual awards go beyond top scorer — best catch, best team spirit, best celebration.",
    ],
    outcomes: [
      "Broadest voluntary participation of any corporate sport in India.",
      "Shared fandom builds bonds that outlast the event — team chats stay alive for months.",
      "Mandatory-bowling rules create small courage moments for non-players.",
      "Strong content engine: photos, reels and highlight clips for internal channels.",
    ],
    facilitatorNotes: [
      "Enforce the every-player-bowls rule kindly but firmly — it's what separates this from a boys' cricket meetup.",
      "Soft tennis balls only; no leather, no exceptions.",
      "Schedule matches in slots so no one waits more than 40 minutes between games.",
      "A commentary mic in the right hands doubles the event's energy — brief the commentator to celebrate beginners.",
    ],
    variations: [
      "Franchise Auction Edition — captains bid a mock budget for players, brilliant for large offices.",
      "Glow Cricket — evening edition with LED stumps and glow balls.",
      "Mixed-pairs Super Over shootout as a quick 60-minute format.",
    ],
    faqs: [
      {
        question: "What if many employees have never played cricket?",
        answer:
          "Box rules are built for beginners: soft ball, short pitch, walls that keep the ball in play, and a practice net before fixtures. Beginners routinely take the day's best-moment awards.",
      },
      {
        question: "How many matches fit in half a day?",
        answer:
          "With 4-over innings, one arena runs 8–10 matches in four hours. Larger groups use two parallel arenas.",
      },
      {
        question: "Can this be an ongoing league instead of one day?",
        answer:
          "Yes — a match-a-week format over 6–8 weeks works beautifully as an engagement calendar anchor.",
      },
    ],
    relatedActivities: ["human-foosball", "corporate-sports-day", "corporate-treasure-hunt"],
  },
  {
    slug: "corporate-sports-day",
    title: "Corporate Sports Day",
    shortDescription:
      "A multi-event field day — relays, tug of war, carnival games and novelty races — engineered so every employee competes and every house scores.",
    longDescription:
      "The Corporate Sports Day takes the school sports-day format everyone secretly loved and rebuilds it for the workplace. Employees are drafted into colour-coded houses that cut across departments and hierarchies, then rotate through a circuit of events: classic relays and tug of war alongside novelty formats like lemon-and-spoon sprints, sack races, hoopla stations and blind-partner obstacle walks. Scoring is house-based, so every single event — athletic or absurd — moves the leaderboard.\n\nThe genius of the format is its breadth. The 100m dash rewards your runners, but the balloon-keepy-uppy and memory relay reward completely different people, and the house system means everyone's points matter. Done with music, a lively MC and a march-past opening, it produces the kind of collective belonging that a single-game event can't.",
    category: ["fun", "employee-engagement", "corporate-outing"],
    format: "Outdoor",
    objectives: ["Belonging", "Inclusive competition", "Energy", "Organisation-wide bonding"],
    idealFor: ["Annual days", "Companies of 100+", "Culture-building initiatives", "Family days"],
    groupSize: "50–1000 participants",
    duration: "Half day to full day",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Event props per station", "House flags and bibs", "PA system", "Scoreboard", "Medals and trophies"],
    location: ["School or club grounds", "Stadiums", "Large resort lawns"],
    howItWorks: [
      "Employees are pre-assigned to 4–6 houses mixed across teams, levels and locations.",
      "The day opens with a march-past, house chants and a torch or flag ceremony.",
      "Houses rotate through event stations in parallel — track events, team games and novelty challenges run simultaneously.",
      "Every event carries house points; novelty events score the same as athletic ones.",
      "A cumulative leaderboard updates hourly, building to a finale relay and awards ceremony.",
    ],
    outcomes: [
      "Whole-organisation participation with no spectator-only employees.",
      "House identities persist after the event and can anchor year-round engagement.",
      "Leadership visibility — leaders competing in sack races flattens hierarchy fast.",
      "A genuine fitness-and-fun day that HR can position within wellness programs.",
    ],
    facilitatorNotes: [
      "Design the event mix so at most a third is athletic; the rest should reward coordination, humour or luck.",
      "Shaded rest zones, hydration points and a medic on site are mandatory for Indian outdoor events.",
      "Pre-assign houses a week early so chants, names and WhatsApp groups form before the day.",
    ],
    variations: [
      "Family Sports Day — parallel kids' events turn it into a family festival.",
      "Monsoon Indoor Edition — hall-friendly circuit with carnival stations.",
      "Quarterly House Cup — the same houses compete across events all year.",
    ],
    faqs: [
      {
        question: "How do you keep less athletic employees engaged?",
        answer:
          "Event design. More than half the stations are skill, humour or luck based — hoopla, memory relays, blind navigation — and they score equal points to track events.",
      },
      {
        question: "What's the ideal venue?",
        answer:
          "A school or club ground with shade works best. For 300+ we recommend venues with a proper track and covered seating.",
      },
      {
        question: "Can families be included?",
        answer:
          "Yes — a family edition with kids' races and parent-child events is one of the most requested formats.",
      },
    ],
    relatedActivities: ["box-cricket-league", "human-foosball", "corporate-treasure-hunt"],
  },
  {
    slug: "blindfold-minefield",
    title: "Blindfold Minefield",
    shortDescription:
      "Blindfolded teammates navigate an obstacle field guided only by a partner's voice — the sharpest trust-and-communication exercise in the kit.",
    longDescription:
      "The Minefield strips communication down to its essentials. One partner stands blindfolded at the edge of a field scattered with obstacles — cones, balls, ropes; the other stands outside the boundary and must guide them through using only words. No touching, no entering the field. Every vague instruction ('go a bit left') costs penalties; every precise one ('two small steps, then stop') builds visible progress.\n\nIt sounds simple and lands hard. Guides discover how imprecise their everyday instructions are; walkers discover how much anxiety poor communication creates downstream. Swap the roles and both lessons compound. As a debriefed exercise it maps directly onto delegation, remote-work communication and how managers brief their teams.",
    category: ["communication", "leadership", "problem-solving"],
    format: "Outdoor",
    objectives: ["Precise communication", "Trust", "Active listening", "Delegation awareness"],
    idealFor: ["Manager development", "New teams", "Remote-heavy teams", "Training workshops"],
    groupSize: "8–60 participants",
    duration: "45–90 minutes",
    energyLevel: "Medium",
    difficulty: "Moderate",
    materials: ["Blindfolds", "Cones and soft obstacles", "Boundary ropes", "Penalty tokens"],
    location: ["Lawns", "Sports courts", "Large halls", "Training centres"],
    howItWorks: [
      "The field is laid out with soft obstacles; touching one costs a penalty.",
      "Pairs are formed — one blindfolded walker, one sighted guide who must stay outside the field.",
      "Guides navigate their partner across using voice alone; multiple pairs cross simultaneously, adding noise to filter.",
      "Roles swap for a second round; teams then compete on time-plus-penalty scores.",
      "Debrief focuses on what precise instruction sounds like and how it felt to depend on it.",
    ],
    outcomes: [
      "Immediate, felt understanding of instruction clarity — no slideware needed.",
      "Builds interpersonal trust through structured vulnerability.",
      "Surfaces listening habits: who filters noise well, who talks over their partner.",
      "Directly transferable debrief for briefing, delegation and remote communication.",
    ],
    facilitatorNotes: [
      "Use only soft obstacles and walking pace; a spotter shadows each walker.",
      "Run pairs simultaneously on purpose — the crosstalk is the point.",
      "In the debrief, ask walkers to quote the single most helpful instruction they received; patterns emerge fast.",
      "Respect anyone uncomfortable with blindfolds — offer the guide role without ceremony.",
    ],
    variations: [
      "Relay Minefield — teams of six guide one walker in timed legs.",
      "Object Retrieval — walkers must also collect items, adding memory load.",
      "Silent Guide — guides may only use a clicker or claps, for advanced groups.",
    ],
    faqs: [
      {
        question: "Is this activity awkward for reserved employees?",
        answer:
          "It's structured enough to feel safe — clear rules, short rounds, and role choice. Reserved participants often prefer it to performative games precisely because it's task-focused.",
      },
      {
        question: "Indoor or outdoor?",
        answer:
          "Both. A hall works fine; outdoors adds ambient noise which strengthens the listening lesson.",
      },
      {
        question: "How does this connect to real work?",
        answer:
          "The debrief maps guide-walker dynamics onto manager-report briefings, cross-office handoffs and written instructions for remote teams.",
      },
    ],
    relatedActivities: ["key-punch", "pipeline-challenge", "improv-theatre-workshop"],
  },
  {
    slug: "bridge-building-challenge",
    title: "Bridge Building Challenge",
    shortDescription:
      "Two sub-teams build separate halves of a bridge from limited materials — without seeing each other's half — and pray they align at the joining ceremony.",
    longDescription:
      "The Bridge Building Challenge is a collaboration exercise disguised as an engineering task. Each team splits into two cells working in separate rooms or zones, building the left and right halves of one bridge from identical kits of cardboard, bamboo, tape and rope. They can't see each other's builds; they can only communicate through limited 'engineering meetings' — timed, structured exchanges of words and sketches. At the end, the halves are carried to the centre and joined in front of everyone, and a loaded toy truck must cross.\n\nThe reveal is theatre: some bridges align beautifully, others miss by a comic margin, and the room learns viscerally why interface definitions, shared standards and communication cadence matter. It is the single best activity we know for cross-functional teams and offices that struggle with handoffs.",
    category: ["problem-solving", "communication", "leadership"],
    format: "Outdoor",
    objectives: ["Cross-team alignment", "Interface communication", "Planning", "Shared standards"],
    idealFor: ["Cross-functional teams", "Engineering and product orgs", "Merged teams post-reorg"],
    groupSize: "12–120 participants",
    duration: "2–2.5 hours",
    energyLevel: "Medium",
    difficulty: "Challenging",
    materials: ["Cardboard and bamboo kits", "Tape, rope, scissors", "Sketch pads", "A weighted toy truck for the test"],
    location: ["Halls with breakout rooms", "Resort lawns with separated zones", "Training centres"],
    howItWorks: [
      "Each team divides into two cells placed out of sight of each other with identical material kits.",
      "The brief: build one continuous bridge of specified span and height — each cell builds half.",
      "Cells may communicate only during three timed 'engineering meetings' of five minutes each, using words and paper sketches only.",
      "Cells build in isolation between meetings, making assumptions where communication fell short.",
      "At the finale, halves are joined publicly and the loaded truck must cross the complete bridge.",
      "Debrief examines which meeting behaviours predicted alignment — and which assumptions caused the gaps.",
    ],
    outcomes: [
      "Vivid demonstration of why interfaces and standards must be agreed early.",
      "Practises structured, time-boxed communication under ambiguity.",
      "Reveals assumption-making habits that mirror real project handoffs.",
      "The public joining moment creates a shared story teams reference for years.",
    ],
    facilitatorNotes: [
      "Enforce the no-peeking rule ruthlessly; the exercise dies if cells glimpse each other's work.",
      "Seed one deliberate ambiguity in the brief (e.g., unspecified deck width) — it's the debrief goldmine.",
      "Photograph both halves before joining; side-by-side shots make the debrief land.",
    ],
    variations: [
      "Three-cell Span — three sub-teams build a longer bridge, multiplying interfaces.",
      "Written-only Meetings — communication happens via memo, mirroring async remote work.",
      "Cost Mode — materials carry prices and teams compete on strength per rupee.",
    ],
    faqs: [
      {
        question: "Does this need engineering-minded participants?",
        answer:
          "No. The materials are forgiving and the challenge is really about communication, not structures. Non-technical teams often align better because they over-communicate.",
      },
      {
        question: "How big can a single bridge team be?",
        answer:
          "8–16 per bridge works best (4–8 per cell). Larger groups run multiple bridges in parallel and compete on the truck test.",
      },
      {
        question: "What does the truck test measure?",
        answer:
          "Alignment and joint strength — exactly the things the two halves had to agree on remotely. A bridge can be individually strong and still fail at the interface, which is the lesson.",
      },
    ],
    relatedActivities: ["raft-building-challenge", "chain-reaction-challenge", "tower-of-innovation"],
  },
];
