import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { ReadMore } from "@/components/ReadMore";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "About Us | Corporate Team Building Specialists in India" },
  description:
    "Experiential learning experts with 13+ years of designing corporate team building programs across 27+ Indian cities. Facilitator-led and outcome-focused.",
  alternates: { canonical: "/about-us" },
};

const beliefs = [
  {
    t: "Most team-building activities fail because of the design, not the team",
    d: "Teams aren't broken when they show up at a team building event. They're tired. Distracted. Skeptical. Reading the room. If the activity doesn't earn their attention in the first 15 minutes, you've lost them. Good design respects this. Bad design assumes “they'll get into it once they start playing.” They won't.",
  },
  {
    t: "The facilitator matters more than the activity",
    d: "We've watched the same activity create transformation in one team and indifference in another. Same brief. Same materials. Same agenda. The difference was always the facilitator. That's why we don't subcontract to gig facilitators. Every program is led by someone with at least three years of experiential learning experience.",
  },
  {
    t: "The debrief is the product. The activity is just the packaging",
    d: "If your program doesn't have structured reflection built in — questions like “What did you notice about how decisions got made?” and “Who took a risk you didn't expect?” — you didn't run a team building program. You ran an offsite. Both have value. They're not the same thing.",
  },
  {
    t: "Customisation isn't a feature, it's the baseline",
    d: "We don't have a “standard package.” Every program is built backwards from a real conversation about what's going on in your team. If a vendor sends you a brochure of activities to pick from before they understand your context, find another vendor.",
  },
];

const delivery = [
  {
    t: "A facilitator-first team",
    d: "The people who actually run your program are the most experienced part of our team. Not the people who sell it. Our facilitators come from backgrounds in organisational development, theatre, adventure sports, education, and corporate L&D.",
  },
  {
    t: "End-to-end logistics",
    d: "We handle transport, venue, food, AV, branding, safety briefings, and insurance. The HR or admin manager planning the program shouldn't have to coordinate with five different vendors.",
  },
  {
    t: "A library of 200+ activities plus custom design",
    d: "We have a deep catalogue of indoor, outdoor, virtual, and hybrid activities. But more importantly, we build new activities from scratch when the standard ones don't fit the brief.",
  },
  {
    t: "Measurement built in",
    d: "Pre-program intake conversations. In-program observation notes. Post-program participant feedback. And where the client wants it, 30-day and 90-day behavioural pulse surveys. The Kirkpatrick model is built into longer engagements.",
  },
];

const wontDo = [
  "We won't promise a transformation in 90 minutes. A two-hour icebreaker is an icebreaker. Call it that. Let people enjoy it as that.",
  "We won't recommend a venue we haven't personally visited. Most “team outing” listing sites are pure affiliate plays. We've walked through every venue we recommend.",
  "We won't run activities that our facilitators can't deliver safely. No outdoor adventure activity goes out without certified safety leads and insurance coverage.",
  "We won't load your inbox with 50 follow-ups. One owner. One thread. One proposal in 24 hours.",
];

const faqs = [
  {
    question: "How long has the team been running corporate team building programs?",
    answer:
      "Over 13 years. Hundreds of corporate programs delivered. The leadership team has a combined 20+ years in experiential learning, organisational development, and adventure-based education.",
  },
  {
    question: "What makes you different from event management companies that also offer team building?",
    answer:
      "Event management companies are great at logistics — venues, food, AV, transport. They typically subcontract the activity facilitation. Our model is the opposite. Facilitation is core. Logistics is the wrapper. The person designing your program has spent thousands of hours running structured reflection conversations with corporate teams. That's the real difference.",
  },
  {
    question: "Do you only work with large enterprises?",
    answer:
      "No. We've run programs for 12-person startups and 1,500-person flagship corporate events. The format scales. The principles stay the same. Smaller teams often see disproportionate impact because the entire team is in the room together.",
  },
  {
    question: "Are your facilitators in-house or freelancers?",
    answer:
      "A mix. Core senior facilitators are full-time. We also work with a vetted panel of associate facilitators with at least three years of experiential learning experience who have gone through our internal certification. Every program has a lead facilitator who is accountable for outcomes. Not a rotating gig worker.",
  },
  {
    question: "What cities and regions do you operate in?",
    answer:
      "27+ cities across India. Active operations in Bangalore (HQ), Mumbai, Delhi/NCR, Hyderabad, Chennai, Pune, Kolkata, and Ahmedabad. Destination off-sites in Coorg, Lonavala, Munnar, Manesar, Neemrana, Wayanad, Manali, Jaisalmer, and Shillong. Virtual programs delivered globally.",
  },
];

