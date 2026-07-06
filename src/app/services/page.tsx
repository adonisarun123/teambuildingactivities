import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { ReadMore } from "@/components/ReadMore";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Corporate Team Building Services in India | Full Range" },
  description:
    "Outdoor adventures, indoor activities, virtual programs, corporate offsites, leadership development & flagship events. Custom-designed across 27+ Indian cities.",
  alternates: { canonical: "/services" },
};

type Service = {
  id: string;
  title: string;
  useWhen: string[];
  body: string[];
  listHeading: string;
  items: { name: string; desc: string }[];
  extra?: { text: string; linkLabel: string; href: string };
  cta: string;
};

const services: Service[] = [
  {
    id: "outdoor",
    title: "Outdoor team building activities",
    useWhen: [
      "Your team is stuck in a routine",
      "You want to see how people lead when things get unpredictable",
      "You have a full day or longer",
      "You want bonding and building, not just one or the other",
    ],
    body: [
      "Something interesting happens when you take a team outdoors. The polite work masks slip off. The quiet engineer becomes a sharp decision-maker during a river crossing. The loudest manager goes quiet when the task needs actual skill, not just confidence.",
      "That's the value of outdoor programs. You get to see your team as they really are — and so do they.",
      "Where we run them: Bangalore (Nandi Hills, resort properties off Mysore Road and Kanakapura Road), Mumbai (Karjat, Lonavala, Igatpuri), Delhi/NCR (Manesar, Neemrana, Damdama, Aravali resorts), Hyderabad (resorts off ORR), Chennai (ECR resorts, Mahabalipuram) — plus destination off-sites in Coorg, Munnar, Wayanad, Manali, Shillong, and Jaisalmer.",
    ],
    listHeading: "Outdoor activities we run",
    items: [
      { name: "Adventure activities", desc: "Rope courses, zip lining, rappelling, archery — all run with certified safety leads." },
      { name: "Treasure hunts", desc: "Multi-team challenges across resort properties, heritage spots, or city zones. We've run them in Hampi, Old Delhi, Pondicherry, and dozens of resort properties." },
      { name: "Raft building and water challenges", desc: "Teams plan, build, test, and race rafts they made themselves." },
      { name: "Outdoor strategic games", desc: "Large-scale physical versions of business simulations, designed for 30 to 500 people." },
      { name: "Survival challenges", desc: "For senior leadership teams who want stakes that feel real." },
    ],
    extra: {
      text: "Browse outdoor formats in detail on our",
      linkLabel: "outdoor activities page",
      href: "/outdoor-team-building-activities",
    },
    cta: "Get a free outdoor program quote →",
  },
  {
    id: "indoor",
    title: "Indoor team building activities",
    useWhen: [
      "The budget is tight",
      "The weather is unpredictable",
      "You only have half a day",
      "The team is office-bound and you need something that fits a banquet hall, hotel ballroom, or large conference room",
    ],
    body: [
      "People assume outdoor programs are always better. They're not. For shorter formats — half-day sessions, two-hour energisers, single evening events — indoors often wins on focus. The constraint of a room creates tighter communication and clearer learning moments.",
    ],
    listHeading: "Indoor activities we run",
    items: [
      { name: "Escape rooms", desc: "Physical and mobile setups for groups of 4–8 per room." },
      { name: "Murder mystery experiences", desc: "Narrative-driven; works brilliantly for 30–150 person groups." },
      { name: "Mafia war games", desc: "Political dynamics, trust, and reading the room." },
      { name: "Tetris Tower", desc: "Collaborative building with shifting, unstable pieces." },
      { name: "Cook-it-up sessions", desc: "Culinary team challenges that bring cross-functional groups together." },
      { name: "Drum jam sessions", desc: "Non-verbal collaboration that's surprisingly powerful for kicking off off-sites." },
      { name: "Riddle Dash and puzzle formats", desc: "Built for analytical teams — engineering, finance, data." },
      { name: "Business simulations", desc: "For L&D-led leadership development programs." },
      { name: "Indoor icebreakers and energisers", desc: "Short formats for kickoffs and town halls." },
    ],
    extra: {
      text: "Not sure which indoor format fits? See our",
      linkLabel: "indoor activities guide",
      href: "/indoor-team-building-activities",
    },
    cta: "Plan a free indoor program walkthrough →",
  },
  {
    id: "virtual",
    title: "Virtual team building activities",
    useWhen: [
      "Your team is spread across cities or countries",
      "You're onboarding remote joiners",
      "You want regular engagement without flying everyone in",
      "The travel budget is gone for the quarter",
    ],
    body: [
      "Virtual got a bad reputation during the pandemic — mostly because companies tried to copy in-person formats to Zoom. The good virtual programs are built for the medium. Small breakout groups. Short sessions. Trained facilitators. They actually work.",
    ],
    listHeading: "Virtual activities we run",
    items: [
      { name: "Virtual escape rooms", desc: "Themed challenges, small groups per room." },
      { name: "Virtual cooking classes", desc: "Ingredient kits shipped to participants, live chef-led sessions." },
      { name: "Online treasure hunts and trivia", desc: "Fast-paced energisers for shorter slots." },
      { name: "Virtual murder mysteries", desc: "Narrative-driven, 90–120 minutes." },
      { name: "Cross-cultural sessions", desc: "For globally distributed teams." },
      { name: "Structured icebreakers with breakouts", desc: "For distributed team meetings and quarterly all-hands." },
      { name: "Hybrid programs", desc: "For the messy reality where half the team is in the office and half is remote." },
    ],
    extra: {
      text: "For more, see our",
      linkLabel: "guide to virtual team building",
      href: "/virtual-team-building-activities",
    },
    cta: "Design your free virtual session →",
  },
  {
    id: "offsites",
    title: "Corporate off-sites and team outings",
    useWhen: [
      "You're planning your annual offsite",
      "You need a sales kickoff",
      "You want a post-quarter celebration",
      "Your team simply hasn't been in the same room in nine months",
    ],
    body: [
      "A good offsite isn't just a team-building program with an overnight stay tacked on. It's a different format. Lower learning intensity per hour, but higher cumulative impact because of the time together, the meals, and the late-night conversations that don't happen at the office.",
      "We've put together hundreds of off-sites across India. Tell us your group size, dates, and what you want to walk away with. We'll come back with two or three venue options that fit.",
    ],
    listHeading: "Off-sites we run",
    items: [
      { name: "One-day team outings", desc: "Resort properties around major metros, full-day formats." },
      { name: "Two-day overnight off-sites", desc: "Strategy, team building, plus recovery time." },
      { name: "Three-day leadership retreats", desc: "Deep work on strategy, alignment, and culture." },
      { name: "Customised offsite agendas", desc: "Pre-program scoping, agenda design, facilitator team, post-program follow-up." },
      { name: "Venue selection", desc: "We've personally visited every property we recommend. No affiliate-link guesswork." },
    ],
    extra: {
      text: "See outing formats and planning guidance on our",
      linkLabel: "corporate team outing page",
      href: "/corporate-team-outing-activities",
    },
    cta: "Plan your corporate offsite for free →",
  },
  {
    id: "leadership",
    title: "Leadership development and experiential learning",
    useWhen: [
      "You're an L&D head designing a structured program with measurable outcomes",
      "You need Kirkpatrick-level evaluation with pre and post assessments",
      "The deliverable isn't engagement scores — it's reportable behavioural change",
    ],
    body: [
      "This is where team building crosses into formal learning and development. These programs are usually built over 8–12 weeks of design work. The earlier we talk, the better the program.",
    ],
    listHeading: "Leadership programs we offer",
    items: [
      { name: "First-time manager programs", desc: "Typically multi-day residential formats." },
      { name: "Senior leadership offsites", desc: "Strategy, alignment, plus team effectiveness." },
      { name: "High-potential development programs", desc: "Multi-month engagements with experiential touchpoints." },
      { name: "Cross-functional collaboration labs", desc: "For organisations going through restructuring or M&A." },
      { name: "Behavioural assessments and post-program coaching", desc: "For individual contributors stepping into leadership roles." },
    ],
    extra: {
      text: "Explore leadership-focused formats on our",
      linkLabel: "leadership activities page",
      href: "/leadership-team-building-activities",
    },
    cta: "Discuss your leadership program free of cost →",
  },
  {
    id: "flagship",
    title: "Corporate events and flagship engagements",
    useWhen: [
      "You're planning an annual day, foundation day, sales conference, women's day event, or all-hands gathering",
      "You need production-grade event execution alongside meaningful content",
    ],
    body: [
      "These are different beasts from regular team building. They need stage production, AV scale, big-format hosting, and the ability to make hundreds of people feel like part of something — not just attendees in a room.",
    ],
    listHeading: "Flagship events we run",
    items: [
      { name: "Annual day events", desc: "Awards, team performances, themed nights, full event production." },
      { name: "Women's day celebrations", desc: "Beyond the cake-and-flowers default; real conversations and meaningful experiences." },
      { name: "Sales kickoffs", desc: "Agenda design, energisers, content sessions, awards." },
      { name: "Founder's day and milestone celebrations", desc: "Built around your company's story." },
      { name: "CSR-linked team activities", desc: "Give-back programs that double as team experiences." },
    ],
    cta: "Plan your flagship event with a free consult →",
  },
  {
    id: "wellness",
    title: "Wellness and mindfulness programs",
    useWhen: [
      "The team is showing signs of burnout",
      "You're running a quarterly wellness theme",
      "You want to add a wellness layer to an offsite without it feeling tacked on",
    ],
    body: [
      "Wellness programs done well are not about yoga mats and motivational posters. They're about giving people real tools to manage stress, build resilience, and notice when they need to slow down.",
    ],
    listHeading: "Wellness programs we offer",
    items: [
      { name: "Mindfulness and meditation workshops", desc: "Short live sessions or longer series." },
      { name: "Yoga and movement sessions", desc: "Typically at off-site venues, integrated into a larger agenda." },
      { name: "Stress management and resilience workshops", desc: "Practical content, not just theory." },
      { name: "Holistic wellness retreats", desc: "Multi-day formats at wellness-focused properties." },
    ],
    cta: "Build your free wellness program plan →",
  },
  {
    id: "onboarding",
    title: "Onboarding and new-joiner integration",
    useWhen: [
      "You're running campus or lateral hiring cohorts",
      "New joiners are ramping slowly or not integrating",
      "Your induction is all information transfer and no connection",
    ],
    body: [
      "Most onboarding programs over-index on information transfer (here's the HRMS, here's the leave policy, here's the org chart). What's usually missing is the experiential layer — the part that actually helps new joiners feel like part of the team.",
    ],
    listHeading: "Onboarding programs we offer",
    items: [
      { name: "Cohort-based induction experiences", desc: "Half-day or full-day formats." },
      { name: "Buddy program kickoffs", desc: "Structured pairings and first activities." },
      { name: "Culture immersion sessions", desc: "With company leaders, plus experiential content that shows (not tells) what the culture actually is." },
    ],
    cta: "Design your onboarding program for free →",
  },
];

