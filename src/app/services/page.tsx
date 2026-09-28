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

const serviceImages: Record<string, string> = {
  outdoor: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
  indoor: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  virtual: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  offsites: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  leadership: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  flagship: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  wellness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  onboarding: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
};

function ServiceIcon({ id, className = "h-5 w-5" }: { id: string; className?: string }) {
  switch (id) {
    case "outdoor":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "indoor":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "virtual":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "offsites":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "leadership":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "flagship":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    case "wellness":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "onboarding":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-fade-in-delayed {
              opacity: 0;
              animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
            }
            .animate-fade-in-delayed-2 {
              opacity: 0;
              animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
            }
          `,
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-navy-900/5 bg-gradient-to-b from-electric-50/40 via-white to-white pt-10 pb-20 lg:pt-14 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(105, 41, 212, 0.08) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-electric-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-sunrise-100/20 blur-3xl" />

        <div className="container-site">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.15]">
                What Kind of Team Building Service Does Your Team Actually Need?
              </h1>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-electric-600 mt-4">
                Why every team building website feels like a restaurant menu
              </h2>
            </div>

            <div className="prose-site text-lg leading-relaxed text-navy-800/90 max-w-3xl animate-fade-in-delayed">
              <p>
                We organised this page by <strong>what's actually happening in
                your team</strong> — not by a menu of activities. Pick the
                situation that sounds like yours.
              </p>
            </div>

            <div className="max-w-3xl animate-fade-in-delayed-2">
              <ReadMore>
                <div className="space-y-4 pt-2 text-navy-800/80 text-base leading-relaxed">
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
                </div>
              </ReadMore>
            </div>

            <div className="pt-2 animate-fade-in-delayed-2">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-7 py-4 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]">
                Book your free program design call →
              </Link>
            </div>

            {/* Quick Links Nav */}
            <div className="border-t border-navy-900/5 pt-8 animate-fade-in-delayed-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-navy-700 mb-4">
                Quick Navigation
              </p>
              <nav className="flex flex-wrap gap-2.5" aria-label="Services">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-navy-900/5 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-navy-800 shadow-card transition-all duration-300 hover:border-electric-400 hover:text-electric-600 hover:shadow-lift hover:-translate-y-0.5"
                  >
                    <span className="text-electric-500">
                      <ServiceIcon id={s.id} className="h-4 w-4" />
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 lg:py-28 transition-all duration-500 ${
            idx % 2 === 1 ? "bg-mist/35 border-y border-navy-900/5" : "bg-white"
          }`}
        >
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              
              {/* Content Column */}
              <div
                className={`space-y-8 lg:col-span-7 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2.5 rounded-2xl bg-electric-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-electric-700">
                    <ServiceIcon id={s.id} className="h-4 w-4" />
                    <span>Service Category</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                    {s.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="prose-site text-base leading-relaxed text-navy-800/90 max-w-none">
                  <p className="text-lg leading-relaxed text-navy-800/95 font-medium">{s.body[0]}</p>
                  {s.body.length > 1 && (
                    <ReadMore>
                      <div className="space-y-4 pt-2 text-navy-800/80">
                        {s.body.slice(1).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </ReadMore>
                  )}
                </div>

                {/* Use This When Sidebar */}
                <div className="rounded-2xl border border-electric-100/60 bg-electric-50/20 p-6 backdrop-blur-sm shadow-[0_4px_20px_rgba(123,63,242,0.02)]">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-electric-700">
                    Use this when
                  </p>
                  <ul className="mt-4 space-y-3">
                    {s.useWhen.map((u) => (
                      <li key={u} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-800/85">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-100 text-electric-600">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities List */}
                <div className="space-y-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy-700">
                    {s.listHeading}
                  </h3>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li
                        key={item.name}
                        className="group/item rounded-2xl border border-navy-900/5 bg-white p-5 shadow-card transition-all duration-300 hover:border-electric-300 hover:shadow-lift hover:-translate-y-0.5"
                      >
                        <p className="text-sm font-bold text-navy-900 group-hover/item:text-electric-600 transition-colors">
                          {item.name}
                        </p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-navy-800/70">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra & CTA */}
                <div className="pt-4 space-y-6">
                  {s.extra && (
                    <p className="text-sm text-navy-800/75">
                      {s.extra.text}{" "}
                      <Link
                        href={s.extra.href}
                        className="font-semibold text-electric-600 hover:text-electric-700 hover:underline transition-colors"
                      >
                        {s.extra.linkLabel}
                      </Link>
                      .
                    </p>
                  )}
                  <div>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-6 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </div>

              </div>

              {/* Visual Column */}
              <div
                className={`lg:col-span-5 lg:sticky lg:top-28 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-2.5 shadow-lift transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,21,31,0.15)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mist">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={serviceImages[s.id]}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-electric-400/10 blur-2xl group-hover:bg-electric-400/20 transition-all duration-500" />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* Still Not Sure Section */}
      <section className="container-site my-20 lg:my-32">
        <div className="relative overflow-hidden rounded-3xl border border-navy-900/5 bg-gradient-to-br from-white via-mist/30 to-electric-50/10 p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="absolute -right-20 -bottom-20 -z-10 h-80 w-80 rounded-full bg-electric-100/30 blur-3xl" />
          <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sunrise-100/20 blur-3xl" />

          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Still not sure which service fits?
            </h2>
            <div className="prose-site text-base leading-relaxed text-navy-800/85 space-y-4">
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
            <div className="mt-8 flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-6 py-4 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Get your free 20-minute scoping call →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/10 bg-white px-6 py-4 text-sm font-bold text-navy-900 shadow-card transition-all duration-300 hover:border-electric-400 hover:text-electric-600 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Browse the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-navy-900/5 my-12" />
      <FAQ items={faqs} />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }}
      />
    </>
  );
}
