import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
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
      <section className="border-b border-navy-900/5 bg-gradient-to-b from-electric-50/60 to-white">
        <div className="container-site py-14">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Who Are We And Why Should You Trust Us With Your Team?
          </h1>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            What does over a decade of running team-building programs teach you
          </h2>
          <div className="prose-site mt-4 max-w-3xl">
            <p>It teaches you to make every mistake worth making.</p>
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
          <Link href="/contact-us" className="btn-primary mt-6">
            Book your free discovery call →
          </Link>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">What we believe about team building</h2>
        <p className="mt-3 max-w-3xl text-sm text-navy-800/70">
          After hundreds of programs, we hold a few strong opinions about this
          industry. Some of them are slightly contrarian.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {beliefs.map((b) => (
            <div key={b.t} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
              <h3 className="font-bold text-navy-900">{b.t}</h3>
              <p className="mt-2 text-sm leading-7 text-navy-800/80">{b.d}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="btn-secondary mt-6">
          See how we design custom programs →
        </Link>
      </section>

      <section className="mt-14 bg-mist py-14">
        <div className="container-site">
          <h2 className="h-section">Where we deliver programs</h2>
          <div className="prose-site mt-4 max-w-3xl">
            <p>We work across 27+ Indian cities. From the obvious to the less obvious.</p>
            <p>
              The obvious cities include Bangalore, Mumbai, Delhi, Hyderabad,
              Chennai, Pune, and Gurgaon. The less obvious destinations include
              Munnar, Coorg, Wayanad, Manali, Shillong, Jaisalmer, Lonavala,
              Manesar, Neemrana, Kabini, and Chikmagalur.
            </p>
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
          <Link href="/contact-us" className="btn-primary mt-6">
            Plan a program in your city today →
          </Link>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">Who we work with</h2>
        <div className="prose-site mt-4 max-w-3xl">
          <p>
            Companies that want outcomes — not just events. Our client base is
            weighted toward four sectors: IT and ITES companies (large product
            firms, IT services majors, captive GCCs, and well-funded startups);
            BFSI organisations (private banks, NBFCs, insurance companies, and
            fintech firms); manufacturing and engineering companies (global
            manufacturers with India operations); and consulting and
            professional services firms (Big Four firms, strategy boutiques,
            and law firms).
          </p>
          <p>
            We also work with healthcare and pharmaceutical companies, retail
            and e-commerce firms, and a growing number of mid-sized family-run
            businesses going through generational change.
          </p>
          <p>
            What our clients have in common isn't industry. It's intent.
            They're not looking for &ldquo;a fun day.&rdquo; They're looking
            for programs that move specific metrics. Retention.
            Cross-functional collaboration. Manager effectiveness. Post-merger
            integration. New joiner ramp-up time.
          </p>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">How we're built to deliver</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {delivery.map((d) => (
            <div key={d.t} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
              <h3 className="font-bold text-navy-900">{d.t}</h3>
              <p className="mt-2 text-sm leading-7 text-navy-800/80">{d.d}</p>
            </div>
          ))}
        </div>
        <Link href="/contact-us" className="btn-primary mt-6">
          Get your free custom program proposal →
        </Link>
      </section>

      <section className="mt-14 bg-navy-950 py-14 text-white">
        <div className="container-site">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we won't do</h2>
          <p className="mt-3 text-sm text-white/70">
            A short list. Because saying no is part of being good at this.
          </p>
          <ul className="mt-6 max-w-3xl space-y-4">
            {wontDo.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-white/85">
                <span className="mt-0.5 text-sunrise-400">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">The fastest way to know if we're a fit</h2>
        <div className="prose-site mt-4 max-w-3xl">
          <p>
            A 20-minute scoping call. We'll ask about your team. We won't pitch
            our packages. By the end of the call, you'll know whether we can
            help. If we can't, we'll usually know someone who can.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn-primary">
            Start your free scoping call →
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read why most programs fail
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