const faqs = [
  {
    question: "Can a single program combine multiple services?",
    answer:
      "Yes, and the best programs usually do. A two-day offsite often combines outdoor activities (day one), an indoor strategic simulation (day two morning), and a wellness session (day two evening). The right mix depends on your team's energy, your objectives, and what the venue can support. We design the sequence after a pre-program conversation, not before.",
  },
  {
    question: "How quickly can a program be planned and delivered?",
    answer:
      "The standard timeline is 3–4 weeks from brief to delivery. That's enough time to scope, design, secure a venue, finalise logistics, and brief facilitators. We've turned programs around in 7–10 days when we had to, but the design quality suffers with the timeline. Anything under a week works best for lighter formats — energisers, half-day indoor activities, or virtual sessions.",
  },
  {
    question: "Do you handle end-to-end logistics or just the activity?",
    answer:
      "End-to-end. Transport, venue, food, AV, safety, branding, insurance, on-ground coordination, and post-event reporting. You shouldn't be juggling five vendors to run one program. One contract, one point of contact, one consolidated bill.",
  },
  {
    question: "Can programs be customised for specific industries or team types?",
    answer:
      "Yes — and they should be. A program for an engineering team in an IT services firm looks very different from one for an investment banking team. We adjust the activity selection, the debrief framing, and even the facilitator's language based on industry, function, and team seniority.",
  },
  {
    question: "What group sizes can you accommodate?",
    answer:
      "Anywhere from 10 people to 1,500+. Small groups get one facilitator and deep experiential learning. Mid-sized groups run parallel tracks with multiple facilitators and a program lead. Large groups work as tournament-style flagship formats with sub-teams, scoring, and a master facilitator coordinating production. There's no upper limit when it's planned right.",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "Organization", name: site.name, url: site.url },
    serviceType: "Corporate team building services",
    areaServed: "IN",
    description: metadata.description,
  };

  return (
    <>
      <section className="border-b border-navy-900/5 bg-gradient-to-b from-electric-50/60 to-white">
        <div className="container-site py-14">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            What Kind of Team Building Service Does Your Team Actually Need?
          </h1>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Why every team building website feels like a restaurant menu
          </h2>
          <div className="prose-site mt-4 max-w-3xl">
            <p>
              We organised this page by <strong>what's actually happening in
              your team</strong> — not by a menu of activities. Pick the
              situation that sounds like yours.
            </p>
          </div>
          <ReadMore>
            <p>
              Most of them are. Pick a few activities. Add a venue. Get a bill.
              That works if you already know exactly what you need. Most HR
              managers don't, and that's not a flaw. That's the job.
            </p>
            <p>
              You've been handed a budget, a headcount, and a vague brief like
              &ldquo;do something for the team.&rdquo; Scroll through the
              categories below. Each one tells you when to use it, what it's
              good for, and what to expect. If you're still not sure which fits
              — that's normal. A 20-minute call sorts it out faster than
              another hour of browsing.
            </p>
          </ReadMore>
          <Link href="/contact-us" className="btn-primary mt-6">
            Book your free program design call →
          </Link>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Services">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="tag hover:bg-electric-100">
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={idx % 2 === 1 ? "mt-14 bg-mist py-14" : "container-site mt-14"}
        >
          <div className={idx % 2 === 1 ? "container-site" : ""}>
            <h2 className="h-section">{s.title}</h2>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="prose-site max-w-3xl">
                  <p>{s.body[0]}</p>
                </div>
                {s.body.length > 1 && (
                  <ReadMore>
                    {s.body.slice(1).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </ReadMore>
                )}
                <h3 className="mt-7 font-bold text-navy-900">{s.listHeading}</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item.name} className="rounded-xl border border-navy-900/10 bg-white p-4">
                      <p className="text-sm font-semibold text-navy-900">{item.name}</p>
                      <p className="mt-1 text-sm leading-6 text-navy-800/75">{item.desc}</p>
                    </li>
                  ))}
                </ul>
                {s.extra && (
                  <p className="mt-5 text-sm text-navy-800/75">
                    {s.extra.text}{" "}
                    <Link href={s.extra.href} className="font-semibold text-electric-600 hover:underline">
                      {s.extra.linkLabel}
                    </Link>
                    .
                  </p>
                )}
                <Link href="/contact-us" className="btn-primary mt-6">
                  {s.cta}
                </Link>
              </div>
              <aside className="h-fit rounded-2xl border border-electric-100 bg-electric-50/50 p-6 lg:sticky lg:top-24">
                <p className="text-xs font-bold uppercase tracking-wide text-electric-700">
                  Use this when
                </p>
                <ul className="mt-3 space-y-2.5">
                  {s.useWhen.map((u) => (
                    <li key={u} className="flex gap-2 text-sm leading-6 text-navy-800/85">
                      <span className="mt-0.5 text-electric-500">→</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <section className="container-site mt-14">
        <h2 className="h-section">Still not sure which service fits?</h2>
        <div className="prose-site mt-4 max-w-3xl">
          <p>
            That's the most honest place to be. The right answer depends on
            your team, your timeline, your budget, and what's actually going on
            internally — and that conversation usually takes 20 minutes, not a
            brochure download.
          </p>
          <p>
            Tell us roughly what you're working with: group size, city, dates,
            and a line or two about your team. We'll come back within 24 hours
            with two or three options that fit.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn-primary">
            Get your free 20-minute scoping call →
          </Link>
          <Link href="/blog" className="btn-secondary">
            Browse the blog
          </Link>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }}
      />
    </>
  );
}
