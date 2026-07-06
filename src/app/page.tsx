import Link from "next/link";
import type { Metadata } from "next";
import { activities } from "@/data/activities";
import { cityPages } from "@/data/city-pages";
import { ActivityCard } from "@/components/ActivityCard";
import { ActivityMedia } from "@/components/ActivityMedia";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { ReadMore } from "@/components/ReadMore";
import { Wave } from "@/components/Wave";
import { heroImages } from "@/data/images";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Team Building Activities for Corporate Teams in India" },
  description:
    "Corporate team building activities designed by experiential learning experts. Outdoor, indoor, virtual & offsite programs delivered across 27+ Indian cities.",
  alternates: { canonical: "/" },
};

const categoryTiles = [
  { slug: "outdoor-team-building-activities", label: "Outdoor", emoji: "🏕️", desc: "Full-day formats under open sky" },
  { slug: "indoor-team-building-activities", label: "Indoor", emoji: "🏢", desc: "Office, hall & ballroom formats" },
  { slug: "virtual-team-building-activities", label: "Virtual", emoji: "💻", desc: "For distributed & hybrid teams" },
  { slug: "corporate-team-outing-activities", label: "Off-sites & outings", emoji: "🌄", desc: "Resort days & overnight programs" },
  { slug: "leadership-team-building-activities", label: "Leadership", emoji: "🧭", desc: "Programs with real methodology" },
  { slug: "fun-team-building-activities", label: "Fun & energisers", emoji: "🎉", desc: "Laughter-first, zero cringe" },
  { slug: "problem-solving-team-building-activities", label: "Problem solving", emoji: "🧩", desc: "For analytical teams" },
  { slug: "employee-engagement-activities", label: "Engagement", emoji: "⚡", desc: "Year-round calendars" },
];

const formats = [
  {
    slug: "outdoor-team-building-activities",
    title: "Outdoor team building activities",
    body: "Use this when your team is stuck in a routine. When you want to see who really leads under pressure. When you have a full day or longer and want to combine bonding with real learning. Outdoor formats — raft building, rope courses, treasure hunts across resort properties — put people in mild discomfort with new variables. That's where you see who leads under uncertainty, who shuts down, who connects unrelated dots, who builds bridges between sub-teams.",
  },
  {
    slug: "indoor-team-building-activities",
    title: "Indoor team building activities",
    body: "Use this when the budget is tight. When you have half a day. When the weather is unpredictable. When the team is office-bound. Indoor activities — escape rooms, business simulations, murder mysteries, cook-it-up sessions — punch above their weight when designed well. The constraint of a room forces clearer communication and tighter feedback loops.",
  },
  {
    slug: "virtual-team-building-activities",
    title: "Virtual team building activities",
    body: "Virtual works when it's not just a Zoom quiz. Virtual escape rooms, online cooking classes, and structured icebreakers with breakout rooms create real engagement when groups stay under 12 per facilitator and sessions run in 45–90 minute blocks. Use virtual when your team is distributed or hybrid, when you want to onboard remote joiners, or when you don't have a travel budget.",
  },
  {
    slug: "corporate-team-outing-activities",
    title: "Corporate off-sites and day outings",
    body: "Use this when you're planning an annual strategy. When you're kicking off a sales year. When your team hasn't been in the same room in nine months. Day outings at resort properties combine pool time, food, and 2–3 structured activities. Lower learning intensity. Higher recovery and connection value. Sometimes that's exactly what the team needs.",
  },
];

const personas = [
  {
    who: "An HR manager",
    emoji: "📋",
    what: "planning a quarterly engagement event for 80–200 people. Under pressure to show that engagement spend actually moved a metric.",
  },
  {
    who: "An L&D head",
    emoji: "🎓",
    what: "designing a leadership program. You need real methodology, real measurement, real outcomes — not games with corporate branding.",
  },
  {
    who: "An admin manager or EA",
    emoji: "🗂️",
    what: "who just got asked to “organise something for the team.” You want it done well, on time, on budget, without 50 follow-up emails.",
  },
  {
    who: "A founder",
    emoji: "🚀",
    what: "of a 30-person startup that hasn't done anything together in a year. You want the next time the team is in a room together to actually mean something.",
  },
];

