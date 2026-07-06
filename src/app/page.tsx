import Link from "next/link";
import type { Metadata } from "next";
import { activities } from "@/data/activities";
import { cityPages } from "@/data/city-pages";
import { ActivityCard } from "@/components/ActivityCard";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Team Building Activities for Corporate Teams in India" },
  description:
    "Corporate team building activities designed by experiential learning experts. Outdoor, indoor, virtual & offsite programs delivered across 27+ Indian cities.",
  alternates: { canonical: "/" },
};

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
    what: "planning a quarterly engagement event for 80–200 people. Under pressure to show that engagement spend actually moved a metric.",
  },
  {
    who: "An L&D head",
    what: "designing a leadership program. You need real methodology, real measurement, real outcomes — not games with corporate branding.",
  },
  {
    who: "An admin manager or EA",
    what: "who just got asked to “organise something for the team.” You want it done well, on time, on budget, without 50 follow-up emails.",
  },
  {
    who: "A founder",
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-electric-700 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-electric-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-sunrise-500/20 blur-3xl" />
        <div className="container-site relative py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            What If Your Next Team Building Activity{" "}
            <span className="bg-gradient-to-r from-electric-400 to-sunrise-400 bg-clip-text text-transparent">
              Actually Changed How Your Team Works?
            </span>
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-white/80">
            <p>
              You're here because someone said, &ldquo;Let's do something for
              the team.&rdquo; Your manager. Your CHRO. Your founder. You opened
              a tab, typed &ldquo;team building activities,&rdquo; and landed on
              a page that looks like every other one. A grid of treasure hunts.
              Photos of people in matching t-shirts laughing too hard. A contact
              form.
            </p>
            <p>Let's skip that part.</p>
            <p>
              In hundreds of corporate programs across 27+ Indian cities over
              the last 13 years, we've watched one thing consistently move the
              needle on team performance. And it's never the activity itself.
              It's the <strong className="text-white">debrief</strong> — the 20
              minutes after the activity ends, when a trained facilitator walks
              the team through what just happened. Why one person took charge
              and then disappeared. Why the loudest voice wasn't the most useful
              one. Why two sub-teams compete instead of sharing information.
            </p>
            <p>
              That's the part most team-building companies skip. That's where we
              focus.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="btn-accent">
              Book a free 20-minute discovery call →
            </Link>
            <Link href="/team-building-activities" className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!border-white">
              Explore activities
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              [site.stats.yearsExperience, "Years of programs"],
              [site.stats.citiesCovered, "Indian cities"],
              [site.stats.groupSizes, "Group sizes"],
              [site.stats.rebookRate, "Rebook rate in 12 months"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="text-2xl font-extrabold text-white">{stat}</dt>
                <dd className="mt-1 text-xs text-white/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What team building should mean */}
      <section className="container-site mt-16">
        <h2 className="h-section">
          What &ldquo;team building activities&rdquo; should actually mean
        </h2>
        <div className="prose-site mt-5 max-w-3xl">
          <p>
            If your last team outing ended with everyone saying &ldquo;that was
            fun&rdquo; and nothing changed on Monday morning, you didn't run a
            team-building program. You ran a paid party.
          </p>
          <p>
            Real team-building activities are designed backwards. You don't
            start with &ldquo;what's a fun game we can play?&rdquo; You start
            with &ldquo;what's actually broken in this team that we need to
            surface and fix?&rdquo;
          </p>
          <p>
            Maybe the team is avoiding healthy conflict. Maybe decisions are
            being made by two or three voices while everyone else stays quiet.
            Maybe new joiners aren't integrating. Maybe there's a silent split
            between sub-teams that nobody is naming.
          </p>
          <p>
            Each of these has a specific kind of activity that surfaces it. And
            a specific kind of debrief that turns the experience into a real
            shift back at work. A trust walk and a strategic simulation are not
            interchangeable, even though both show up under &ldquo;team
            building activities&rdquo; on Google.
          </p>
          <p>
            The right program starts with a conversation about your team. Not a
            brochure.
          </p>
        </div>
        <Link href="/contact-us" className="btn-primary mt-6">
          Get a free custom program design →
        </Link>
      </section>

      {/* Formats */}
      <section className="mt-16 bg-mist py-16">
        <div className="container-site">
          <h2 className="h-section">The right format for your team's actual needs</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {formats.map((f) => (
              <Link key={f.slug} href={`/${f.slug}`} className="card group p-6">
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-electric-600">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-navy-800/80">{f.body}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-electric-600">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-800/70">
            Want to dig deeper first? Browse{" "}
            <Link href="/services" className="font-semibold text-electric-600 hover:underline">
              our full services
            </Link>{" "}
            or{" "}
            <Link href="/blog" className="font-semibold text-electric-600 hover:underline">
              the blog
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What separates great from forgettable */}
      <section className="container-site mt-16">
        <h2 className="h-section">What separates a great program from a forgettable one</h2>
        <p className="mt-3 text-sm text-navy-800/70">Three things — in this order.</p>
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
            <div key={item.t} className="relative rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
              <span className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-electric-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-2 font-bold text-navy-900">{item.t}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-800/75">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured activities */}
      <section className="container-site mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="h-section">A few formats from our library</h2>
          <Link href="/team-building-activities" className="hidden text-sm font-semibold text-electric-600 sm:block">
            See all activities →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <ActivityCard key={a.slug} activity={a} />
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="mt-16 bg-mist py-16">
        <div className="container-site">
          <h2 className="h-section">Who this microsite is for</h2>
          <p className="mt-3 text-sm text-navy-800/70">You're probably one of these people.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {personas.map((p) => (
              <div key={p.who} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
                <h3 className="font-bold text-navy-900">{p.who}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-800/75">{p.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-800/80">
            If any of these sound like you, you're in the right place.
          </p>
          <Link href="/contact-us" className="btn-primary mt-5">
            Start your free scoping call today →
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="container-site mt-16">
        <h2 className="h-section">Why teams choose us over generic event agencies</h2>
        <div className="prose-site mt-5 max-w-3xl">
          <p>
            Experience and design quality compound over time. We've spent 13+
            years doing this work. Hundreds of corporate programs delivered
            across IT/ITES, BFSI, manufacturing, and consulting. On-ground
            delivery in 27+ Indian cities. Group sizes from 10 to 1,500+, with
            end-to-end logistics included.
          </p>
          <p>
            We use a facilitator-first model; every program is led by a trained
            facilitator, not an event coordinator. And our rebook rate sits at
            87% within 12 months, because the work creates outcomes clients
            want to repeat.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="container-site mt-16">
        <h2 className="h-section">Team building in your city</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cityPages.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="card p-5 text-center">
              <span className="font-semibold text-navy-900">{c.city}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-site mt-16">
        <h2 className="h-section">What happens when you reach out</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            [
              "A real person replies within 4 working hours",
              "Not a chatbot. Not a templated auto-response.",
            ],
            [
              "A 20-minute scoping call",
              "We ask about your team. We don't pitch.",
            ],
            [
              "A custom proposal within 24 hours",
              "Specific activities tied to your objectives. The name of the facilitator who'll lead your program.",
            ],
          ].map(([t, d], i) => (
            <li key={t} className="relative rounded-2xl bg-mist p-6">
              <span className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-electric-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-2 font-bold text-navy-900">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-800/75">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-navy-800/80">
          That's the process. No multi-week sales funnel. No drip emails. No
          &ldquo;let me loop in my manager.&rdquo;
        </p>
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