function IndustryIcon({ sector, className = "h-6 w-6 text-electric-600" }: { sector: string; className?: string }) {
  switch (sector) {
    case "IT & ITES":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "BFSI":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "Manufacturing":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "Consulting":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    url: `${site.url}/about-us`,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      description: metadata.description,
    },
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
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column (Content) */}
            <div className="space-y-8 lg:col-span-7 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-electric-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-electric-700">
                  About Our Team
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.15]">
                  Who Are We And Why Should You Trust Us With Your Team?
                </h1>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-electric-600 mt-4">
                  What does over a decade of running team-building programs teach you
                </h2>
              </div>

              <div className="prose-site text-lg leading-relaxed text-navy-800/90 max-w-3xl animate-fade-in-delayed">
                <p>It teaches you to make every mistake worth making.</p>
              </div>

              <div className="max-w-3xl animate-fade-in-delayed-2">
                <ReadMore>
                  <div className="space-y-4 pt-2 text-navy-800/80 text-base leading-relaxed">
                    <p>
                      We've designed activities that flopped and figured out why. We've
                      watched a treasure hunt save a team that was three weeks from
                      imploding. We've watched a beautifully designed leadership
                      simulation fall flat because the facilitator misread the room.
                      We've built programs for 12-person startups in Koramangala and
                      for 1,500-person flagship events at five-star properties in Goa.
                      We've delivered virtual programs during the pandemic when nobody
                      — including us — had a playbook for it. So we built one from
                      scratch.
                    </p>
                    <p>
                      That's what experience looks like. Not a polished origin story. A
                      long list of programs. A longer list of debrief conversations.
                      And a working point of view on what actually changes how teams
                      work — versus what just makes for a good Instagram post.
                    </p>
                  </div>
                </ReadMore>
              </div>

              <div className="pt-2 animate-fade-in-delayed-2">
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-7 py-4 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]">
                  Book your free discovery call →
                </Link>
              </div>
            </div>

            {/* Right Column (Visual) */}
            <div className="lg:col-span-5 animate-fade-in-delayed">
              <div className="group relative overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-2.5 shadow-lift transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,21,31,0.15)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Facilitators and team members collaborating"
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

      {/* Beliefs Section */}
      <section className="container-site py-20 lg:py-28">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            What we believe about team building
          </h2>
          <p className="text-base text-navy-800/70 leading-relaxed">
            After hundreds of programs, we hold a few strong opinions about this
            industry. Some of them are slightly contrarian.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {beliefs.map((b, i) => (
            <div
              key={b.t}
              className="relative rounded-2xl border border-navy-900/5 bg-white p-8 shadow-card transition-all duration-300 hover:border-electric-300 hover:shadow-lift hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl font-extrabold text-electric-500/5 select-none">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-navy-900 pr-12">{b.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-800/80">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/10 bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-card transition-all duration-300 hover:border-electric-400 hover:text-electric-600 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
          >
            See how we design custom programs →
          </Link>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-mist/35 border-y border-navy-900/5 py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column (Content) */}
            <div className="space-y-8 lg:col-span-7">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Where we deliver programs
                </h2>
                <div className="prose-site text-base leading-relaxed text-navy-800/80">
                  <p>We work across 27+ Indian cities. From the obvious to the less obvious.</p>
                </div>
              </div>

              {/* City Chips */}
              <div className="flex flex-wrap gap-2.5 max-w-2xl">
                {["Bangalore (HQ)", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune", "Gurgaon", "Munnar", "Coorg", "Wayanad", "Manali", "Shillong", "Jaisalmer", "Lonavala", "Manesar", "Neemrana", "Kabini", "Chikmagalur"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-xl border border-navy-900/5 bg-white px-4 py-2 text-xs font-bold text-navy-800 shadow-card transition duration-200 hover:border-electric-400 hover:text-electric-600"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="max-w-2xl">
                <ReadMore>
                  <div className="space-y-4 pt-2 text-navy-800/80 text-sm leading-relaxed">
                    <p>
                      Our Bangalore HQ runs the largest volume of programs. But our
                      Delhi/NCR operations have grown sharply over the last 24 months.
                      We now have facilitators based in NCR and partner venues across
                      Manesar, Neemrana, Damdama Lake, and Aravali resort properties.
                    </p>
                    <p>
                      We also run virtual programs for distributed teams across India
                      and globally. Active client teams in the US, UK, Singapore, and
                      the Middle East.
                    </p>
                  </div>
                </ReadMore>
              </div>

              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-6 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Plan a program in your city today →
                </Link>
              </div>
            </div>

            {/* Right Column (Visual) */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-2.5 shadow-lift transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,21,31,0.15)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    alt="Corporate offsite and team building resort venue"
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

      {/* Who We Work With Section */}
      <section className="container-site py-20 lg:py-28">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Who we work with
          </h2>
          <p className="text-base text-navy-800/80 leading-relaxed">
            Companies that want outcomes — not just events. Our client base is
            weighted toward four sectors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["IT & ITES", "Large product firms, IT services majors, captive GCCs, and well-funded startups."],
            ["BFSI", "Private banks, NBFCs, insurance companies, and fintech firms."],
            ["Manufacturing", "Global manufacturers and engineering companies with India operations."],
            ["Consulting", "Big Four firms, strategy boutiques, and law firms."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="group rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card transition-all duration-300 hover:border-electric-300 hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-electric-50 text-electric-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-electric-100">
                <IndustryIcon sector={t} />
              </div>
              <h3 className="mt-5 font-bold text-navy-900">{t}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-navy-800/75">{d}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mt-8">
          <ReadMore>
            <div className="space-y-6 pt-2 text-navy-800/80 text-base leading-relaxed">
              <p>
                We also work with healthcare and pharmaceutical companies, retail
                and e-commerce firms, and a growing number of mid-sized family-run
                businesses going through generational change.
              </p>
              <div className="border-l-4 border-electric-500 bg-electric-50/20 p-6 rounded-r-2xl shadow-[0_4px_20px_rgba(123,63,242,0.01)]">
                <p className="text-base font-semibold text-navy-900 leading-relaxed">
                  What our clients have in common isn't industry. It's intent.
                  They're not looking for &ldquo;a fun day.&rdquo; They're looking
                  for programs that move specific metrics. Retention.
                  Cross-functional collaboration. Manager effectiveness. Post-merger
                  integration. New joiner ramp-up time.
                </p>
              </div>
            </div>
          </ReadMore>
        </div>
      </section>

      {/* How We're Built Section */}
      <section className="bg-mist/35 border-y border-navy-900/5 py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column (Visual) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="group relative overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-2.5 shadow-lift transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,21,31,0.15)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mist">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Facilitator team collaborating on program delivery"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>
                <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full bg-electric-400/10 blur-2xl group-hover:bg-electric-400/20 transition-all duration-500" />
              </div>
            </div>

            {/* Right Column (Content) */}
            <div className="space-y-8 lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                How we're built to deliver
              </h2>
              
              {/* Timeline Track */}
              <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-electric-100">
                {delivery.map((d) => (
                  <div key={d.t} className="relative pl-10 group">
                    <div className="absolute left-1.5 top-1.5 h-4.5 w-4.5 rounded-full border-4 border-white bg-electric-500 shadow-[0_0_0_2px_rgba(123,63,242,0.2)] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                      {d.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                      {d.d}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-6 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Get your free custom program proposal →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Won't Do Section */}
      <section className="container-site my-20 lg:my-28">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_rgba(21,21,31,0.2)]">
          <div className="absolute -right-20 -bottom-20 -z-10 h-80 w-80 rounded-full bg-electric-900/20 blur-3xl" />
          <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sunrise-900/10 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                What we won't do
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                A short list. Because saying no is part of being good at this.
              </p>
            </div>

            {/* Right List */}
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {wontDo.map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-white/85">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sunrise-500/25 text-sunrise-400 text-xs font-bold">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Scoping Call Section */}
      <section className="container-site my-20 lg:my-32">
        <div className="relative overflow-hidden rounded-3xl border border-navy-900/5 bg-gradient-to-br from-white via-mist/30 to-electric-50/10 p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="absolute -right-20 -bottom-20 -z-10 h-80 w-80 rounded-full bg-electric-100/30 blur-3xl" />
          <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-sunrise-100/20 blur-3xl" />

          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              The fastest way to know if we're a fit
            </h2>
            <div className="prose-site text-base leading-relaxed text-navy-800/85">
              <p>
                A 20-minute scoping call. We'll ask about your team. We won't pitch
                our packages. By the end of the call, you'll know whether we can
                help. If we can't, we'll usually know someone who can.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-600 px-6 py-4 text-sm font-bold text-white shadow-card transition-all duration-300 hover:bg-electric-700 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Start your free scoping call →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/10 bg-white px-6 py-4 text-sm font-bold text-navy-900 shadow-card transition-all duration-300 hover:border-electric-400 hover:text-electric-600 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Read why most programs fail
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