const homeFaqs = [
  {
    question: "What are team-building activities, and how are they different from a team outing?",
    answer:
      "A team outing is recreation, food, drinks, and maybe a resort day. Team building activities are structured experiences with a clear learning goal, run by a trained facilitator, and followed by a debrief that connects what happened in the activity to how the team works back at the office. The activity is the medium. The behavioural shift is the real product.",
  },
  {
    question: "How long should a corporate team-building activity be?",
    answer:
      "Depends on the goal. A single icebreaker or energiser runs 30–45 minutes. A meaningful team-building activity with a proper debrief needs 2–3 hours. A full-day program with multiple activities and structured reflection runs 6–8 hours. Leadership offsites typically run 2–3 days. The mistake most companies make is squeezing a half-day of activities into a 90-minute slot and getting half a day's worth of learning out of it.",
  },
  {
    question: "How many people can join a single team-building activity?",
    answer:
      "Anywhere from 10 to 1,500+. The structure changes with size. Small groups (under 30) get one facilitator and deep experiential learning. Mid-sized groups (50–200) need parallel tracks with multiple facilitators. Large groups (500+) work best as tournament-style flagship formats with sub-teams and scoring. There's no upper limit if it's planned right.",
  },
  {
    question: "How do we measure ROI on team-building activities?",
    answer:
      "Three layers. Immediate (participant feedback collected during the debrief). Short-term (a 30-day pulse on specific behaviours you wanted to shift). Long-term (engagement scores, retention, time-to-productivity for new joiners). If the vendor can't help you set up at least the first two layers, you're buying a party, not a program.",
  },
  {
    question: "What formats can a team-building program take?",
    answer:
      "Indoor activities, outdoor adventures, virtual sessions for distributed teams, day outings at resort properties, overnight off-sites, multi-day leadership retreats, and flagship corporate events for hundreds of people. The right format depends on group size, available time, team composition, and what you're trying to achieve. We recommend a format after a scoping conversation — never before.",
  },
];

