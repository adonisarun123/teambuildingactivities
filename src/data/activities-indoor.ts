import type { Activity } from "./types";

export const indoorActivities: Activity[] = [
  {
    slug: "drum-circle",
    title: "Corporate Drum Circle",
    shortDescription:
      "Every participant gets a drum and, guided by a facilitator, a room of hundreds becomes one rhythm — the fastest whole-company connection experience there is.",
    longDescription:
      "The drum circle is the rare activity that works identically for 20 people or 1,000. Every participant receives a djembe or percussion instrument, and a trained facilitator conducts the room through call-and-response rhythms, section splits, crescendos and silences. Within fifteen minutes people who have never touched a drum are holding down a groove with the entire company — no musical background required, no one on the sidelines.\n\nBeneath the joy is a precise metaphor the facilitator makes explicit: sections listening to each other, individual rhythms serving a collective sound, the cost of one section rushing ahead. It's frequently used to open large conferences because it collapses hierarchy instantly — the CEO and the newest hire are holding the same beat.",
    category: ["fun", "employee-engagement", "communication"],
    format: "Indoor",
    objectives: ["Unity", "Active listening", "Energy", "Hierarchy-free connection"],
    idealFor: ["Conference openers", "Large townhalls", "Post-merger integration", "Annual days"],
    groupSize: "20–1000 participants",
    duration: "45–90 minutes",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["One djembe or percussion instrument per participant", "Facilitator's platform", "PA for large rooms"],
    location: ["Banquet halls", "Auditoriums", "Conference venues", "Open lawns"],
    howItWorks: [
      "Participants sit in concentric circles, each with an instrument already on their seat.",
      "The facilitator starts with simple call-and-response beats everyone can copy immediately.",
      "The room is split into sections, each holding a different rhythm that interlocks into one groove.",
      "Dynamics games — silences, solos, volume waves — teach the room to watch and listen.",
      "The session builds to a full-room crescendo, followed by a short reflection on what made it work.",
    ],
    outcomes: [
      "Instant, hierarchy-free shared achievement for very large groups.",
      "A felt experience of listening as the basis of coordination.",
      "Measurable energy shift — ideal before or after heavy conference content.",
      "Universally inclusive: no fitness, language or musical prerequisites.",
    ],
    facilitatorNotes: [
      "Seat the leadership team scattered among everyone, never in a front row.",
      "Keep the first ten minutes success-guaranteed — simple beats, fast wins.",
      "For 300+ participants use section leaders with distinct instruments to anchor each zone.",
    ],
    variations: [
      "Boomwhacker Symphony — tuned plastic tubes create melodies, not just rhythm.",
      "Body Percussion — no instruments, ideal for venues with noise limits.",
      "Rhythm + Values — sections are named after company values and the finale weaves them together.",
    ],
    faqs: [
      {
        question: "What if people feel shy about drumming?",
        answer:
          "The format hides individuals inside the group sound — nobody is ever exposed solo unless they volunteer. Shy participants typically report it as the activity they enjoyed most.",
      },
      {
        question: "How much space does it need?",
        answer:
          "Roughly one square metre per person in concentric circles. A banquet hall that seats your group theatre-style will fit a drum circle.",
      },
      {
        question: "Is it really viable for 1,000 people?",
        answer:
          "Yes — with a PA, raised facilitator platform and zone anchors, drum circles scale to conference-hall sizes and remain fully interactive.",
      },
    ],
    relatedActivities: ["improv-theatre-workshop", "corporate-sports-day", "minute-to-win-it-showdown"],
  },
  {
    slug: "escape-room-challenge",
    title: "Escape Room Challenge",
    shortDescription:
      "Locked in a themed room — or a portable pop-up at your office — teams race to crack ciphers, connect clues and escape before the timer hits zero.",
    longDescription:
      "The escape room compresses everything interesting about teamwork into sixty minutes: information is scattered, no one person can solve it alone, time pressure is real, and progress demands both divergent exploration and convergent logic. Teams of four to eight work through interlocking puzzles — ciphers, hidden compartments, pattern locks — where every solved element feeds the next.\n\nFor corporate groups we run it two ways: at dedicated escape venues, or as portable pop-up rooms built inside your office or offsite hall so multiple teams compete simultaneously on identical rooms. The parallel format adds a leaderboard dimension and lets facilitators observe and debrief how each team divided labour, shared discoveries and handled dead ends.",
    category: ["problem-solving", "fun", "communication", "games"],
    format: "Indoor",
    objectives: ["Collaborative problem solving", "Information sharing", "Time management", "Working under pressure"],
    idealFor: ["Small teams", "Analytical teams", "Leadership pods", "Office-based events"],
    groupSize: "4–100 participants (parallel rooms)",
    duration: "60–90 minutes",
    energyLevel: "Medium",
    difficulty: "Challenging",
    materials: ["Puzzle kits or venue rooms", "Locks, ciphers and props", "Timers", "Hint system"],
    location: ["Escape venues", "Office meeting rooms (pop-up)", "Offsite halls"],
    howItWorks: [
      "Teams of 4–8 are briefed on the storyline and rules, then enter their room as the countdown starts.",
      "Puzzles are non-linear at the start — teams must split up to explore — then funnel into a linear endgame requiring everyone's findings.",
      "A game master tracks progress and issues calibrated hints to keep momentum without spoiling.",
      "Teams escape (or don't) and finishing times land on a shared leaderboard.",
      "Debrief covers information-sharing behaviour: what was discovered but not communicated, and when.",
    ],
    outcomes: [
      "Sharpens collective problem solving under a real deadline.",
      "Exposes information-hoarding and communication gaps safely.",
      "Deep engagement for analytical personalities who dislike performative games.",
      "Leaderboard format creates healthy inter-team rivalry.",
    ],
    facilitatorNotes: [
      "Hint policy matters: a stuck team learns nothing after five frustrated minutes. Intervene early.",
      "In pop-up mode, run identical rooms so times are comparable and rivalry is fair.",
      "Watch for the 'puzzle boss' who takes over; note it (kindly) for the debrief.",
    ],
    variations: [
      "Mobile Escape Kits — briefcase-format puzzles that run in any meeting room.",
      "Mega Escape — one storyline, ten linked stations across an entire office floor.",
      "Reverse Escape — teams design a puzzle room and rival teams attempt it.",
    ],
    faqs: [
      {
        question: "Can escape rooms run at our office?",
        answer:
          "Yes — portable pop-up kits convert standard meeting rooms into escape rooms in about an hour, and identical parallel rooms let large groups compete simultaneously.",
      },
      {
        question: "What's the right team size?",
        answer:
          "Five or six is the sweet spot: enough hands to explore in parallel, few enough that everyone touches the puzzles.",
      },
      {
        question: "What if a team can't escape?",
        answer:
          "Game masters pace hints so nearly every team finishes with minutes to spare. The rare non-escape still produces the best debrief conversations.",
      },
    ],
    relatedActivities: ["corporate-treasure-hunt", "key-punch", "virtual-murder-mystery"],
  },
  {
    slug: "minute-to-win-it-showdown",
    title: "Minute to Win It Showdown",
    shortDescription:
      "Sixty-second challenges with everyday props — stack the cups, bounce the ball, balance the cookie — in a gameshow format that turns any hall into an arena.",
    longDescription:
      "The Minute to Win It Showdown strings together a dozen sixty-second challenges built from everyday objects: stacking cups into pyramids, moving cookies from forehead to mouth, bouncing ping-pong balls into tumblers, threading nuts onto straws. Each is trivially simple to understand and maddeningly fun to execute, which is exactly what makes the format work across every age, fitness level and seniority.\n\nRun gameshow-style with an MC, buzzer sounds and a projected scoreboard, teams nominate different players for different challenges — forcing rotation and giving everyone a moment under the lights. It's the highest laughter-per-minute format in the catalogue and needs nothing more than a conference hall.",
    category: ["fun", "employee-engagement", "games"],
    format: "Indoor",
    objectives: ["Energy", "Inclusive fun", "Team spirit", "Quick thinking"],
    idealFor: ["Office parties", "Friday engagement", "Conference breaks", "Mixed-age teams"],
    groupSize: "10–200 participants",
    duration: "60–120 minutes",
    energyLevel: "High",
    difficulty: "Easy",
    materials: ["Prop kits (cups, balls, straws, cookies, balloons)", "Timer and buzzer", "Scoreboard", "MC and music"],
    location: ["Office cafeterias", "Conference halls", "Banquet rooms"],
    howItWorks: [
      "Teams of 6–10 sit arena-style around a central challenge zone.",
      "The MC demos each challenge; teams huddle to nominate their player — with a no-repeat rule across challenges.",
      "Nominees compete simultaneously on the floor as the sixty-second timer runs.",
      "Points scale through the rounds so trailing teams stay in contention until the finale.",
      "A sudden-death final challenge decides the champions.",
    ],
    outcomes: [
      "Guaranteed all-hands laughter — the fastest mood-lifter in the catalogue.",
      "The nomination mechanic quietly practises delegation and playing to strengths.",
      "Zero fitness or knowledge barriers; genuinely everyone can win a round.",
      "Excellent between-sessions energiser at conferences and townhalls.",
    ],
    facilitatorNotes: [
      "Sequence matters: open with a guaranteed-chaos challenge to break the ice in round one.",
      "Enforce the no-repeat-player rule; it's what keeps the event from being three extroverts' show.",
      "Keep prop hygiene kits ready — food-based challenges need individual portions.",
    ],
    variations: [
      "Department Cup — standing fixture where teams accumulate points across monthly rounds.",
      "Giant-props Edition — oversized versions for stage events with big audiences.",
      "Hybrid Mode — remote employees compete on camera with home-object challenges.",
    ],
    faqs: [
      {
        question: "How much setup does this need?",
        answer:
          "The least of any format — a hall, tables for props, a mic and a screen. Setup takes under an hour.",
      },
      {
        question: "Does it work for senior leadership groups?",
        answer:
          "Extremely well. The challenges are so disarming that formality dissolves in minutes; it's a favourite for leadership offsites that need lightening.",
      },
      {
        question: "How many challenges fit in a session?",
        answer:
          "Plan eight to twelve challenges for a 90-minute show, including huddle time and a finale.",
      },
    ],
    relatedActivities: ["human-foosball", "drum-circle", "corporate-masterchef-cookoff"],
  },
  {
    slug: "chain-reaction-challenge",
    title: "Chain Reaction Challenge",
    shortDescription:
      "Each team builds one segment of a giant Rube Goldberg machine — dominoes, ramps, pulleys — and every segment must trigger the next in one continuous run.",
    longDescription:
      "The Chain Reaction Challenge asks teams to build a working segment of a room-scale contraption: marble runs into dominoes, dominoes tip a lever, the lever releases a car down a ramp, and so on — with each team's segment required to receive a trigger from the previous team and pass one to the next. The whole room succeeds or fails together at the single, breath-holding finale run.\n\nIt's the definitive interdependence exercise. Teams quickly realise that a brilliant segment is worthless if its interfaces fail, and that they must negotiate specifications with neighbours they don't control. The final run — usually after one heartbreaking mid-chain failure and a frantic repair — delivers a collective payoff few activities can match.",
    category: ["problem-solving", "communication", "leadership"],
    format: "Indoor",
    objectives: ["Interdependence", "Interface negotiation", "Creative engineering", "Shared goals"],
    idealFor: ["Cross-functional orgs", "Engineering teams", "Companies fighting silo culture"],
    groupSize: "20–200 participants",
    duration: "2–3 hours",
    energyLevel: "Medium",
    difficulty: "Challenging",
    materials: ["Dominoes, marbles, ramps, pulleys, levers", "Tables arranged in a chain", "Tape, string, craft supplies"],
    location: ["Large halls", "Office cafeterias", "Convention spaces"],
    howItWorks: [
      "Tables are arranged in a long chain; each team of 6–8 owns one table segment.",
      "The brief specifies only the input each segment receives and the output it must deliver — everything in between is the team's design.",
      "Teams must negotiate exact trigger mechanics with their upstream and downstream neighbours.",
      "Mid-build, a facilitator 'change order' (a new rule or material constraint) tests adaptability.",
      "Segments are tested individually, then the room attempts the single continuous run — everyone succeeds or repairs together.",
    ],
    outcomes: [
      "Interdependence becomes physical: your work only matters if it connects.",
      "Practises negotiating specifications with teams you don't control.",
      "The change-order round builds change-resilience muscles.",
      "The full-chain finale creates a genuine whole-company achievement.",
    ],
    facilitatorNotes: [
      "Put deliberate slack in the middle segments — chains fail most there, and repairs are part of the design.",
      "Film the finale run; the slow-motion replay is debrief gold and internal-comms gold.",
      "Match segment complexity to team appetite; give the ambitious team the pulley kit.",
    ],
    variations: [
      "Themed Chain — the machine tells the company's story, ending by unveiling a logo or product.",
      "Constraint Auction — teams bid a mock budget for premium components.",
      "Two-Chain Race — two parallel chains race, adding speed pressure to reliability.",
    ],
    faqs: [
      {
        question: "What happens if the chain fails mid-run?",
        answer:
          "One repair-and-rerun is built into the format. The failure-repair-success arc is usually the most bonding part of the day.",
      },
      {
        question: "Do teams need engineering skills?",
        answer:
          "No — components are intuitive (dominoes, ramps, marbles). Creativity and neighbour communication matter far more than physics.",
      },
      {
        question: "How large can the machine get?",
        answer:
          "We've run chains of 25+ segments spanning entire cafeterias. Practical maximum is about 200 participants on one chain; beyond that, two chains race.",
      },
    ],
    relatedActivities: ["bridge-building-challenge", "pipeline-challenge", "tower-of-innovation"],
  },
  {
    slug: "movie-making-challenge",
    title: "Movie Making Challenge",
    shortDescription:
      "Teams script, shoot and edit a short film on smartphones in three hours — then premiere it at a red-carpet screening with awards.",
    longDescription:
      "The Movie Making Challenge hands each team a genre, a set of mandatory props or lines, and a deadline: deliver a 3–5 minute film, shot and edited entirely on smartphones. Teams must divide into writers, actors, directors and editors, scout locations around the venue, and manage a real creative pipeline under real time pressure — because the premiere happens tonight, in front of everyone, with an awards ceremony.\n\nIt's a project-management exercise wearing a Bollywood costume. The constraint set (genre + mandatory elements) forces creativity rather than limiting it, and the premiere gives every team a guaranteed moment of glory. The films become internal legend — replayed at townhalls and farewells for years.",
    category: ["fun", "leadership", "communication", "corporate-outing"],
    format: "Indoor",
    objectives: ["Creative collaboration", "Project management", "Role clarity", "Presentation confidence"],
    idealFor: ["Offsites", "Creative teams", "Marketing orgs", "Evening event anchors"],
    groupSize: "15–150 participants",
    duration: "3–4 hours plus screening",
    energyLevel: "Medium",
    difficulty: "Moderate",
    materials: ["Smartphones", "Simple editing apps", "Prop boxes", "Projector and screen for premiere", "Award trophies"],
    location: ["Resorts", "Offices", "Offsite venues with varied backdrops"],
    howItWorks: [
      "Teams of 6–10 draw a genre (thriller, rom-com, mockumentary, ad film) plus three mandatory elements.",
      "A 30-minute writers' room produces a one-page script and shot list.",
      "Teams shoot on smartphones around the venue for 90 minutes, then edit for 45.",
      "Films premiere at a red-carpet screening with popcorn and an MC.",
      "Awards cover best film, actor, editing, and the coveted so-bad-it's-good prize — every team wins something.",
    ],
    outcomes: [
      "A complete creative pipeline executed under deadline — planning, production, integration.",
      "Hidden talents surface: editors, comedians and directors nobody knew about.",
      "Produces a permanent cultural artefact teams rewatch for years.",
      "The premiere doubles as a ready-made evening entertainment slot.",
    ],
    facilitatorNotes: [
      "Mandatory elements are the secret sauce — they prevent blank-page paralysis and create running jokes across films.",
      "Assign a floating tech helper for editing-app rescues in the final 30 minutes.",
      "Cap films at five minutes hard; screenings die when films run long.",
      "Collect films centrally before screening to avoid last-minute AirDrop chaos.",
    ],
    variations: [
      "Ad Film Challenge — teams shoot a commercial for the company's actual product.",
      "One-Shot Challenge — films must be a single unbroken take, forcing rehearsal discipline.",
      "Sequel Round — teams remake another team's film in a different genre.",
    ],
    faqs: [
      {
        question: "What if team members hate being on camera?",
        answer:
          "Every film needs writers, directors, camera operators and editors — plenty of essential off-camera roles. Nobody is forced to act.",
      },
      {
        question: "Is smartphone footage good enough?",
        answer:
          "More than good enough for a 5-minute projected film, and using phones keeps the playing field level and the logistics trivial.",
      },
      {
        question: "How does judging work?",
        answer:
          "A mixed panel (leadership + facilitators) scores craft and creativity, while an audience vote decides a people's-choice award, keeping it fun rather than political.",
      },
    ],
    relatedActivities: ["improv-theatre-workshop", "corporate-masterchef-cookoff", "drum-circle"],
  },
  {
    slug: "corporate-masterchef-cookoff",
    title: "Corporate MasterChef Cook-Off",
    shortDescription:
      "Teams plan a menu, manage a mystery-box pantry and plate restaurant-worthy dishes against the clock — judged MasterChef-style.",
    longDescription:
      "The Cook-Off puts teams behind live cooking stations with a mystery box of hero ingredients, a shared pantry, and a ticking clock. Teams must agree on a menu fast, divide prep, cooking and plating roles, manage the pantry (where scarce ingredients run out — by design) and present their dishes to a judging panel with a story. No cooking experience needed: the format rewards coordination, not culinary school.\n\nFood is the great Indian unifier, and the cook-off leverages it fully. The pantry scarcity mechanic forces inter-team negotiation, the time pressure forces prioritisation, and the plating-and-story finale gives every team a proud presentation moment. It ends, unbeatably, with everyone eating together.",
    category: ["fun", "communication", "employee-engagement", "corporate-outing"],
    format: "Indoor",
    objectives: ["Coordination under pressure", "Resource negotiation", "Creativity", "Bonding"],
    idealFor: ["Offsites", "Family days", "Teams that dislike sporty formats", "Festive events"],
    groupSize: "12–120 participants",
    duration: "2.5–3 hours",
    energyLevel: "Medium",
    difficulty: "Moderate",
    materials: ["Induction cooking stations", "Mystery boxes", "Shared pantry", "Plating crockery", "Judging sheets", "Aprons and chef hats"],
    location: ["Banquet halls", "Resort kitchens/lawns", "Office cafeterias with power"],
    howItWorks: [
      "Teams of 6–8 receive aprons, a station, and a mystery box of 4–5 hero ingredients that must feature in their dishes.",
      "A 15-minute menu huddle assigns roles: head chef, prep line, pantry runner, plating lead.",
      "The shared pantry opens — popular ingredients are deliberately scarce, forcing trades and timing strategy.",
      "Teams cook for 75–90 minutes with facilitators enforcing hygiene and safety.",
      "Each team plates for the judges and presents their dish with a name and story; scores cover taste, presentation, teamwork and hygiene.",
    ],
    outcomes: [
      "Role clarity and handoffs practised in a hot, time-boxed environment.",
      "Negotiation skills exercised through the scarce-pantry mechanic.",
      "Deeply inclusive — cooking, tasting, styling and storytelling roles suit everyone.",
      "Ends in a shared meal, the oldest team-bonding technology there is.",
    ],
    facilitatorNotes: [
      "Collect dietary restrictions in advance and mark stations accordingly; vegetarian-only mystery boxes are standard for mixed groups.",
      "Induction stations only — no open flames at corporate venues.",
      "Brief judges to weight teamwork visibly; it keeps the event from becoming a foodies' contest.",
    ],
    variations: [
      "No-Fire Challenge — salads, chaats and desserts only; runs in any office space.",
      "Regional Round — each team draws an Indian region and cooks to its cuisine.",
      "Family Edition — employees' families join as sous chefs.",
    ],
    faqs: [
      {
        question: "What about food allergies and preferences?",
        answer:
          "We collect dietary data at registration, run vegetarian-standard pantries with clearly separated add-ons, and exclude allergens flagged by any participant.",
      },
      {
        question: "Can it run inside a normal office?",
        answer:
          "Yes, via the no-fire format or induction stations in the cafeteria — power sockets and ventilation are the only requirements.",
      },
      {
        question: "Do dishes actually get eaten?",
        answer:
          "Everything plated goes to the judges and then to a shared tasting table — the communal meal at the end is half the point.",
      },
    ],
    relatedActivities: ["minute-to-win-it-showdown", "movie-making-challenge", "corporate-sports-day"],
  },
  {
    slug: "key-punch",
    title: "Key Punch",
    shortDescription:
      "Teams must touch 30 scattered number pads in sequence as fast as possible — with only one person allowed in the zone at a time. Then they get to try again. And again.",
    longDescription:
      "Key Punch looks trivial: thirty numbered spots scattered inside a roped zone, and the team must touch them in order, fastest time wins. The constraints bite immediately — only one team member in the zone at a time, penalties for wrong order — and the first attempt is always chaos. The magic is in the structure: teams get multiple timed attempts with planning huddles in between, and watch their time collapse from three minutes to under thirty seconds.\n\nThat improvement curve is the entire lesson. Nothing about the team's talent changed between attempt one and attempt five — only their process. Facilitators use it to talk about iteration, retrospectives and process design more convincingly than any training slide, because the team just lived a 5x improvement in twenty minutes.",
    category: ["problem-solving", "communication", "leadership"],
    format: "Indoor",
    objectives: ["Process improvement", "Iteration", "Planning", "Continuous learning"],
    idealFor: ["Agile teams", "Operations teams", "Training workshops", "Retro-culture building"],
    groupSize: "8–80 participants",
    duration: "45–75 minutes",
    energyLevel: "Medium",
    difficulty: "Moderate",
    materials: ["Numbered spot markers", "Boundary rope", "Stopwatches", "Penalty flags"],
    location: ["Halls", "Lawns", "Training rooms", "Office common areas"],
    howItWorks: [
      "Thirty numbered markers are scattered randomly inside a roped zone; teams study it from outside.",
      "Rules: touch all thirty in ascending order; only one person inside the zone at any moment; wrong touches add penalty seconds.",
      "Teams get five timed attempts with a three-minute planning huddle before each.",
      "Times are recorded publicly on a board — the improvement curve is the star of the show.",
      "Debrief connects each attempt's strategy change to the time gained, mapping directly onto sprint retrospectives.",
    ],
    outcomes: [
      "A lived, measured demonstration that process beats talent for repeatable tasks.",
      "Teams practise structured retrospectives with immediate feedback.",
      "Surfaces natural strategists and testers within the team.",
      "The 5x improvement number becomes a durable team reference point.",
    ],
    facilitatorNotes: [
      "Never suggest strategies — the discovery is the value. Answer only rule questions.",
      "Record every attempt's time visibly; the curve is your debrief slide.",
      "If a team plateaus, ask 'what did you change last attempt?' — usually they changed nothing.",
    ],
    variations: [
      "Blind Punch — the map disappears once attempts start, adding memory load.",
      "Dual Zone — two zones, forcing the team to split and coordinate.",
      "Process Handoff — team A writes instructions for team B to execute, testing documentation.",
    ],
    faqs: [
      {
        question: "Isn't this too simple for senior teams?",
        answer:
          "Simplicity is the trap. Senior teams typically start slower than junior ones (more debate, less testing) — which makes the debrief sharper.",
      },
      {
        question: "How physical is it?",
        answer:
          "One person walks briskly in the zone at a time. Anyone can play; strategy roles matter more than speed.",
      },
      {
        question: "What does it pair well with?",
        answer:
          "It's a perfect 45-minute module inside a larger workshop day, often paired with Blindfold Minefield or Pipeline for a communication-process arc.",
      },
    ],
    relatedActivities: ["blindfold-minefield", "pipeline-challenge", "escape-room-challenge"],
  },
  {
    slug: "tower-of-innovation",
    title: "Tower of Innovation",
    shortDescription:
      "Spaghetti, tape, string and one marshmallow: build the tallest freestanding tower that holds the marshmallow on top — a deceptively profound design sprint.",
    longDescription:
      "The Tower of Innovation (the classic marshmallow challenge, upgraded) gives each team eighteen minutes, twenty sticks of spaghetti, a metre of tape, a metre of string and one marshmallow that must sit on top of a freestanding tower. The marshmallow is heavier than it looks, and towers that soared confidently collapse in the final seconds when it's placed.\n\nThe famous insight — kindergarteners outperform MBAs because they prototype early instead of planning perfectly — lands hard on corporate audiences. We run multiple rounds so teams apply the lesson immediately: round two towers are routinely twice the height of round one. Wrapped in a debrief on prototyping, assumptions and iteration, it's the highest insight-per-minute activity in the catalogue.",
    category: ["problem-solving", "leadership", "fun"],
    format: "Indoor",
    objectives: ["Prototyping mindset", "Assumption testing", "Iteration", "Design thinking"],
    idealFor: ["Product teams", "Innovation workshops", "Leadership programs", "Quick conference modules"],
    groupSize: "8–200 participants",
    duration: "45–60 minutes",
    energyLevel: "Low",
    difficulty: "Easy",
    materials: ["Spaghetti", "Masking tape", "String", "Marshmallows", "Measuring tape"],
    location: ["Any meeting room", "Conference halls", "Training centres"],
    howItWorks: [
      "Teams of 4–6 receive identical kits and the brief: tallest freestanding tower, marshmallow on top, eighteen minutes.",
      "Facilitators call out time checkpoints but give no advice.",
      "Towers are measured only if freestanding with the marshmallow in place at the buzzer.",
      "A short debrief reveals the pattern: teams that tested with the marshmallow early beat teams that planned perfectly and placed it last.",
      "Round two runs immediately — same kit, new knowledge — and heights typically double.",
    ],
    outcomes: [
      "The prototype-early lesson experienced physically, not lectured.",
      "Teams see their own planning-versus-testing bias exposed in the data.",
      "Round-two improvement proves the value of fast iteration within one hour.",
      "Scales from a boardroom of 8 to a conference hall of 200.",
    ],
    facilitatorNotes: [
      "Never warn teams about the marshmallow's weight — the collapse is the curriculum.",
      "Measure heights publicly and chart round one versus round two.",
      "For senior audiences, share the kindergarten-versus-MBA research after round one, not before.",
    ],
    variations: [
      "Cost-Constrained Round — materials carry prices; score is height per rupee.",
      "Silent Build — no talking in round one, unlocking a communication debrief.",
      "Mega Tower — teams merge kits in round three to build one giant tower together.",
    ],
    faqs: [
      {
        question: "Is this too well-known to run?",
        answer:
          "Fewer than one in ten Indian corporate participants has actually done it — and the two-round format lands even for veterans, because knowing the lesson and applying it are different things.",
      },
      {
        question: "How much space and budget does it need?",
        answer:
          "Almost none — a table per team and grocery-store materials. It's the highest-value low-logistics module we run.",
      },
      {
        question: "What roles does it suit?",
        answer:
          "Anyone, but it's especially sharp for product, engineering and strategy teams whose real work involves exactly this planning-versus-prototyping tension.",
      },
    ],
    relatedActivities: ["chain-reaction-challenge", "bridge-building-challenge", "key-punch"],
  },
  {
    slug: "pipeline-challenge",
    title: "Pipeline Challenge",
    shortDescription:
      "Using half-pipes a few feet long, teams must transport rolling balls across the room without stopping, touching or dropping them — pure flow, pure coordination.",
    longDescription:
      "In the Pipeline Challenge each participant holds a short section of half-pipe, and the team must move marbles or balls from a start point to a distant goal — a bucket, sometimes across obstacles or up an incline. The rules create the challenge: the ball must always be moving forward, it may never be touched, and once it leaves your pipe section you must run to the front of the line to extend the pipeline. The team literally becomes a moving conveyor of coordination.\n\nIt's kinaesthetic flow-management. Gaps between pipe sections, mismatched heights and impatient handoffs all dump the ball on the floor and restart the run. Teams discover pacing, calling signals and the cost of one person rushing — a compact physical metaphor for handoffs in any process pipeline, from code deployment to order fulfilment.",
    category: ["communication", "problem-solving", "fun"],
    format: "Indoor",
    objectives: ["Handoff quality", "Pacing", "Coordination", "Flow thinking"],
    idealFor: ["Operations teams", "Delivery teams", "Warm-up modules", "Mixed groups"],
    groupSize: "8–100 participants",
    duration: "30–60 minutes",
    energyLevel: "Medium",
    difficulty: "Easy",
    materials: ["Half-pipe sections", "Marbles or balls", "Goal buckets", "Obstacle props"],
    location: ["Halls", "Corridors", "Lawns", "Training rooms"],
    howItWorks: [
      "Each team member receives one half-pipe section; the team lines up between start and goal.",
      "A ball is launched into the first pipe and must travel continuously — never stopping, never touched, never rolling backward.",
      "As the ball leaves your section you sprint to the front to extend the line, creating a perpetual pipeline.",
      "Drops restart the run; teams race the clock, then race each other.",
      "Later rounds add inclines, corners or a second simultaneous ball.",
    ],
    outcomes: [
      "Handoff discipline practised dozens of times in thirty minutes.",
      "Teams develop calling signals and pacing norms organically.",
      "One rushing member visibly breaks the flow — a debrief moment that names itself.",
      "Low setup, high energy: an ideal workshop opener.",
    ],
    facilitatorNotes: [
      "Start with a generous ball (larger, slower) and shrink to marbles as skill grows.",
      "Let the first drops happen without comment; teams self-correct and own the fix.",
      "The two-ball round is where real process thinking appears — introduce it only after one clean run.",
    ],
    variations: [
      "Uphill Finish — the final metres rise, demanding perfect pacing.",
      "Merge Junction — two pipelines must merge into one goal, adding negotiation.",
      "Blind Segments — two members are blindfolded and guided by neighbours' calls.",
    ],
    faqs: [
      {
        question: "How does this relate to actual work?",
        answer:
          "Every drop maps to a handoff failure: unclear signals, mismatched pace, gaps in coverage. Debriefs land especially well with delivery, support and ops teams.",
      },
      {
        question: "Is it suitable as a short energiser?",
        answer:
          "Yes — a 30-minute version with two rounds works brilliantly between conference sessions.",
      },
      {
        question: "What group size is ideal?",
        answer:
          "Teams of 8–12 per pipeline. Larger groups run parallel pipelines and race.",
      },
    ],
    relatedActivities: ["key-punch", "chain-reaction-challenge", "blindfold-minefield"],
  },
  {
    slug: "improv-theatre-workshop",
    title: "Improv Theatre Workshop",
    shortDescription:
      "Professional improv coaches run 'yes, and' games that rewire how teams listen, build on ideas and recover from mistakes — with constant laughter as the delivery mechanism.",
    longDescription:
      "The Improv Theatre Workshop borrows the training toolkit of professional comedy ensembles and applies it to workplace collaboration. Through structured games — one-word stories, gift-giving, character walks, scene-building — participants practise the core improv disciplines: accept what your partner offers ('yes, and'), listen to understand rather than to reply, make your partner look good, and treat mistakes as gifts to build on.\n\nEvery one of those disciplines is a workplace collaboration skill wearing a stage costume. Teams that habitually shoot down ideas experience what building on them feels like; hierarchical groups discover scenes only work when status is fluid. It's consistently the workshop where facilitators see the most visible behaviour change within two hours — and nobody stops laughing long enough to notice they're being trained.",
    category: ["communication", "leadership", "fun", "employee-engagement"],
    format: "Indoor",
    objectives: ["Listening", "Building on ideas", "Psychological safety", "Adaptability"],
    idealFor: ["Creative teams", "Leadership groups", "Sales teams", "Culture workshops"],
    groupSize: "10–60 participants",
    duration: "90–150 minutes",
    energyLevel: "Medium",
    difficulty: "Moderate",
    materials: ["Open space with chairs in a circle", "A trained improv facilitator", "Optional mic for large rooms"],
    location: ["Training rooms", "Studios", "Offsite halls"],
    howItWorks: [
      "Warm-up games lower the stakes — whole-group exercises where mistakes are applauded by design.",
      "Pair games introduce 'yes, and': each partner must accept and extend the other's offer.",
      "Small-group scene games apply the skills: one-word stories, expert interviews, party quirks.",
      "Between games, the facilitator names the workplace behaviour just practised — listening, offer-acceptance, status flexibility.",
      "The session closes with a group performance game where every participant contributes to one collective scene.",
    ],
    outcomes: [
      "Participants physically practise accepting and building on colleagues' ideas.",
      "Psychological safety improves — the room learns to celebrate error recovery.",
      "Meeting behaviour changes: less idea-blocking, more 'yes, and' language.",
      "Sales and client-facing teams gain conversational adaptability.",
    ],
    facilitatorNotes: [
      "Sequence from whole-group anonymity to small-group exposure — never cold-open with solo performance.",
      "Applaud failures explicitly and early; the workshop's power depends on it.",
      "Use a professional improv coach, not a generic trainer with improv slides. The difference is everything.",
    ],
    variations: [
      "Improv for Sales — objection-handling games with rapid-repartee drills.",
      "Story Slam Finale — volunteers tell 3-minute true work stories with coaching.",
      "Leadership Status Lab — games isolating status behaviours for senior teams.",
    ],
    faqs: [
      {
        question: "Will introverts hate this?",
        answer:
          "It's designed not to expose anyone: early games are whole-group, mistakes are celebrated, and nobody performs solo without volunteering. Introverts often rate it highest afterwards.",
      },
      {
        question: "Is this just games, or real training?",
        answer:
          "The games are the training. Each one isolates a collaboration behaviour, and the facilitator names it explicitly, so skills transfer to meetings, standups and client calls.",
      },
      {
        question: "What group size works?",
        answer:
          "10–30 is ideal for depth; up to 60 works with two coaches running parallel circles.",
      },
    ],
    relatedActivities: ["drum-circle", "movie-making-challenge", "blindfold-minefield"],
  },
];