export default function HomePage() {
  const featured = [
    "corporate-treasure-hunt",
    "raft-building-challenge",
    "escape-room-challenge",
    "drum-circle",
    "virtual-murder-mystery",
    "corporate-masterchef-cookoff",
    "box-cricket-league",
    "movie-making-challenge",
  ]
    .map((slug) => activities.find((a) => a.slug === slug)!)
    .filter(Boolean);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: "IN",
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };

  return (
    <>
      {/* Hero — photo collage, Airbnb-style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-electric-50 to-white">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-sunrise-100 blur-3xl" aria-hidden />
        <div className="container-site relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="eyebrow">🎯 Facilitator-led team building</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-[54px]">
              Team building that{" "}
              <span className="relative inline-block whitespace-nowrap text-electric-600">
                actually works
                <svg
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full sm:-bottom-3"
                  aria-hidden
                >
                  <path d="M2 8 Q100 0 198 7" stroke="#f97d09" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              on Monday morning
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-navy-800">
              Structured experiences, trained facilitators, and the debrief
              most vendors skip — across 27+ Indian cities.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary !px-7 !py-3.5 !text-base">
                Book a free discovery call →
              </Link>
              <Link href="/team-building-activities" className="btn-secondary !px-7 !py-3.5 !text-base">
                Explore activities
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-3">
              {[
                [site.stats.yearsExperience, "years"],
                [site.stats.citiesCovered, "cities"],
                [site.stats.groupSizes, "group sizes"],
                [site.stats.rebookRate, "rebook rate"],
              ].map(([stat, label]) => (
                <div key={label} className="stat-pill">
                  <dt className="order-2 text-xs font-bold uppercase tracking-wide text-navy-800/60">
                    {label}
                  </dt>
                  <dd className="order-1 text-lg font-extrabold text-electric-600">{stat}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Photo collage */}
          <div className="hidden grid-cols-2 gap-3 lg:grid" aria-hidden>
            {heroImages.map((img, i) => (
              <div
                key={img.src}
                className={`overflow-hidden rounded-3xl shadow-lift ${i % 2 ? "translate-y-5" : ""} ${i === 0 ? "rotate-[-2deg]" : ""} ${i === 3 ? "rotate-[2deg]" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="container-site mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="h-section">Browse by category</h2>
          <Link href="/team-building-activities" className="section-link hidden sm:block">
            See all →
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categoryTiles.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="card group flex items-start gap-3 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric-50 text-xl">
                {c.emoji}
              </span>
              <span>
                <span className="block text-sm font-extrabold text-navy-900 group-hover:text-electric-600">
                  {c.label}
                </span>
                <span className="mt-0.5 block text-xs leading-5 text-navy-800/70">{c.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top activities */}
      <section className="container-site mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="h-section">Top team building activities</h2>
            <p className="mt-1 text-sm text-navy-800/70">
              The formats Indian teams book most — proven, scalable, loved.
            </p>
          </div>
          <Link href="/team-building-activities" className="section-link hidden sm:block">
            See all {activities.length} →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a) => (
            <ActivityCard key={a.slug} activity={a} />
          ))}
        </div>
      </section>

      {/* Editorial: our point of view — compact, collapsible */}
      <Wave fill="#f8f7fa" className="mt-16" />
      <section className="bg-mist pb-14 pt-4">
        <div className="container-site">
          <p className="eyebrow">💡 Our point of view</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border-2 border-navy-900/10 bg-white p-7 shadow-card">
              <span className="icon-dot bg-electric-50">🔁</span>
              <h2 className="mt-4 text-xl font-extrabold text-navy-900">
                Why every team-building website looks exactly the same
              </h2>
              <p className="prose-site mt-3">
                You're here because someone said, &ldquo;Let's do something for
                the team.&rdquo; You opened a tab, typed &ldquo;team building
                activities,&rdquo; and landed on a page that looks like every
                other one. Let's skip that part.
              </p>
              <ReadMore>
                <p>
                  A grid of treasure hunts. Photos of people in matching
                  t-shirts laughing too hard. A contact form. Your manager,
                  CHRO or founder asked for &ldquo;something for the
                  team&rdquo; — and every vendor answers with the same page.
                </p>
                <p>
                  In hundreds of corporate programs across 27+ Indian cities
                  over the last 13 years, we've watched one thing consistently
                  move the needle on team performance. And it's never the
                  activity itself. It's the <strong>debrief</strong> — the 20
                  minutes after the activity ends, when a trained facilitator
                  walks the team through what just happened. Why one person
                  took charge and then disappeared. Why the loudest voice
                  wasn't the most useful one. Why two sub-teams compete instead
                  of sharing information.
                </p>
                <p>
                  That's the part most team-building companies skip. That's
                  where we focus.
                </p>
              </ReadMore>
              <Link href="/contact-us" className="btn-primary mt-5">
                Book a free discovery call →
              </Link>
            </div>
            <div className="rounded-3xl border-2 border-navy-900/10 bg-white p-7 shadow-card">
              <span className="icon-dot bg-sunrise-50">🎯</span>
              <h2 className="mt-4 text-xl font-extrabold text-navy-900">
                What &ldquo;team building&rdquo; should actually mean
              </h2>
              <p className="prose-site mt-3">
                If your last team outing ended with everyone saying &ldquo;that
                was fun&rdquo; and nothing changed on Monday morning, you
                didn't run a team-building program. You ran a paid party.
              </p>
              <ReadMore>
                <p>
                  Real team-building activities are designed backwards. You
                  don't start with &ldquo;what's a fun game we can play?&rdquo;
                  You start with &ldquo;what's actually broken in this team
                  that we need to surface and fix?&rdquo;
                </p>
                <p>
                  Maybe the team is avoiding healthy conflict. Maybe decisions
                  are being made by two or three voices while everyone else
                  stays quiet. Maybe new joiners aren't integrating. Maybe
                  there's a silent split between sub-teams that nobody is
                  naming.
                </p>
                <p>
                  Each of these has a specific kind of activity that surfaces
                  it. And a specific kind of debrief that turns the experience
                  into a real shift back at work. The right program starts with
                  a conversation about your team. Not a brochure.
                </p>
              </ReadMore>
              <Link href="/contact-us" className="btn-secondary mt-5">
                Get a free custom program design →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Wave fill="#f8f7fa" flip />

      {/* Formats */}
      <section className="container-site mt-16">
        <h2 className="h-section">The right format for your team's actual needs</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {formats.map((f) => (
            <Link key={f.slug} href={`/${f.slug}`} className="card group p-6">
              <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-electric-600">
                {f.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-navy-800/85">{f.body}</p>
              <span className="section-link mt-4 inline-block">Explore →</span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-navy-800/70">
          Want to dig deeper first? Browse{" "}
          <Link href="/services" className="font-bold text-electric-600 hover:underline">
            our full services
          </Link>{" "}
          or{" "}
          <Link href="/blog" className="font-bold text-electric-600 hover:underline">
            the blog
          </Link>
          .
        </p>
      </section>

      {/* What separates great from forgettable */}
      <section className="container-site mt-16">
        <h2 className="h-section">What separates a great program from a forgettable one</h2>
        <p className="mt-2 text-sm text-navy-800/70">Three things — in this order.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "The pre-program conversation",
              d: "If a vendor sends you a PDF of 30 activities and asks you to pick, they're guessing. The right conversation starts with “what's actually going on in the team?” Activities are chosen after that. Not before.",
            },
            {
              t: "The facilitator, not the activity",
              d: "A mediocre activity with a great facilitator beats a great activity with a poor facilitator every single time. We've watched the same activity create transformation in one team and indifference in another. The difference was always who was running the room. Every program we run is led by a facilitator with at least three years of experiential learning experience.",
            },
            {
              t: "The debrief",
              d: "The activity is just the setup. The structured reflection that follows — the questions, the patterns named, the connections drawn to how the team works back at the office — that's where behavioural change happens. If the agenda doesn't include 20–30 minutes of debrief after each activity, you're paying for entertainment.",
            },
          ].map((item, i) => (
            <div key={item.t} className="relative rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card">
              <span className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-electric-600 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-2 font-extrabold text-navy-900">{item.t}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-800/85">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="container-site mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="h-section">Team building in your city</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cityPages.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="group">
              <div className="overflow-hidden rounded-2xl shadow-card transition group-hover:shadow-lift">
                <ActivityMedia
                  activity={{ slug: c.slug, title: c.city, format: "Outdoor" }}
                  className="aspect-square w-full"
                  emojiClassName="text-3xl"
                />
              </div>
              <p className="pt-2.5 text-sm font-bold text-navy-900 group-hover:text-electric-600">
                {c.city}
              </p>
              <p className="text-xs text-navy-800/60">Team building & offsites</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <Wave fill="#fff7ec" className="mt-16" />
      <section className="band-warm pb-14 pt-4">
        <div className="container-site">
          <h2 className="h-section">Who this microsite is for</h2>
          <p className="mt-2 text-sm text-navy-800/70">You're probably one of these people.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p) => (
              <div key={p.who} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card">
                <span className="text-2xl">{p.emoji}</span>
                <h3 className="mt-3 font-extrabold text-navy-900">{p.who}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-800/85">{p.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-800/85">
            If any of these sound like you, you're in the right place.
          </p>
          <Link href="/contact-us" className="btn-primary mt-4">
            Start your free scoping call today →
          </Link>
        </div>
      </section>
      <Wave fill="#fff7ec" flip />

      {/* Why us + process */}
      <section className="container-site mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h-section">Why teams choose us over generic event agencies</h2>
          <div className="prose-site mt-5">
            <p>
              We use a facilitator-first model; every program is led by a
              trained facilitator, not an event coordinator. And our rebook
              rate sits at 87% within 12 months, because the work creates
              outcomes clients want to repeat.
            </p>
          </div>
          <ReadMore>
            <p>
              Experience and design quality compound over time. We've spent 13+
              years doing this work. Hundreds of corporate programs delivered
              across IT/ITES, BFSI, manufacturing, and consulting. On-ground
              delivery in 27+ Indian cities. Group sizes from 10 to 1,500+,
              with end-to-end logistics included.
            </p>
          </ReadMore>
        </div>
        <div>
          <h2 className="h-section">What happens when you reach out</h2>
          <ol className="mt-5 space-y-4">
            {[
              ["A real person replies within 4 working hours", "Not a chatbot. Not a templated auto-response."],
              ["A 20-minute scoping call", "We ask about your team. We don't pitch."],
              ["A custom proposal within 24 hours", "Specific activities tied to your objectives. The name of the facilitator who'll lead your program."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-electric-600 text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-extrabold text-navy-900">{t}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-navy-800/85">{d}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-6 text-navy-800/85">
            That's the process. No multi-week sales funnel. No drip emails. No
            &ldquo;let me loop in my manager.&rdquo;
          </p>
        </div>
      </section>

      <FAQ items={homeFaqs} />
      <CTASection
        heading="Get your custom proposal in 24 hours"
        subheading="Tell us your group size, city, dates and what's going on with the team. A real person replies within 4 working hours."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgJsonLd, websiteJsonLd, faqJsonLd(homeFaqs)]),
        }}
      />
    </>
  );
}
